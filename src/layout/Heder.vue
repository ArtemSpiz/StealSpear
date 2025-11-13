<script setup>
import Logo from "@/assets/img/logo.png";
import Line from "@/assets/img/lineHeader.png";
import WhiteBtn from "@/ui/WhiteBtn.vue";

const headerLinks = [
  { title: "Home" },
  { title: "About Us" },
  { title: "Our Services" },
  { title: "Industries" },
  { title: "Work With Us" },
];
</script>

<template>
  <div
    class="absolute top-[50px] right-1/2 translate-x-1/2 flex justify-between items-center w-full base-x-padding"
  >
    <div class="flex items-center">
      <div class="w-[205px] h-8 mr-14">
        <img :src="Logo" alt="Logo" />
      </div>

      <div class="w-px h-8 mr-9">
        <img :src="Line" alt="Line" />
      </div>

      <div class="flex items-center gap-8">
        <div
          v-for="(link, index) in headerLinks"
          :key="index"
          class="text-white cursor-pointer font-helvetica text-base font-light leading-6 capitalize"
        >
          {{ link.title }}
        </div>
      </div>
    </div>

    <WhiteBtn label="Contact Us" />
  </div>
</template>

<style scoped></style>
