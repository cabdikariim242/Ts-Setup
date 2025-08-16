<template>
    <label :class="labelClass" :for="id" class="dark:text-white">
        {{ label }}
        <span v-if="required">**</span>
    <slot></slot>
</label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props:{
        label:{
            type:String,
            default:''
        },
        labelClass:{
            type:String,
            default: ''
        },
        id:{
            type:String,
            default:''
        },
        required:{
            type:Boolean,
            default:true
        }
    },
})
</script>