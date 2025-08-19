<template>
  <div
    class="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-lg"
  >
    <!-- Images -->
    <div
      class="flex transition-transform duration-700"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full flex-shrink-0"
      >
        <img
          :src="typeof image === 'string' ? image : image.src"
          :alt="typeof image === 'string' ? '' : image.alt"
          class="w-full h-64 object-cover"
        />
      </div>
    </div>

    <!-- Prev Button -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-3 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
    >
      ‹
    </button>

    <!-- Next Button -->
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-3 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
    >
      ›
    </button>

    <!-- Dots -->
    <div v-if="show" class="absolute bottom-3 w-full flex justify-center gap-2">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="w-3 h-3 rounded-full cursor-pointer"
        :class="currentIndex === index ? 'bg-white' : 'bg-gray-400'"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

type ImageType = string | { src: string; alt?: string };

export default defineComponent({
  name: "ImageSlider",
  props: {
    images: {
      type: Array as () => ImageType[],
      required: true,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      currentIndex: 0 as number,
      timer: null as number | null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index: number) {
      this.currentIndex = index;
    },
  },
  mounted() {
    if (this.autoPlay) {
      this.timer = window.setInterval(this.nextSlide, this.interval);
    }
  },
  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
  },
});
</script>
