<template>
  <div
    class="mt-20">
  <BaseCard>
    <h1 class="font-bold text-xl mb-4">Basic Progress Bar</h1>
    <div class="inline-block w-full">
    <p class="text-[#475569] text-[14px] dark:text-white">The Basic Progress Bar component allows you to visually represent the progress of a task or process, providing users with real-time feedback on completion status. This section provides an introduction to the Basic Progress Bar and how to use it effectively.</p>

    <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>

    <div class="border-2 px-2 border-dotted py-2">

    <ProgressBarComp customClass="w-full max-w-[300px] mb-2 h-2 bg-[#247ba0] rounded-lg" />
    <ProgressBarComp customClass="w-full max-w-[400px] mb-2 h-2 bg-[#247ba0] rounded-lg" />
    <ProgressBarComp customClass="w-full max-w-[500px] mb-2 h-2 bg-[#247ba0] rounded-lg" />

  
    </div>
      
    </div>
    <p class="mt-4 text-[#475569] text-[14px] dark:text-white">The Basic Progress Bar is a fundamental component for enhancing user experience by providing clear feedback on task progress. By following the steps outlined above, you can easily integrate it into your project and tailor it to meet your specific requirements.</p>


  
   
  </BaseCard>
  </div>
</template>

<script >
import ProgressBarComp from '@/components/progressBarComp.vue';
import BaseCard from '@/components/BaseCard.vue';

export default {
  components: {
    ProgressBarComp,
    BaseCard
  }
};
</script>

<style>

</style>