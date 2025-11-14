<script setup>
import WhiteBtn from "@/ui/WhiteBtn.vue";
import BtnArrow from "@/assets/icons/BtnArrow.vue";
import heroIcon1 from "@/assets/img/heroIcon1.png";
import heroIcon2 from "@/assets/img/heroIcon2.png";
import heroIcon3 from "@/assets/img/heroIcon3.png";
import line from "@/assets/img/lineHeader.png";
import Heder from "@/layout/Heder.vue";
import Logo1 from "@/assets/img/LogoPartner1.png";
import Logo2 from "@/assets/img/LogoPartner2.png";
import Logo3 from "@/assets/img/LogoPartner3.png";
import Logo4 from "@/assets/img/LogoPartner4.png";
import Logo5 from "@/assets/img/LogoPartner5.png";
import bgHero from "../assets/img/bgHero.png";

const HeroItems = [
  {
    icon: heroIcon1,
    text: "100+ Web3 projects served",
  },
  {
    icon: heroIcon2,
    text: "$50M+ ad spend managed",
  },
  {
    icon: heroIcon3,
    text: "P30% average MoM growth",
  },
];

const logoOfPartners = [
  {
    img: Logo1,
  },
  {
    img: Logo2,
  },
  {
    img: Logo3,
  },
  {
    img: Logo4,
  },
  {
    img: Logo5,
  },
];
</script>

<template>
  <div
    class="relative bg-no-repeat bg-cover bg-center h-full min-h-[800px]"
    :style="{ backgroundImage: `url(${bgHero})` }"
  >
    <Heder />

    <div
      class="flex flex-col justify-between h-full pt-[160px] pb-[150px] max-md:pt-[120px] max-xl:pb-[120px] max-lg:pb-[80px] max-md:pb-[60px]"
    >
      <div
        class="flex flex-col h-full pb-[200px] items-center justify-center gap-14 base-x-padding max-lg:gap-10 max-md:gap-8 max-md:pb-[120px]"
      >
        <div class="flex flex-col items-center text-center justify-center">
          <div class="underTitle pb-10">Steel Spear Media</div>
          <div
            class="title pb-5 max-w-[900px] max-xl:max-w-[800px] max-lg:max-w-[650px]"
          >
            Growth & Visibility for Web3
            <span class="secTitle">& Crypto</span> Brands.
          </div>
          <div class="description max-w-[900px] max-xl:max-w-[800px]">
            We help crypto, blockchain and fintech brands gain visibility,
            credibility and measurable growth through strategic PR, influencers,
            paid media, content and community building.
          </div>

          <div
            class="mt-8 flex justify-center items-center gap-10 max-md:gap-4 max-md:flex-col"
          >
            <WhiteBtn label="Book a Free Consultation" />
            <button
              class="group flex gap-[6px] items-center bg-transparent text-white font-helvetica text-[18px] font-medium leading-6"
            >
              View Case Studies
              <BtnArrow
                class="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[6px]"
              />
            </button>
          </div>
        </div>
        <div class="flex items-center flex-wrap justify-center gap-5">
          <div
            v-for="(item, index) in HeroItems"
            :key="index"
            class="flex items-center"
          >
            <div class="flex items-center gap-[10px]">
              <img class="w-[35px] h-[35px]" :src="item.icon" alt="" />
              <span class="text-white text-[18px] font-helvetica">{{
                item.text
              }}</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="px-[70px] py-7 bg-[linear-gradient(0deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.00)_108.01%)] backdrop-blur-[5px] w-full overflow-hidden max-md:bg-transparent max-md:backdrop-blur-0 max-md:px-[10px] max-md:py-0"
      >
        <div class="logo-scroll-container">
          <div class="logo-scroll">
            <div
              v-for="(logo, index) in logoOfPartners"
              :key="index"
              class="flex h-[80px] items-center mx-8 max-xl:h-[60px] max-md:h-[45px] max-md:mx-4"
            >
              <img :src="logo.img" alt="" class="h-auto max-h-full" />
            </div>
          </div>
          <div class="logo-scroll">
            <div
              v-for="(logo, index) in logoOfPartners"
              :key="`duplicate-${index}`"
              class="flex h-[80px] items-center mx-8 max-xl:h-[60px] max-md:h-[45px] max-md:mx-4"
            >
              <img :src="logo.img" alt="" class="h-auto max-h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-scroll-container {
  display: flex;
  width: 100%;
}

.logo-scroll {
  display: flex;
  animation: scroll-left 20s linear infinite;
  flex-shrink: 0;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
