<template>
   <component
    :is="href ? 'a' : 'button'"
    :href="href"
     :target="target"
     :rel="href ? 'noopener noreferrer' : null"
    :disabled="disabled"
    :class="customClass"
    @click="$emit('clickme')"
  >
    <slot></slot>
  </component>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    } ,
    disabled:{
      type: Boolean,
      default: false,
    },
    isClicked:{
      type: Boolean,
      default: false,
    },
      customClass: {
      type: String,
      default: ''
      },

       href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self' // ama '_blank' si default ah
    },
    
  }

})
</script>