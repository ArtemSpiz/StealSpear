<script setup>
import ServicesIcon1 from "../assets/img/ServicesIcon1.png";
import ServicesIcon2 from "../assets/img/ServicesIcon2.png";
import ServicesIcon3 from "../assets/img/ServicesIcon3.png";
import ServicesIcon4 from "../assets/img/ServicesIcon4.png";
import ServicesIcon5 from "../assets/img/ServicesIcon5.png";

import ServicesLine1 from "../assets/img/ServicesLine1.png";
import ServicesLine2 from "../assets/img/ServicesLine2.png";
import ServicesLine3 from "../assets/img/ServicesLine3.png";
import ServicesLine4 from "../assets/img/ServicesLine4.png";
import ServicesLine5 from "../assets/img/ServicesLine5.png";

const ServicesCards = [
  {
    icon: ServicesIcon1,
    lineIcon: ServicesLine1,
    title: "Content Creation",
    text: "Transform your brand’s voice with expertly craftedcontent for social media, blogs, and websites. Our team creates compelling stories that attract traffic and engage your audience, ensuring your brand message is clear and impactful.",
  },
  {
    icon: ServicesIcon2,
    lineIcon: ServicesLine2,
    title: "Strategic PR",
    text: "Build a strong, positive reputation with our PR services. We strategically place your brand in the spotlight, using our experience to boost your public image and ensure your messages are seen by the right audience.",
  },
  {
    icon: ServicesIcon3,
    lineIcon: ServicesLine3,
    title: "Social Media Management",
    text: "Expand your reach on social media with our targeted strategies. We create captivating written and visual content to grow your audience organically. Reach your niche market and increase your brand’s social media impact with our expert guidance.",
  },
  {
    icon: ServicesIcon4,
    lineIcon: ServicesLine4,
    title: "Direct Digital Marketing",
    text: "Enhance your digital marketing efforts with our comprehensive services. We design and manage email campaigns that captivate and convert. Whether we handle all aspects or work with your materials, we ensure your campaigns build and retain clientele.",
  },
  {
    icon: ServicesIcon5,
    lineIcon: ServicesLine5,
    title: "Data Analysis",
    text: "Make informed marketing decisions with our data insights. Our experienced analysts dive deep into your digital marketing data, providing actionable insights to improve your strategies. Stay competitive with our evolving and adaptive data solutions.",
  },
];
</script>

<template>
  <div
    class="flex flex-col items-center justify-center base-x-padding gap-[124px] mb-36"
  >
    <div class="flex flex-col gap-5 items-center text-center justify-center">
      <div class="underTitle">SERVICES</div>
      <div class="title">Our <span class="secTitle">Core</span> Services</div>
    </div>

    <div class="grid grid-cols-6 grid-rows-2 gap-5 relative">
      <div
        class="w-[500px] h-[500px] rounded-full absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 bg-[rgba(255,255,255,0.63)] blur-[300px]"
      ></div>
      <div
        v-for="(card, index) in ServicesCards"
        :key="index"
        :class="[
          'relative px-9 box-border py-8 gap-5 md:min-h-[410px] rounded-[20px] bg-[#111] flex flex-col justify-between',
          {
            'col-span-3': index === 0,
            'col-span-3 col-start-4': index === 1,
            'col-span-2 row-start-2': index === 2,
            'col-span-2 col-start-3 row-start-2': index === 3,
            'col-span-2 col-start-5 row-start-2': index === 4,
          },
        ]"
      >
        <div class="w-16 h-16">
          <img :src="card.icon" alt="" />
        </div>

        <div
          :class="[
            'absolute -z-0 ',
            {
              'left-[100px] w-2/3 top-[20px]': index === 0,
            },
            {
              'left-[100px] w-2/3 top-[20px]': index === 1,
            },
            { 'left-4 top-[100px]': index === 2 },
            { 'left-5 top-5': index === 3 },
            { 'left-3 w-[26px] top-1': index === 4 },
          ]"
        >
          <img :src="card.lineIcon" alt="" />
        </div>

        <div class="flex flex-col gap-5">
          <div
            class="text-white font-satoshi text-[28px] font-medium leading-[128%]"
          >
            {{ card.title }}
          </div>
          <div class="text-white font-helvetica text-[18px] leading-[120%]">
            {{ card.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
