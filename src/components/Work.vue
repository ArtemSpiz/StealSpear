<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import WorkImg1 from "../assets/img/WorkImg1.png";
import WorkImg2 from "../assets/img/WorkImg2.png";
import WorkImg3 from "../assets/img/WorkImg3.png";
import WorkImg4 from "../assets/img/WorkImg4.png";
import PlusMinusIcon from "../assets/icons/Plus.vue";

const activeCardIndex = ref(0);

const WorkCards = [
  {
    image: WorkImg1,
    title: "Discover & Diagnose",
    text: "We analys your brand, competitors, audience and positioning to identify the real opportunities for scale.",
  },
  {
    image: WorkImg2,
    title: "Strategize & Build",
    text: "We craft a multi-layered growth blueprint combining PR, influencers, paid media, content and community.",
  },
  {
    image: WorkImg3,
    title: "Execute & Amplify",
    text: "High-impact campaigns, rapid iteration and data-backed decision-making across all channels.",
  },
  {
    image: WorkImg4,
    title: "Measure & Optimize",
    text: "Live dashboards, performance breakdowns, weekly insights and continuous optimization for maximum ROI.",
  },
];

const toggleCard = (index) => {
  if (activeCardIndex.value === index) {
    activeCardIndex.value = index + 1 < WorkCards.length ? index + 1 : 0;
  } else {
    activeCardIndex.value = index;
  }
};

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const pageRef = ref(null);

let animation = null;

onMounted(() => {
  animation = gsap.fromTo(
    pageRef.value,
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
        trigger: pageRef.value,
        start: "top 70%",
        end: "center 50%",
        scrub: 1.2,
      },
    }
  );
});

onUnmounted(() => {
  if (animation?.scrollTrigger) {
    animation.scrollTrigger.kill();
  }
  animation?.kill();
});
</script>

<template>
  <div
    ref="pageRef"
    class="flex justify-center w-full mx-auto flex-col gap-6 base-x-padding pb-[330px] max-xl:pb-[200px] max-lg:pb-[150px] max-md:pb-[80px] max-sm:pb-[65px]"
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

    <div class="flex justify-center items-center self-stretch gap-6">
      <div
        v-for="(card, index) in WorkCards"
        :key="index"
        @click="toggleCard(index)"
        class="rounded-[20px] relative border backdrop-blur-[32px] h-[481px] flex flex-col justify-between px-5 py-[30px] border-white bg-[#1D1D1D] cursor-pointer overflow-hidden transition-all duration-500 ease-in-out"
        :class="activeCardIndex === index ? ' w-[480px]' : 'w-[70px]'"
      >
        <div class="w-full items-end flex justify-end z-10 relative">
          <PlusMinusIcon :isOpen="activeCardIndex === index" />
        </div>

        <div
          class="absolute top-0 right-0 w-auto h-full transition-opacity duration-500"
          :class="activeCardIndex === index ? 'opacity-100' : 'opacity-0'"
        >
          <img :src="card.image" alt="" />
        </div>

        <div
          class="absolute left-[-5px] bottom-0 text-[32px] font-helvetica text-white leading-[140%] flex flex-col px-5 py-8 transition-opacity duration-300"
          :class="activeCardIndex === index ? 'opacity-0 ' : 'opacity-100'"
          style="writing-mode: vertical-rl; transform: rotate(180deg)"
        >
          {{ card.title }}
        </div>

        <div
          class="flex items-start gap-1 font-helvetica flex-col text-white leading-[140%] z-10 relative transition-opacity duration-300"
          :class="
            activeCardIndex === index
              ? 'opacity-100 delay-200'
              : 'opacity-0 pointer-events-none'
          "
        >
          <div class="text-[32px]">{{ card.title }}</div>
          <div class="text-[14px]">{{ card.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
