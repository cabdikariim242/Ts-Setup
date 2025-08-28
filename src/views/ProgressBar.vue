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
 


  <BaseCard>
   <h1 class="font-bold text-xl mb-4">Progress Bar with Label</h1>
  <div class="inline-block w-full">
    <p class="text-[#475569] text-[14px] dark:text-white">The Progress Bar with Label component combines a visual progress bar with a text label to provide users with a clear indication of progress. This section introduces the Progress Bar with Label and how to integrate it into your project effectively.</p>
    <p class="mt-5 text-[#475569] mb-4 dark:text-whit">Example code / preview</p>
    <div class="border-2 px-2 border-dotted py-2">

    <ProgressBarComp customClass="w-full max-w-[350px] mb-2 h-5 bg-[#247ba0] rounded-lg text-center text-black" paragraph="50%" />
    <ProgressBarComp customClass="w-full max-w-[450px] mb-2 h-5 bg-[#247ba0] rounded-lg text-center"paragraph="60%" />
    <ProgressBarComp customClass="w-full max-w-[550px] mb-2 h-5 bg-[#247ba0] rounded-lg text-center"paragraph="70%" />





    </div>
    <p class="mt-4 text-[#475569] text-[14px] dark:text-white">The Progress Bar with Label component is a valuable addition to your user interface, offering both visual and textual progress updates. By following the steps outlined above, you can seamlessly integrate it into your project and tailor it to suit your specific requirements.</p>

  </div>
  </BaseCard>


  <BaseCard>
  <h1 class="font-bold text-xl mb-4">Progress Bar Height</h1>
  <div class="inline-block w-full">
    <p class="text-[#475569] text-[14px] dark:text-white">The "Progress Bar Height" section explains how to control the height of progress bars to suit your project's design and layout. Customizing the height allows you to integrate progress bars seamlessly into your application's visual hierarchy.</p>
     <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>
     <div class="border-2 px-2 border-dotted py-2">

    <ProgressBarComp customClass="w-full max-w-[300px] mb-2 h-1 bg-[#247ba0] rounded-lg" />
    <ProgressBarComp customClass="w-full max-w-[400px] mb-2 h-2 bg-[#247ba0] rounded-lg" />
    <ProgressBarComp customClass="w-full max-w-[500px] mb-2 h-3 bg-[#247ba0] rounded-lg" />


     </div>
     <p class="mt-4 text-[#475569] text-[14px] dark:text-white">The "Progress Bar Height" section has demonstrated how to control the height of progress bars in your project. By following these guidelines and maintaining consistency, you can create visually appealing and accessible progress bars that align with your application's design.</p>

  </div>

  </BaseCard>


  <BaseCard>
  <h1 class="font-bold text-xl mb-4">Progress Bar Color</h1>
  <div class="inline-block w-full">
  <p class="text-[#475569] text-[14px] dark:text-white">The "Progress Bar Color" section explains how to customize the colors of progress bars to enhance your application's visual appeal and convey information effectively. You can choose from a variety of colors to match your brand's identity or signify different stages of a process.</p>
  <p class="mt-5 text-[#475569] mb-4 dark:text-white">Example code / preview</p>
  <div class="border-2 px-2 border-dotted py-2">
    <ProgressBarComp customClass="w-full max-w-[300px] mb-2 h-2 bg-[#247ba0] rounded-lg" />
    <ProgressBarComp customClass="w-full max-w-[400px] mb-2 h-2 bg-[#ca8a04] rounded-lg" />
    <ProgressBarComp customClass="w-full max-w-[500px] mb-2 h-2 bg-[#b91c1c] rounded-lg" />



  </div>
  <p class="mt-4 text-[#475569] text-[14px] dark:text-white">The "Progress Bar Color" section has shown you how to customize the colors of progress bars to align with your application's design and convey meaning effectively. By choosing the right colors and considering accessibility, you can enhance the user experience and make progress bars an integral part of your application's UI.</p>


  </div>
  
  
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