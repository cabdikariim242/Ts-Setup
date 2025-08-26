<template>
  <div class="flex flex-col w-full">
    <label
      v-if="label"
      class="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300 "
    >
      {{ label }}
    </label>
    <textarea
      :disabled="isDisabled"
      :class="CustomClass"
      :name="name"
      :placeholder="placeholder"
      v-model="localValue"
      class="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-500 dark:text-white dark:border-gray-600"
    ></textarea>
    <p v-if="helper" class="mt-1 text-xs text-gray-500 dark:text-gray-400">
      {{ helper }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Textarea",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    helper: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    CustomClass: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const localValue = computed<string>({
      get: () => props.modelValue,
      set: (val: string) => emit("update:modelValue", val),
    });

    return {
      localValue,
    };
  },
});
</script>
