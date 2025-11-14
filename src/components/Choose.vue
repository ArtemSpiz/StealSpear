<script setup>
import CardBlurCircle from "@/assets/icons/CardBlurCircle.vue";
import ChooseCardImg1 from "../assets/img/chooseCard1.png";
import ChooseCardImg2 from "../assets/img/chooseCard2.png";
import ChooseCardImg3 from "../assets/img/chooseCard3.png";

const ChooseCards = [
  {
    image: ChooseCardImg1,
    label: "Shape Your Story",
    text: "Steel Spear Media is a leading PR and marketing company with a dynamic team specializing in major fields such as crypto, fintech, software, AI, eCommerce, and more",
  },
  {
    image: ChooseCardImg2,
    label: "Boost Online Presence",
    text: "With global partnerships and a proven record of boosting web traffic, we strengthen your online visibility through our vast network and digital expertise",
  },
  {
    image: ChooseCardImg3,
    label: "Global Reputation",
    text: "We strengthen reputations with integrity and authenticity—key traits of industry leaders. Partnering with us and leveraging our network helps you gain the credibility to succeed in B2B and B2C markets",
  },
];

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const chooseRef = ref(null);

onMounted(() => {
  gsap.fromTo(
    chooseRef.value,
    {
      y: -200,
      z: 100,
      opacity: 0,
      filter: "blur(30px)",
      transformPerspective: 800,
    },
    {
      y: 0,
      z: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: chooseRef.value,
        start: "top 70%",
        end: "center 50%",
        scrub: 1.2,
      },
    }
  );
});
</script>

<template>
  <div
    ref="chooseRef"
    class="flex justify-center w-full mx-auto flex-col gap-16 base-x-padding pb-[330px] max-xl:pb-[200px] max-lg:pb-[150px] max-md:pb-[80px] max-sm:pb-[65px]"
  >
    <div class="flex flex-col gap-6 items-center text-center justify-center">
      <div class="underTitle">HOW WE WORK</div>
      <div class="title max-w-[950px]">
        The <span class="secTitle">Steel Spear</span> Method™
      </div>
      <div class="description max-w-[920px]">
        A proven, repeatable framework designed exclusively for Web3 and fintech
        brands to scale visibility, trust and growth.
      </div>
    </div>

    <div class="flex items-stretch gap-14 justify-center">
      <div
        v-for="(card, index) in ChooseCards"
        :key="index"
        class="relative rounded-[30px] max-w-[443px] flex-1 max-h-[443px] border border-white overflow-hidden bg-[rgba(39,39,39,0.40)] flex flex-col items-center justify-center gap-6"
      >
        <CardBlurCircle
          class="absolute top-[-20px] right-1/2 translate-x-1/2"
        />

        <div class="mt-[75px] w-full">
          <img :src="card.image" alt="" />
        </div>

        <div
          class="flex flex-col gap-[10px] items-center justify-center px-[26px] pb-[35px]"
        >
          <div
            class="rounded-[20px] border border-white px-[10px] py-[9px] bg-[rgba(0,0,0,0.19)] text-[20px] text-white font-satoshi tracking-tighter"
          >
            {{ card.label }}
          </div>

          <div
            class="text-white text-[15px] font-helvetica text-center leading-[140%]"
          >
            {{ card.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
