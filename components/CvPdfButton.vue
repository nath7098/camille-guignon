<template>
  <button
      @click="generatePDF"
      class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-md flex items-center"
  >
    <span class="mr-2">📄</span> Télécharger mon CV
  </button>
</template>

<script setup>
const generatePDF = async () => {
  window.open('/CV_Camille_2025.pdf')
}
</script>