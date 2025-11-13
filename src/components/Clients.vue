<script setup>
import ArrowAmount from "@/assets/icons/ArrowAmount.vue";
import ClientsImg1 from "../assets/img/ClientsImg1.png";
import ClientsImg2 from "../assets/img/ClientsImg2.png";
import ClientsImg3 from "../assets/img/ClientsImg3.png";
import ClientsImg4 from "../assets/img/ClientsImg4.png";
import WhiteBtn from "@/ui/WhiteBtn.vue";
import BtnArrow from "@/assets/icons/BtnArrow.vue";

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
</script>

<template>
  <div class="flex flex-col pb-32 items-center justify-center base-x-padding">
    <div
      class="flex flex-col gap-3 items-center text-center justify-center mb-11"
    >
      <div class="underTitle">Clients</div>
      <div class="title">Case Studies</div>
    </div>

    <div class="grid grid-cols-2 grid-rows-2 gap-x-16 gap-y-8 max-2xl:gap-x-10">
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
        ></div>
        <div class="gap-[30px] flex-col flex items-start">
          <div class="flex flex-col gap-4">
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

        <div class="w-auto overflow-hidden rounded-[30px]">
          <img :src="card.image" alt="" />
        </div>
      </div>
    </div>

    <button
      class="pl-8 pr-[26px] mt-14 py-3 gap-1 border border-white rounded-[10px] flex items-center"
    >
      <span class="text-white text-sm font-helvetica leading-[185%]">
        All Case Studies
      </span>

      <BtnArrow />
    </button>
  </div>
</template>

<style scoped></style>
