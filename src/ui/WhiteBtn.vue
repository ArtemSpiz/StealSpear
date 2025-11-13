<script setup>
import BtnArrow from "@/assets/icons/BtnArrow.vue";

defineProps({
  label: {
    type: String,
  },
  arrow: {
    type: Boolean,
  },
  color: {
    type: String,
  },
  extraClass: {
    type: String,
  },
});
</script>

<template>
  <button
    :class="[
      'px-6 flex gap-1 items-center h-12 rounded-[10px] w-max bg-white text-black font-satoshi leading-6 text-base font-medium',
      extraClass,
    ]"
  >
    {{ label }}

    <BtnArrow :color="color" v-if="arrow" />
  </button>
</template>

<style scoped></style>
