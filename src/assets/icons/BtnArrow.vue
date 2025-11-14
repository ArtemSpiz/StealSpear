<script setup>
defineProps({
  color: { type: String, default: "white" },
  hoverColor: { type: String, default: "white" },
  isHovered: { type: Boolean, default: false },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M19 12L5 12M19 12L13 18M19 12L13 6"
      :stroke="isHovered ? hoverColor : color"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
