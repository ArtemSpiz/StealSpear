<script setup>
import ArrowAmount from "@/assets/icons/ArrowAmount.vue";
import ClientsImg1 from "../assets/img/ClientsImg1.png";
import ClientsImg2 from "../assets/img/ClientsImg2.png";
import ClientsImg3 from "../assets/img/ClientsImg3.png";
import ClientsImg4 from "../assets/img/ClientsImg4.png";
import WhiteBtn from "@/ui/WhiteBtn.vue";
import BtnArrow from "@/assets/icons/BtnArrow.vue";
import { onMounted, onUnmounted, ref } from "vue";

const isHovered = ref(false);

const ClientsCards = [
  {
    title: "Qubetics",
    text: "Layer 1 blockchain aggregating major networks like Bitcoin, Ethereum, and Solana with built-in dVPN and multichain wallet.",
    amount: "+ $18M",
    image: ClientsImg1,
  },
  {
    title: "IPO Genie",
    text: "Layer 1 blockchain aggregating major networks like Bitcoin, Ethereum, and Solana with built-in dVPN and multichain wallet.",
    amount: "+ $5M",
    image: ClientsImg2,
  },
  {
    title: "BlockchainFX",
    text: "Layer 1 blockchain aggregating major networks like Bitcoin, Ethereum, and Solana with built-in dVPN and multichain wallet.",
    amount: "+ $18M",
    image: ClientsImg3,
  },
  {
    title: "SUI",
    text: "Layer 1 blockchain aggregating major networks like Bitcoin, Ethereum, and Solana with built-in dVPN and multichain wallet.",
    amount: "+ $5M",
    image: ClientsImg4,
  },
];

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const pageRef = ref(null);

let animation = null;
const isMobile = window.innerWidth < 648;

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
        start: isMobile ? "top 80%" : "top 90%",
        end: isMobile ? "center 80%" : "center 50%",
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
    class="flex flex-col pb-32 items-center justify-center base-x-padding max-lg:pb-28 max-md:pb-24"
  >
    <div
      class="flex flex-col gap-3 items-center text-center justify-center mb-11 max-xl:mb-8 max-md:mb-6"
    >
      <div class="underTitle">Clients</div>
      <div class="title">Case Studies</div>
    </div>

    <div
      class="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-8 max-2xl:gap-x-10 max-xl:gap-10 max-lg:gap-8 max-md:flex max-md:flex-col max-md:gap-[30px]"
    >
      <div
        class="rounded-[30px] flex items-center px-7 py-[34px] gap-8 relative overflow-hidden border border-white bg-[rgba(39,39,39,0.40)]"
        v-for="(card, index) in ClientsCards"
        :key="index"
      >
        <div
          :class="[
            'absolute top-[-130px] right-[-100px] w-[255px] h-[255px] rounded-full blur-[200px] ',
            {
              'bg-[#3869D3]': index === 0,
              'bg-[#9B1600]': index === 1,
              'bg-[#E1A431]': index === 2,
              'bg-[#2218FF]': index === 3,
            },
          ]"
          style="filter: blur(200px); will-change: filter"
        ></div>
        <div
          class="gap-[30px] flex-col flex items-start max-md:gap-2 max-xl:items-center"
        >
          <div
            class="flex flex-col gap-4 max-md:gap-[10px] max-xl:justify-center max-xl:items-center max-xl:text-center"
          >
            <div
              class="text-white font-satoshi text-[28px] font-bold leading-[128%]"
            >
              {{ card.title }}
            </div>
            <div
              class="text-white font-helvetica text-[18px] font-normal leading-[138%]"
            >
              {{ card.text }}
            </div>

            <div
              class="w-auto overflow-hidden rounded-[30px] hidden pb-[10px] max-xl:flex h-[250px] justify-center"
            >
              <img :src="card.image" alt="" />
            </div>

            <div class="flex gap-2">
              <ArrowAmount />
              <div
                class="text-white font-satoshi text-[16px] font-normal leading-[160%]"
              >
                RAISED AMOUNT
              </div>
              <div
                class="text-white font-satoshi text-[16px] font-normal leading-[160%]"
              >
                {{ card.amount }}
              </div>
            </div>
          </div>

          <WhiteBtn color="#000" arrow="true" label="View Case Study" />
        </div>

        <div class="w-auto overflow-hidden rounded-[30px] max-xl:hidden">
          <img :src="card.image" alt="" />
        </div>
      </div>
    </div>

    <button
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      class="relative overflow-hidden group pl-8 pr-[26px] py-3 gap-1 border border-white rounded-[10px] flex items-center w-max transition-all duration-500 ease-out mt-14 max-lg:mt-10 max-md:mt-[30px]"
    >
      <span
        class="absolute inset-0 bg-white transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
      ></span>

      <span
        class="relative z-10 text-white text-sm font-helvetica transition-all duration-500 group-hover:text-black"
      >
        All Case Studies
      </span>

      <BtnArrow
        class="relative z-10 transition-all duration-500 group-hover:translate-x-[6px]"
        hoverColor="black"
        :isHovered="isHovered"
      />
    </button>
  </div>
</template>

<style scoped></style>
