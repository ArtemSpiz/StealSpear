<script setup>
import BlogImg1 from "../assets/img/BlogImg1.png";
import BlogImg2 from "../assets/img/BlogImg2.png";
import BlogImg3 from "../assets/img/BlogImg3.png";
import { onMounted, onUnmounted, ref } from "vue";

const BlogCards = [
  {
    image: BlogImg1,
    title: "Ether Machine to raise over $1.6B in Nasdaq debut",
    text: "The crypto venture The Ether Machine, backed by major industry players like Blockchain.com, Kraken and Pantera Capital, is planning to go public via a SPAC deal with Dynamix. The merged entity is expected to launch on Nasdaq under the ticker ETHM, with over 400,000 ETH on its balance sheet and the aim to raise more than $1.6 billion in total",
  },
  {
    image: BlogImg2,
    title: "Crypto thefts in 2025 exceed $2.17B; CoinDCX hit $44M",
    text: "By mid-2025, global crypto thefts already surpassed $2.17 billion, before taking into account the later $44 million hack at Indian exchange CoinDCX. The CoinDCX incident involved the compromise of an internal account (not customer cold wallets), with the exchange covering the losses from its own reserves",
  },
  {
    image: BlogImg3,
    title:
      "Trump signs executive order to create U.S. “Strategic Bitcoin Reserve”",
    text: "In March 2025, U.S. President Donald Trump signed an executive order that directs federal agencies to hold seized bitcoins in a “strategic bitcoin reserve” and also establishes a “U.S. Digital Asset Stockpile” for other cryptocurrencies. The plan is to use confiscated crypto assets and build a framework for future acquisitions without burdening taxpayers",
  },
];

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const pageRef = ref(null);

let animation = null;
const isMobile = window.innerWidth < 768;

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
        start: isMobile ? "top 90%" : "top 100%",
        end: isMobile ? "top 10%" : "center 50%",
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
    class="flex flex-col items-center justify-center base-x-padding gap-20 mb-20 max-lg:gap-10 max-md:gap-6 max-md:mb-[139px]"
  >
    <div class="flex flex-col gap-5 items-center text-center justify-center">
      <div class="underTitle">Blog</div>
      <div class="title">
        Useful <span class="secTitle xl:!text-[82px]">News</span>
      </div>
    </div>

    <div
      class="flex items-stretch gap-5 justify-center flex-wrap max-md:flex-col"
    >
      <div
        v-for="(card, index) in BlogCards"
        :key="index"
        class="flex min-w-[300px] max-w-[400px] flex-1 flex-col gap-8 justify-between rounded-[20px] max-md:min-w-0 max-md:items-center max-md:justify-center"
      >
        <div class="h-auto w-auto rounded-xl overflow-hidden">
          <img :src="card.image" alt="" />
        </div>

        <div
          class="flex flex-col items-start max-md:items-center max-md:justify-center"
        >
          <div
            class="text-white text-[28px] font-satoshi font-medium leading-[128%] tracking-tighter-[-0.8px] mb-5 max-md:line-clamp-2"
          >
            {{ card.title }}
          </div>
          <div
            class="text-[#606060] text-[18px] font-helvetica leading-[144%] tracking-tighter-[-0.18px] mb-7 line-clamp-4 self-stretch"
          >
            {{ card.text }}
          </div>

          <button
            class="px-6 overflow-hidden group relative py-3 border border-white flex rounded-[20px] transition-all duration-500 ease-out"
          >
            <span
              class="absolute inset-0 bg-white transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"
            ></span>

            <span
              class="relative z-10 text-white font-satoshi text-base leading-[162%] transition-all duration-500 group-hover:text-black"
              >Read more</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
