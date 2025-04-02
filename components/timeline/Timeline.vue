<template>
  <ol class="relative border-s border-primary-200 dark:border-neutral-500">
    <li v-for="item in items" class="mb-10 ms-4">
      <div class="absolute w-3 h-3 dark:bg-neutral-700 bg-primary-300 rounded-full mt-1.5 -start-1.5 border dark:border-neutral-800 border-neutral-100 "></div>
      <time class="mb-1 text-sm font-normal leading-none text-n-400 dark:text-neutral-500">{{ item.date }}</time>
      <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-50">{{ item.post }}</h3>
      <h4 class="text-md font-semibold italic text-neutral-800 dark:text-neutral-200">{{ item.entreprise }}</h4>
      <ol class="mt-2 ml-4">
        <li v-for="task in item.tasks" class="mb-2 text-base font-normal text-neutral-700 dark:text-neutral-400">{{ task }}
        </li>
      </ol>
      <a v-if="item.link" :href="item.link" class="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-900 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-neutral-100 focus:text-blue-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700 dark:focus:ring-neutral-700">
        En savoir +
      </a>
    </li>
  </ol>
</template>

<script setup lang="ts">
const props = defineProps(['items']);
</script>