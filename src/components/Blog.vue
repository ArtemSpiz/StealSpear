<script setup>
import BlogImg1 from "../assets/img/BlogImg1.png";
import BlogImg2 from "../assets/img/BlogImg2.png";
import BlogImg3 from "../assets/img/BlogImg3.png";

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
</script>

<template>
  <div
    class="flex flex-col items-center justify-center base-x-padding gap-20 mb-20"
  >
    <div class="flex flex-col gap-5 items-center text-center justify-center">
      <div class="underTitle">Blog</div>
      <div class="title">
        Useful <span class="secTitle xl:!text-[82px]">News</span>
      </div>
    </div>

    <div class="flex items-stretch gap-5 justify-center">
      <div
        v-for="(card, index) in BlogCards"
        :key="index"
        class="flex flex-1 flex-col gap-8 justify-between rounded-[20px]"
      >
        <div class="h-auto w-auto rounded-xl overflow-hidden">
          <img :src="card.image" alt="" />
        </div>

        <div class="flex flex-col items-start">
          <div
            class="text-white text-[28px] font-satoshi font-medium leading-[128%] tracking-tighter-[-0.8px] mb-5"
          >
            {{ card.title }}
          </div>
          <div
            class="text-[#606060] text-[18px] font-helvetica leading-[144%] tracking-tighter-[-0.18px] mb-7 line-clamp-4 self-stretch"
          >
            {{ card.text }}
          </div>

          <button
            class="px-6 py-3 border border-white flex rounded-[20px] text-white font-satoshi text-base leading-[162%]"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
