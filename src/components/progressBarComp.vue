<template>
  <div class="progress-bar bg-gray-300 rounded-md">
   <div :class="customClass">
<p class="text-[14px] text-white text-center">{{ paragraph }}</p>
   </div>
   </div>
</template>

<script>
export default {
  props: {
    customClass: {
      type: String,
      default: ''
    },
    paragraph: {
      type: String,
      default: ''
    },
  }
};
</script>