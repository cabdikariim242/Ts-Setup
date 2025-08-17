<template>
  <div
    class="flex flex-col mt-[202px] md:ml-[150px] ml-[10px] lg:ml-[150px] z-[8] lg:mr-[150px] md:mr-[150px] mr-[10px] 2xl:ml-[360px] 2xl:mr-[270px]"
  >
    <div
      class="p-10 bg-white dark:bg-[#0f0f0f]  dark:text-white w-full rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h1 class="font-bold text-xl mb-4 text-[#334155] dark:text-white">Basic Datepicker</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          The "Basic Datepicker" component allows users to select dates from a
          calendar. It is a fundamental input element in many web applications,
          especially in forms that require users to input or select dates.
          Example code / preview 11 Aug, 2025
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">
          Example code / preview
        </p> 
        <div
          class="flex w-full justify-center items-center border-2 px-2 border-dotted py-2"
        >
          <DatePickerComp />
        </div>
        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          The "Basic Datepicker" component using Litepicker provides a
          user-friendly way to select dates for your web application. It's
          highly configurable and easy to integrate into your projects.
        </p>
      </div>
    </div>

    
    <!-- second date picker -->
    <div
      class="p-10 mt-10 bg-white dark:bg-[#0f0f0f]  dark:text-white w-full rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h1 class="font-bold text-xl mb-4 text-[#334155] dark:text-white">Basic Datepicker</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          The "Basic Datepicker" component allows users to select dates from a
          calendar. It is a fundamental input element in many web applications,
          especially in forms that require users to input or select dates.
          Example code / preview 11 Aug, 2025
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">
          Example code / preview
        </p> 
        <div
          class="flex w-full justify-center items-center border-2 px-2 border-dotted py-2"
        >
          <DatePickerComp />
        </div>
        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          The "Basic Datepicker" component using Litepicker provides a
          user-friendly way to select dates for your web application. It's
          highly configurable and easy to integrate into your projects.
        </p>
      </div>
    </div>


  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DatePickerComp from "@/components/DatePickerComp.vue";
import BaseCard from "@/components/BaseCard.vue";

export default defineComponent({
  components: { DatePickerComp, BaseCard },
  data() {
    return {};
  },
});
</script>
