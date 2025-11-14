<script setup>
import { ref } from "vue";
import BtnArrow from "@/assets/icons/BtnArrow.vue";

defineProps({
  label: String,
  arrow: Boolean,
  color: String,
  hoverColor: { type: String, default: "white" },
  extraClass: String,
});

const isHovered = ref(false);
</script>

<template>
  <button
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    :class="[
      `relative overflow-hidden group px-6 flex gap-1 items-center h-12 rounded-[10px] w-max
       text-black font-satoshi leading-6 text-base font-medium 
       border border-white transition-all duration-500 ease-out
      `,
      extraClass,
    ]"
  >
    <span
      class="absolute inset-0 bg-white transition-all duration-500 ease-out group-hover:opacity-0 group-hover:blur-xl"
    ></span>

    <span
      class="relative z-10 transition-all duration-500 group-hover:text-white"
    >
      {{ label }}
    </span>

    <BtnArrow
      v-if="arrow"
      :color="color"
      :hoverColor="hoverColor"
      :isHovered="isHovered"
      class="relative z-10 transition-all duration-500 group-hover:translate-x-[6px]"
    />
  </button>
</template>
