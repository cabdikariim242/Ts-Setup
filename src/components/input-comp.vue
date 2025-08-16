<template>
  <input
    :value="modelValue"
    :placeholder="title"
    :type="type"
    :class="customClass"
    :required="required"
    @input="onInput"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { InputTypeHTMLAttribute } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  // props
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: ''
    },
    customClass: {
      type: String as PropType<string>,
      default: ''
    },
    type: {
      type: String as PropType<InputTypeHTMLAttribute>,
      default: 'text'
    },
    title: {
      type: String as PropType<string>,
      default: ''
    },
    required: {
      type: Boolean as PropType<boolean>,
      default: false
    },


  },


  emits: {
    'update:modelValue': (v: string) => true
  },

  // methods
  methods: {
    onInput(e: Event) {
      const t = e.target as HTMLInputElement | null
      this.$emit('update:modelValue', t?.value ?? '')
    }
  }
})
</script>
