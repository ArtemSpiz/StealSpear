<script setup>
import image1 from "@/assets/img/IndustriesCardImg1.png";
import image2 from "@/assets/img/IndustriesCardImg2.png";
import image3 from "@/assets/img/IndustriesCardImg3.png";
import image4 from "@/assets/img/IndustriesCardImg4.png";
import image5 from "@/assets/img/IndustriesCardImg5.png";
import image6 from "@/assets/img/IndustriesCardImg6.png";
import image7 from "@/assets/img/IndustriesCardImg7.png";
import image8 from "@/assets/img/IndustriesCardImg8.png";

const IndustriesCards = [
  {
    title: "Cryptocurrency",
    text: "At Steel Spear Media, we excel in elevating your cryptocurrency, ICO, or blockchain project within the complex and fast-evolving digital landscape. Through our targeted and strategic promotional efforts, we ensure your offerings gain the visibility and traction needed to thrive in this dynamic market.",
    image: image1,
    gridClass: "div1",
  },
  {
    title: "Personal Branding",
    text: "Building a strong personal image is crucial for business success, especially in the early stages. We work with you to create content that reflects your true self. Through PR, blog posts, and social media, we help you establish a personal brand that resonates with your audience and strengthens your business.",
    image: image2,
    gridClass: "div2",
  },
  {
    title: "Software",
    text: "The software industry drives technological progress. Steel Spear Media helps differentiate your software offerings with comprehensive PR and marketing strategies, highlighting unique features and advantages to enhance brand visibility and growth.",
    image: image3,
    gridClass: "div3",
  },
  {
    title: "Artificial Intelligence",
    text: "AI is transforming industries with innovations in machine learning and data analytics. Steel Spear Media crafts compelling campaigns that highlight your AI solutions, ensuring your brand stands out in this evolving field through PR, social media, and content marketing.",
    image: image4,
    gridClass: "div4",
  },
  {
    title: "IGaming",
    text: "iGaming combines innovative entertainment with regulatory challenges. Steel Spear Media specializes in creating engaging, compliant campaigns for the iGaming industry, using PR, social media, and content marketing to build your brand and drive user engagement.",
    image: image5,
    gridClass: "div5",
  },
  {
    title: "SaaS",
    text: "SaaS offers scalable solutions that enhance business efficiency. Steel Spear Media positions your SaaS products as essential tools through targeted campaigns, content creation, and strategic PR, driving engagement and growth in a competitive market.",
    image: image6,
    gridClass: "div6",
  },
  {
    title: "FinTech",
    text: "FinTech is revolutionizing financial services with the integration of cutting-edge technology. Steel Spear Media is committed to leading in the FinTech space, helping you expand your customer base with or without blockchain solutions. Our strategic PR and marketing efforts position your brand at the forefront of this dynamic industry.",
    image: image7,
    gridClass: "div7",
  },
  {
    title: "Ecommerce",
    text: "In the competitive eCommerce sector, standing out is crucial. Steel Spear Media provides tailored marketing solutions to boost your online presence, using social media optimization and compelling copy to attract and retain customers, driving sales and growth.",
    image: image8,
    gridClass: "div8",
  },
];
</script>

<template>
  <div class="flex justify-items-center pb-[140px] px-[20px] items-center">
    <div
      class="w-full max-w-[1400px] mx-auto bg-[#111] rounded-[40px] px-[80px] py-[100px] 2xl:px-[155px] 2xl:py-[120px]"
    >
      <div
        class="flex flex-col gap-5 items-center text-center justify-center mb-14"
      >
        <div class="underTitle">INDUSTRIES</div>
        <div class="title">
          Our
          <span class="secTitle"> Core </span>
          Industries
        </div>
      </div>

      <div class="parent">
        <div
          v-for="(card, index) in IndustriesCards"
          :key="index"
          :class="card.gridClass"
        >
          <div
            :class="[
              'overflow-hidden bg-[rgba(255,255,255,0.05)] h-full box-border rounded-[20px] relative px-8 py-8 flex flex-col',
              { 'bg-[#1E1E23]': index === 0 },
            ]"
            :style="
              index === 4
                ? 'background: linear-gradient(180deg, rgba(73,73,73,0.35) 0%, rgba(0,0,0,0.35) 100%), rgba(255,255,255,0.05);'
                : index === 5
                ? 'background: linear-gradient(180deg, rgba(15,23,42,0) 0%, #000 100%), rgba(255,255,255,0.05);'
                : ''
            "
          >
            <div
              :class="[
                'justify-between flex flex-col h-full',
                {
                  'justify-stretch': [3, 5, 6].includes(index),
                  '!justify-end': index === 4,
                },
              ]"
            >
              <h3
                class="text-[#F8FAFC] z-10 font-satoshi text-[28px] leading-[130%] mb-5"
              >
                {{ card.title }}
              </h3>
              <p
                :class="[
                  'text-[#CBD5E1] w-full z-10 font-helvetica text-[18px] leading-[145%]',
                  {
                    'max-w-[500px]': index === 0,
                    'max-w-[320px]': index === 1,
                    'max-w-[310px]': index === 2,
                    'max-w-[300px]': index === 7,
                  },
                ]"
              >
                {{ card.text }}
              </p>
            </div>
            <div
              :class="[
                'h-full w-auto flex object-contain absolute z-0',
                {
                  'top-0 right-[40px]': index === 0,
                  'bottom-0 right-[0px] h-[300px]': index === 1,
                  'bottom-0 right-[0px] h-[290px]': index === 2,
                  'bottom-0 right-1/2 translate-x-1/2 h-[215px] ': index === 3,
                  'top-0 right-0 h-[140px] ': index === 4,
                  'bottom-0 left-[20px] h-[140px] ': index === 5,
                  'bottom-[10px] right-0 w-full max-h-[100px] ': index === 6,
                  'bottom-0 right-0 h-full ': index === 7,
                },
              ]"
            >
              <img :src="card.image" :alt="card.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.parent {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 410px);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 7;
}
.div2 {
  grid-area: 2 / 1 / 3 / 4;
}
.div3 {
  grid-area: 2 / 4 / 3 / 7;
}
.div4 {
  grid-area: 3 / 1 / 4 / 3;
}
.div5 {
  grid-area: 3 / 3 / 4 / 5;
}
.div6 {
  grid-area: 3 / 5 / 4 / 7;
}
.div7 {
  grid-area: 4 / 1 / 5 / 4;
}
.div8 {
  grid-area: 4 / 4 / 5 / 7;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
}
</style>
