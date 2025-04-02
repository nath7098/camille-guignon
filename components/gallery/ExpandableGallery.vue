<template>
  <div :class="['flex h-96 w-full gap-2 md:flex-row flex-col']">
    <div
        v-for="image in images"
        :key="image.title"
        class="relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-1 md:hover:flex-[3] text-center"
    >
      <img
          class="relative h-full object-cover w-full rounded-xl"
          :src="image.image"
          :alt="image.title"
      />
      <span class="absolute left-0 right-0 bottom-[25px] md:bottom-[50px] text-4xl text-neutral-500 md:text-neutral-50 font-semibold drop-shadow-md uppercase">{{image.title}}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { HTMLAttributes } from "vue";

interface Props {
  images: any[];
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
</script>