<template>
  <div
    ref="root"
    class="relative font-sans"
    :class="[{ 'opacity-60 pointer-events-none': disabled }]"
    @keydown.stop.prevent="onKeydown"
  >
    <!-- Control -->
    <div
      class="min-h-10 w-full select-none cursor-pointer rounded-xl border border-gray-300 bg-white px-2.5 py-1.5 pr-10 flex items-center gap-2 flex-wrap focus:outline-none focus:ring-4 focus:ring-indigo-200"
      role="combobox"
      :aria-expanded="isOpen ? 'true' : 'false'"
      :aria-disabled="disabled ? 'true' : 'false'"
      tabindex="0"
      @click="toggleOpen"
    >
      <!-- Multiple: tags -->
      <template v-if="multiple">
        <span
          v-for="tag in selectedDisplay"
          :key="tag.valueKey + '-tag'"
          class="inline-flex items-center gap-1 rounded-full bg-indigo-50 text-indigo-700 text-sm px-2 py-0.5"
        >
          {{ tag.label }}
          <button
            type="button"
            class="leading-none text-indigo-700/80 hover:text-indigo-900"
            @click.stop="removeTag(tag)"
          >
            ×
          </button>
        </span>
        <span v-if="!hasValue" class="text-gray-400">{{ placeholder }}</span>
      </template>

      <!-- Single -->
      <span v-else class="text-gray-900">
        <span v-if="selectedDisplay[0]">{{ selectedDisplay[0].label }}</span>
        <span v-else class="text-gray-400">{{ placeholder }}</span>
      </span>

      <!-- Clear -->
      <button
        v-if="clearable && !disabled && hasValue"
        class="absolute right-8 top-1/2 -translate-y-1/2 text-lg leading-none text-gray-400 hover:text-gray-600"
        type="button"
        aria-label="Clear"
        @click.stop="clearSelection"
      >
        ×
      </button>

      <!-- Caret -->
      <span class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">▾</span>
    </div>

    <!-- Dropdown -->
    <div v-if="isOpen" class="absolute left-0 right-0 z-20 mt-1 rounded-xl border border-gray-200 bg-white shadow-xl">
      <!-- Search -->
      <div class="p-2 border-b border-gray-100">
        <input
          ref="searchInput"
          type="text"
          v-model="search"
          class="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-4 focus:ring-indigo-100"
          :placeholder="searchPlaceholder"
          @keydown.stop
        />
      </div>

      <ul class="max-h-60 overflow-auto py-1" role="listbox">
        <li
          v-for="(opt, idx) in filteredOptions"
          :key="opt.valueKey"
          role="option"
          :aria-selected="isSelected(opt) ? 'true' : 'false'"
          @mouseenter="highlightedIndex = idx"
          @mousedown.prevent="onOptionClick(opt)"
          class="flex items-center justify-between px-3 py-2 cursor-pointer"
          :class="[
            isSelected(opt) ? 'font-semibold text-gray-900' : 'text-gray-800',
            highlightedIndex === idx ? 'bg-indigo-50' : '',
            opt.disabled ? 'text-gray-400 cursor-not-allowed' : ''
          ]"
        >
          <span>{{ opt.label }}</span>
          <span v-if="isSelected(opt)" class="ml-2">✓</span>
        </li>

        <li v-if="filteredOptions.length === 0" class="px-3 py-2 text-gray-500">
          {{ noResultsText }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch, withDefaults, defineProps, defineEmits, defineOptions } from 'vue';

defineOptions({ name: 'BaseSelectSearch' });

type Primitive = string | number | boolean;
type AnyOption = Primitive | Record<string, unknown>;

type NormalizedOption = {
  label: string;
  valueKey: string;
  disabled: boolean;
  _raw: AnyOption;
};

const props = withDefaults(defineProps<{
  modelValue: Primitive | Record<string, any> | Array<any> | null;
  options: AnyOption[];
  optionLabel?: string;
  optionValue?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  noResultsText?: string;
}>(), {
  modelValue: null,
  optionLabel: 'label',
  optionValue: 'value',
  placeholder: 'Please select',
  searchPlaceholder: 'Search...',
  multiple: false,
  disabled: false,
  clearable: true,
  noResultsText: 'No results'
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'change', value: any): void;
  (e: 'open'): void;
  (e: 'close'): void;
  (e: 'search', q: string): void;
}>();

const isOpen = ref(false);
const search = ref('');
const highlightedIndex = ref(0);

const root = ref<HTMLElement | null>(null);
const searchInput = ref<HTMLInputElement | null>(null);

const normalized = computed<NormalizedOption[]>(() => {
  return props.options.map((o) => {
    if (typeof o === 'string' || typeof o === 'number' || typeof o === 'boolean') {
      return { label: String(o), valueKey: String(o), disabled: false, _raw: o };
    }
    const label = (o as Record<string, unknown>)?.[props.optionLabel];
    const value = (o as Record<string, unknown>)?.[props.optionValue];
    return {
      label: String(label ?? ''),
      valueKey: String(value ?? ''),
      disabled: Boolean((o as Record<string, unknown>)?.['disabled']),
      _raw: o
    };
  });
});

const filteredOptions = computed<NormalizedOption[]>(() => {
  const q = search.value.trim().toLowerCase();
  const out = q
    ? normalized.value.filter((o) => o.label.toLowerCase().includes(q))
    : normalized.value.slice();
  return out;
});

watch(filteredOptions, (out) => {
  if (out.length === 0) {
    highlightedIndex.value = 0;
    return;
  }
  if (highlightedIndex.value >= out.length) highlightedIndex.value = out.length - 1;
  if (highlightedIndex.value < 0) highlightedIndex.value = 0;
});

watch(search, (q) => {
  emit('search', q.trim().toLowerCase());
});

const toValueKey = (val: any): string => {
  if (val && typeof val === 'object' && props.optionValue in val) {
    return String((val as Record<string, unknown>)[props.optionValue as string]);
  }
  return String(val);
};

const fromValueKey = (key: string): any => {
  const m = normalized.value.find((o) => o.valueKey === String(key));
  if (!m) return null;
  const first = props.options[0];
  const usingObjects = typeof first === 'object' && first !== null && !Array.isArray(first);
  return usingObjects ? (m._raw as Record<string, unknown>)[props.optionValue] : m._raw;
};

const selectedValueKeys = computed<Set<string>>(() => {
  if (props.multiple) {
    const arr = Array.isArray(props.modelValue) ? (props.modelValue as any[]) : [];
    return new Set(arr.map((v) => String(toValueKey(v))));
  } else {
    const single = props.modelValue == null || props.modelValue === '' ? [] : [String(toValueKey(props.modelValue))];
    return new Set(single);
  }
});

const isSelected = (opt: NormalizedOption): boolean => selectedValueKeys.value.has(opt.valueKey);

const selectedDisplay = computed<NormalizedOption[]>(() => {
  return normalized.value.filter((opt) => isSelected(opt));
});

const hasValue = computed<boolean>(() => selectedDisplay.value.length > 0);

const open = () => {
  if (props.disabled) return;
  isOpen.value = true;
  emit('open');
  nextTick(() => {
    searchInput.value?.focus();
  });
};

const close = () => {
  isOpen.value = false;
  emit('close');
  search.value = '';
  highlightedIndex.value = 0;
};

const toggleOpen = () => (isOpen.value ? close() : open());

const commitSingle = (opt: NormalizedOption) => {
  if (opt.disabled) return;
  const v = fromValueKey(opt.valueKey);
  emit('update:modelValue', v);
  emit('change', v);
  close();
};

const commitMultiple = (opt: NormalizedOption) => {
  if (opt.disabled) return;
  const current = Array.isArray(props.modelValue) ? (props.modelValue as any[]).slice() : [];
  const key = opt.valueKey;
  const idx = current.findIndex((v) => String(toValueKey(v)) === key);
  if (idx >= 0) current.splice(idx, 1);
  else current.push(fromValueKey(key));
  emit('update:modelValue', current);
  emit('change', current);
};

const onOptionClick = (opt: NormalizedOption) => {
  props.multiple ? commitMultiple(opt) : commitSingle(opt);
};

const removeTag = (tag: NormalizedOption) => {
  if (!props.multiple) return;
  const current = Array.isArray(props.modelValue) ? (props.modelValue as any[]).slice() : [];
  const next = current.filter((v) => String(toValueKey(v)) !== tag.valueKey);
  emit('update:modelValue', next);
  emit('change', next);
};

const clearSelection = () => {
  const cleared = props.multiple ? [] : null;
  emit('update:modelValue', cleared);
  emit('change', cleared);
};

const onKeydown = (e: KeyboardEvent) => {
  if (props.disabled) return;
  const len = filteredOptions.value.length;

  if (e.key === 'Enter') {
    if (!isOpen.value) return open();
    if (!len) return;
    const opt = filteredOptions.value[highlightedIndex.value];
    if (opt) (props.multiple ? commitMultiple : commitSingle)(opt);
  } else if (e.key === 'ArrowDown') {
    if (!isOpen.value) open();
    const base = Math.max(len, 1);
    highlightedIndex.value = (highlightedIndex.value + 1) % base;
  } else if (e.key === 'ArrowUp') {
    if (!isOpen.value) open();
    const base = Math.max(len, 1);
    highlightedIndex.value = (highlightedIndex.value - 1 + base) % base;
  } else if (e.key === 'Escape') {
    if (isOpen.value) close();
  } else if (e.key === 'Backspace' && props.multiple && !search.value && hasValue.value) {
    const last = selectedDisplay.value[selectedDisplay.value.length - 1];
    if (last) removeTag(last);
  }
};

const onDocClick = (ev: MouseEvent) => {
  const el = root.value;
  if (el && ev.target instanceof Node && !el.contains(ev.target)) close();
};

onMounted(() => {
  document.addEventListener('mousedown', onDocClick);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', onDocClick);
});
</script>
