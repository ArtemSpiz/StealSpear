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
    text: "Media Coverage Secured",
  },
  {
    icon: heroIcon2,
    text: "Campaign Results In",
  },
  {
    icon: heroIcon3,
    text: "Partnership Activated",
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

    <div class="flex flex-col justify-between h-full pt-[160px] pb-[150px]">
      <div
        class="flex flex-col h-full pb-[200px] items-center justify-center gap-14 base-x-padding"
      >
        <div class="flex flex-col items-center text-center justify-center">
          <div class="underTitle pb-10">Steel Spear Media</div>
          <div class="title pb-5 max-w-[900px]">
            Transform Your Business With Our
            <span class="secTitle">SaaS Solution.</span>
          </div>
          <div class="description max-w-[900px]">
            Steel Spear Media is a leading PR and marketing company with a
            dynamic team specializing in major fields such as crypto, fintech,
            software, AI, eCommerce, and more
          </div>

          <div class="mt-8 flex justify-center items-center gap-10">
            <WhiteBtn label="Get Started" />
            <button
              class="flex gap-2 items-center bg-transparent text-white font-helvetica text-[18px] font-medium leading-6"
            >
              Request a Demo <BtnArrow />
            </button>
          </div>
        </div>
        <div class="flex items-center">
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
            <img
              class="mx-7 w-px h-[35px]"
              v-if="index < HeroItems.length - 1"
              :src="line"
              alt="line"
            />
          </div>
        </div>
      </div>

      <div
        class="py-8 base-x-padding justify-between bg-[linear-gradient(0deg,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.00)_108.01%)] backdrop-blur-[5px] w-full flex items-center"
      >
        <div
          class="text-white min-w-[150px] max-w-[180px] font-helvetica text-[15px]"
        >
          Trusted by Companies around the world
        </div>

        <div class="flex items-center gap-8">
          <div v-for="(logo, index) in logoOfPartners" :key="index" class="">
            <div class="w-[120px] h-auto">
              <img :src="logo.img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
