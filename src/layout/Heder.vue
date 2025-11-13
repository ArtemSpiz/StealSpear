<script setup>
import Logo from "@/assets/img/logo.png";
import Line from "@/assets/img/lineHeader.png";
import WhiteBtn from "@/ui/WhiteBtn.vue";
import Burger from "../assets/img/Burger.png";

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
    class="absolute gap-5 top-[50px] right-1/2 translate-x-1/2 flex justify-between items-center w-full base-x-padding"
  >
    <div class="flex items-center">
      <div
        class="w-[205px] h-8 mr-14 max-xl:mr-6 max-lg:w-[180px] max-md:w-[140px]"
      >
        <img :src="Logo" alt="Logo" />
      </div>

      <div class="w-px h-8 mr-9 max-xl:mr-6 max-lg:hidden">
        <img :src="Line" alt="Line" />
      </div>

      <div class="flex items-center gap-8 max-xl:gap-4 max-lg:hidden">
        <div
          v-for="(link, index) in headerLinks"
          :key="index"
          class="text-white cursor-pointer font-helvetica text-base font-light leading-6 capitalize relative after:content-[''] after:absolute after:left-0 after:-bottom-[-5px] after:h-[1px] after:bg-white after:w-0 after:transition-all after:duration-500 hover:after:w-full"
        >
          {{ link.title }}
        </div>
      </div>
    </div>

    <WhiteBtn label="Contact Us" extraClass="max-lg:hidden" />

    <div class="w-11 h-11 hidden max-lg:flex justify-center items-center">
      <img class="w-6 h-6" :src="Burger" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
