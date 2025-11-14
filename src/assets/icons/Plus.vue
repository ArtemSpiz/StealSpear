<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    class="plus-minus-icon"
  >
    <path
      d="M6.66675 17.3334V14.6667H25.3334V17.3334H6.66675Z"
      fill="white"
      class="horizontal-line"
      :class="{ open: isOpen }"
    />
    <path
      d="M14.6667 25.3334V6.66675H17.3334V25.3334H14.6667Z"
      fill="white"
      class="vertical-line"
      :class="{ open: isOpen }"
    />
  </svg>
</template>

<style scoped>
.plus-minus-icon {
  cursor: pointer;
}

.horizontal-line,
.vertical-line {
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.horizontal-line.open {
  transform: rotate(0deg) scaleX(1.2);
}

.vertical-line.open {
  transform: rotate(90deg) scaleY(0);
  opacity: 0;
}
</style>
