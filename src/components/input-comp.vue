<template>
    <input :value="modelValue" :placeholder="title" :type="type"  :class="customClass"
      @input="$emit('update:modelValue', $event.target.value)" v-bind="$attrs">
</template>

<script>
export default {                                        
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
        type: [String, Number],
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
        
     }
  

</script>