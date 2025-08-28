<template>
  <div class="flex flex-col">
    <!-- first basecard -->
    <BaseCard>
      <h1 class="font-bold text-xl mb-4">Single Item</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          The "Tiny Slider" component is a lightweight and responsive
          slider/carousel library for displaying images or content in a
          slideshow format. This section focuses on using Tiny Slider to create
          a simple single-item slider, which is useful for showcasing one piece
          of content at a time, such as a featured image or a product.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">
          Example code / preview
        </p>

        <div class="px-2 py-2">
          <div class="w-full max-w-xlg">
            <ImageSlider
              :images="sliderImages"
              :autoPlay="false"
              :interval="4000"
              :show="false"
            />
          </div>
        </div>

        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          The single-item slider created using Tiny Slider is an excellent
          choice when you need to display content one item at a time in a
          visually appealing and responsive manner. You can easily integrate
          this slider into your web application to showcase featured images,
          products, or any other content that benefits from a carousel-style
          presentation.
        </p>
      </div>
    </BaseCard>

    <!-- second base card -->
    <BaseCard>
      <h1 class="font-bold text-xl mb-4">Single Item</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          The "Tiny Slider" component is a lightweight and responsive
          slider/carousel library for displaying images or content in a
          slideshow format. This section focuses on using Tiny Slider to create
          a simple single-item slider, which is useful for showcasing one piece
          of content at a time, such as a featured image or a product.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">
          Example code / preview
        </p>

        <div class="px-2 py-2">
          <div class="w-full max-w-xlg p-6 my-20">
            <ImageSlider
              :images="sliderImages"
              :autoPlay="true"
              :interval="1000"
              :show="false"
            />
          </div>
        </div>

        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          The single-item slider created using Tiny Slider is an excellent
          choice when you need to display content one item at a time in a
          visually appealing and responsive manner. You can easily integrate
          this slider into your web application to showcase featured images,
          products, or any other content that benefits from a carousel-style
          presentation.
        </p>
      </div>
    </BaseCard>
    <!-- third base card -->
    <BaseCard>
      <h1 class="font-bold text-xl mb-4">Single Item</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          The "Tiny Slider" component is a lightweight and responsive
          slider/carousel library for displaying images or content in a
          slideshow format. This section focuses on using Tiny Slider to create
          a simple single-item slider, which is useful for showcasing one piece
          of content at a time, such as a featured image or a product.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">
          Example code / preview
        </p>

        <div class="px-2 py-2">
          <div class="w-full max-w-xlg p-6 my-20">
            <ImageSlider
              :images="sliderImages"
              :autoPlay="false"
              :interval="1000"
              :show="true"
            />
          </div>
        </div>

        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          The single-item slider created using Tiny Slider is an excellent
          choice when you need to display content one item at a time in a
          visually appealing and responsive manner. You can easily integrate
          this slider into your web application to showcase featured images,
          products, or any other content that benefits from a carousel-style
          presentation.
        </p>
      </div>
    </BaseCard>
    <!-- forth base card -->
    <BaseCard>
      <h1 class="font-bold text-xl mb-4">Single Item</h1>
      <hr />
      <div class="inline-block w-full">
        <p class="text-[#475569] text-[14px] dark:text-white">
          The "Tiny Slider" component is a lightweight and responsive
          slider/carousel library for displaying images or content in a
          slideshow format. This section focuses on using Tiny Slider to create
          a simple single-item slider, which is useful for showcasing one piece
          of content at a time, such as a featured image or a product.
        </p>

        <p class="mt-5 text-[#475569] mb-4 dark:text-white">
          Example code / preview
        </p>

        <div class="px-2 py-2">
          <div class="w-full max-w-xlg p-6 my-20">
            <ImageSlider
              :images="sliderImages"
              :autoPlay="true"
              :interval="5000"
              :show="true"
            />
          </div>
        </div>

        <p class="mt-4 text-[#475569] text-[14px] dark:text-white">
          The single-item slider created using Tiny Slider is an excellent
          choice when you need to display content one item at a time in a
          visually appealing and responsive manner. You can easily integrate
          this slider into your web application to showcase featured images,
          products, or any other content that benefits from a carousel-style
          presentation.
        </p>
      </div>
      <!-- Added missing closing div tag for .inline-block.w-full -->
    </BaseCard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageSlider from "@/components/sliderComp.vue";

export default defineComponent({
  name: "HomeView",
  components: { ImageSlider },
  data() {
    return {
      sliderImages: [
        require("@/assets/yiksi.png"),
        "https://picsum.photos/id/1035/800/400",
        "https://picsum.photos/id/1036/800/400",
        "https://picsum.photos/id/1037/800/400",
        "https://picsum.photos/id/1038/800/400",
      ],
    };
  },
});
</script>
