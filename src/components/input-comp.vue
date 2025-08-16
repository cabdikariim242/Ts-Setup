<template>
    <input :value="modelValue" :placeholder="title" :type="type"  :class="customClass"
      @input="update" v-bind="$attrs">
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props:{
    modelValue:{
        type: String,
        default: ''
    },
    customClass:{
     type: String,
     default: ''   
     },
     type:{
        type: [String || Number],
            default:''
        },
        title:{
            type:String,
            default: ''
        },
        required:{
            type:Boolean,
            default:false
        }
        },
        methods: {
          update(event: Event) {
            this.$emit('update:modelValue', (event.target as HTMLInputElement).value);
          }
        }
    })

</script>