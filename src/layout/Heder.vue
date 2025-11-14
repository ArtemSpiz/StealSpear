<script setup>
import Logo from "@/assets/img/logo.png";
import Line from "@/assets/img/lineHeader.png";
import WhiteBtn from "@/ui/WhiteBtn.vue";
import Burger from "../assets/img/Burger.png";
import ArrowOpen from "@/assets/icons/ArrowOpen.vue";
import Cross from "../assets/img/Cross.png";
import { ref, watch } from "vue";

const headerLinks = [
  { title: "Home" },
  { title: "About Us" },
  {
    title: "Services",
    arrow: true,
    label: [{ title: "Services1" }, { title: "Services2" }],
  },
  { title: "Case Studies" },
  { title: "FAQs" },
];

const isOpen = ref(false);
const burgerOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
};

const toggleBurger = () => {
  burgerOpen.value = !burgerOpen.value;
};

watch(burgerOpen, (val) => {
  if (val) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <div
    :class="[
      'absolute gap-5 top-[50px] right-1/2 translate-x-1/2 flex justify-between items-center w-full base-x-padding ',
      {
        'h-screen !items-start z-50 justify-start backdrop-blur-[10px] bg-[rgba(13,13,13,0.30)]':
          burgerOpen === true,
      },
    ]"
  >
    <div class="flex items-center">
      <div
        class="w-[205px] z-50 h-8 mr-14 max-xl:mr-6 max-lg:w-[180px] max-md:w-[140px]"
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
          @click="link.arrow && toggleOpen()"
          class="text-white flex items-center gap-1 cursor-pointer font-helvetica text-base font-light leading-6 capitalize relative after:content-[''] after:absolute after:left-0 after:-bottom-[-5px] after:h-[1px] after:bg-white after:w-0 after:transition-all after:duration-500 hover:after:w-full"
        >
          {{ link.title }}

          <div v-if="link.arrow">
            <ArrowOpen />
          </div>

          <div
            v-if="isOpen && link.arrow"
            class="absolute top-full left-0 bg-[rgba(255,255,255,0.10)] backdrop-blur-sm rounded-[10px] flex flex-col"
          >
            <div
              v-for="(item, i) in link.label"
              :key="i"
              class="px-4 py-2 text-white flex items-center gap-1 cursor-pointer font-helvetica text-base font-light leading-6 capitalize"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <WhiteBtn label="Contact Us" extraClass="max-lg:hidden" />

    <div
      :class="[
        'w-11 h-11  z-50 max-lg:flex hidden rounded-lg justify-center items-center cursor-pointer',
        { 'bg-[rgba(255,255,255,0.03)]': burgerOpen },
      ]"
      @click="toggleBurger"
    >
      <img
        :class="['w-6 h-6', { 'w-4 h-4 ': burgerOpen }]"
        :src="burgerOpen ? Cross : Burger"
        alt=""
      />
    </div>

    <div
      v-if="burgerOpen"
      class="absolute top-[80px] overflow-y-hidden base-x-padding w-full right-1/2 translate-x-1/2 z-40 gap-5 flex flex-col items-start justify-start"
    >
      <div
        v-for="(link, index) in headerLinks"
        :key="index"
        class="text-white flex-col w-full gap-5 flex items-start cursor-pointer font-helvetica text-base font-light leading-6 capitalize relative"
      >
        {{ link.title }}

        <div
          class="h-px w-full bg-[rgba(255,255,255,0.10)]"
          v-if="index < headerLinks.length - 1"
        ></div>
      </div>
    </div>
  </div>
</template>
