<template>

    <div class="w-full mt-[80px]">


    <div class="min-h-screen flex items-center justify-center lg:ml-[300px] md:ml-[320px] ml-5">

      <form action="" class="form p-6 space-y-6 w-full m-w-[1000px] bg-gray-900 rounded-lg">


      <AppLabel
      label="Name"
      :labelClass="'text-white block'"
      :required="true"
    />
    <BaseInput
      title="Name"
      type="text"
      :customClass="'p-2 w-full focus:outline-none focus:ring border bg-[#d3e5ec] text-black rounded-md'"
    />

    <AppLabel
      label="Email"
      :labelClass="'text-white  mb-2 block'"
      :required="true"
    />
    <BaseInput
      title="Email"
      type="email"
      :customClass="'p-2 w-full focus:outline-none focus:ring border bg-[#d3e5ec] text-black rounded-md'"
    />

    <AppLabel
      label="Password"
      :labelClass="'text-white mb-2 block'"
      :required="true"
    />
    <BaseInput
      title="Password"
      type="password"
      :customClass="'p-2 w-full focus:outline-none focus:ring border bg-[#d3e5ec] text-black rounded-md'"
    />

    <AppLabel
      label="Phone"
      :labelClass="'text-white mb-2 block'"
      :required="true"
    />
    <BaseInput
      title="Phone" type="number"
      :customClass="'p-2 w-full focus:outline-none focus:ring border bg-[#d3e5ec] text-black rounded-md'"
    />

      <AppButton :customClass="' w-full bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold'">
    Submit
  </AppButton>
      </form>

    </div>
  

 </div>
></template>


<script lang="ts">
import { defineComponent } from "vue";
import AppLabel from '@/components/labelComp.vue'
import BaseInput from '@/components/input-comp.vue'
import AppButton  from '@/components/AppButton.vue'
import BaseCard  from '@/components/BaseCard.vue'


export default defineComponent({
  name: 'forms',
  components: { AppLabel, BaseInput, AppButton, BaseCard },


    data(){
        return{
        customClass:'',
        Name:'',
        SecondName:'',
        password:'',
        email:'',
        title: '',
        modelValue: '',
        type: null,
        labelClass:'',
        id:'',
        required:true,
        label:''


    }
  }
});

</script>