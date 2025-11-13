<script setup>
defineProps({
  label: {
    type: String,
  },
});
</script>

<template>
  <button
    class="px-6 h-12 rounded-[10px] w-max bg-white text-black font-satoshi leading-6 text-base font-medium"
  >
    {{ label }}
  </button>
</template>

<style scoped></style>
