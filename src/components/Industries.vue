<script setup>
import image1 from "@/assets/img/IndustriesCardImg1.png";
import image2 from "@/assets/img/IndustriesCardImg2.png";
import image3 from "@/assets/img/IndustriesCardImg3.png";
import image4 from "@/assets/img/IndustriesCardImg4.png";
import image5 from "@/assets/img/IndustriesCardImg5.png";
import image6 from "@/assets/img/IndustriesCardImg6.png";
import image7 from "@/assets/img/IndustriesCardImg7.png";
import image8 from "@/assets/img/IndustriesCardImg8.png";

import image1Mob from "@/assets/img/IndustriesCardImg1Mob.png";
import image2Mob from "@/assets/img/IndustriesCardImg2Mob.png";
import image3Mob from "@/assets/img/IndustriesCardImg3Mob.png";
import image4Mob from "@/assets/img/IndustriesCardImg4Mob.png";
import image5Mob from "@/assets/img/IndustriesCardImg5Mob.png";
import image6Mob from "@/assets/img/IndustriesCardImg6Mob.png";
import image7Mob from "@/assets/img/IndustriesCardImg7Mob.png";
import image8Mob from "@/assets/img/IndustriesCardImg8Mob.png";
import { onBeforeUnmount, onMounted, ref, onUnmounted } from "vue";

const IndustriesCards = [
  {
    title: "Cryptocurrency",
    text: "At Steel Spear Media, we excel in elevating your cryptocurrency, ICO, or blockchain project within the complex and fast-evolving digital landscape. Through our targeted and strategic promotional efforts, we ensure your offerings gain the visibility and traction needed to thrive in this dynamic market.",
    image: image1,
    imageMob: image1Mob,
    gridClass: "div1",
  },
  {
    title: "Personal Branding",
    text: "Building a strong personal image is crucial for business success, especially in the early stages. We work with you to create content that reflects your true self. Through PR, blog posts, and social media, we help you establish a personal brand that resonates with your audience and strengthens your business.",
    image: image2,
    imageMob: image2Mob,
    gridClass: "div2",
  },
  {
    title: "Software",
    text: "The software industry drives technological progress. Steel Spear Media helps differentiate your software offerings with comprehensive PR and marketing strategies, highlighting unique features and advantages to enhance brand visibility and growth.",
    image: image3,
    imageMob: image3Mob,
    gridClass: "div3",
  },
  {
    title: "Artificial Intelligence",
    text: "AI is transforming industries with innovations in machine learning and data analytics. Steel Spear Media crafts compelling campaigns that highlight your AI solutions, ensuring your brand stands out in this evolving field through PR, social media, and content marketing.",
    image: image4,
    imageMob: image4Mob,
    gridClass: "div4",
  },
  {
    title: "IGaming",
    text: "iGaming combines innovative entertainment with regulatory challenges. Steel Spear Media specializes in creating engaging, compliant campaigns for the iGaming industry, using PR, social media, and content marketing to build your brand and drive user engagement.",
    image: image5,
    imageMob: image5Mob,
    gridClass: "div5",
  },
  {
    title: "SaaS",
    text: "SaaS offers scalable solutions that enhance business efficiency. Steel Spear Media positions your SaaS products as essential tools through targeted campaigns, content creation, and strategic PR, driving engagement and growth in a competitive market.",
    image: image6,
    imageMob: image6Mob,
    gridClass: "div6",
  },
  {
    title: "FinTech",
    text: "FinTech is revolutionizing financial services with the integration of cutting-edge technology. Steel Spear Media is committed to leading in the FinTech space, helping you expand your customer base with or without blockchain solutions. Our strategic PR and marketing efforts position your brand at the forefront of this dynamic industry.",
    image: image7,
    imageMob: image7Mob,
    gridClass: "div7",
  },
  {
    title: "Ecommerce",
    text: "In the competitive eCommerce sector, standing out is crucial. Steel Spear Media provides tailored marketing solutions to boost your online presence, using social media optimization and compelling copy to attract and retain customers, driving sales and growth.",
    image: image8,
    imageMob: image8Mob,
    gridClass: "div8",
  },
];

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateWidth);
});

const getImage = (card, index) => {
  if (windowWidth.value < 768) {
    return card.imageMob;
  } else if (windowWidth.value < 1400) {
    return [0, 1, 2, 7].includes(index) ? card.imageMob : card.image;
  } else {
    return card.image;
  }
};

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
        start: isMobile ? 'top 80%' : "top 50%",
        end: "top 0%",
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
    class="flex justify-items-center pb-[140px] px-[20px] items-center max-xl:pb-[120px] max-lg:pb-[100px] max-md:pb-[86px]"
  >
    <div
      class="w-full max-w-[1800px] mx-auto bg-[#111] rounded-[40px] px-[80px] py-[100px] 2xl:px-[155px] 2xl:py-[120px] max-xl:px-[60px] max-xl:py-[80px] max-md:px-[20px] max-md:py-[60px] max-sm:p-[5px] max-sm:pt-10"
    >
      <div
        class="flex flex-col gap-5 items-center text-center justify-center mb-14 max-lg:mb-10"
      >
        <div class="underTitle">INDUSTRIES</div>
        <div class="title">
          Our
          <span class="secTitle"> Core </span>
          Industries
        </div>
      </div>

      <div class="parent gap-5 max-md:gap-[10px] max-md:flex max-md:flex-col">
        <div
          v-for="(card, index) in IndustriesCards"
          :key="index"
          :class="card.gridClass"
        >
          <div
            :class="[
              'overflow-hidden bg-[rgba(255,255,255,0.05)] h-full box-border rounded-[20px] relative px-8 py-8 flex flex-col max-[1400px]:py-[14px] max-md:h-[350px]',
              { '!bg-[#1E1E23]': index === 0 },
              {
                'max-md:!h-[400px]': index === 1 || index === 2 || index === 3,
              },
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
                'justify-between flex flex-col h-full max-[1400px]:justify-start',
                {
                  'justify-stretch': [3, 5, 6].includes(index),
                  '!justify-end': index === 4,
                  '!justify-between': index === 0,
                },
              ]"
            >
              <h3
                class="text-[#F8FAFC] z-10 font-satoshi text-[28px] leading-[130%] mb-5 max-md:mb-8"
              >
                {{ card.title }}
              </h3>
              <p
                :class="[
                  'text-[#CBD5E1] w-full z-10 font-helvetica text-[18px] leading-[145%] max-lg:text-base max-md:text-xs ',
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
                ' w-auto flex object-contain absolute',
                {
                  'top-0 h-full justify-end right-[40px] max-[1400px]:max-h-[300px] max-[1400px]:top-[10%] max-[1400px]:right-0 max-lg:max-h-[200px] max-lg:aspect-square':
                    index === 0,
                  'bottom-0 right-[0px]  justify-end h-[300px] max-[1400px]:h-[250px] max-lg:h-[200px] max-lg:w-[170px]':
                    index === 1,
                  'bottom-0 right-[0px]  justify-end h-[290px] max-[1400px]:h-[200px] max-lg:w-[290px]':
                    index === 2,
                  'bottom-0 right-1/2 translate-x-1/2 h-[215px]  max-md:h-[180px] max-md:w-full':
                    index === 3,
                  'top-0 right-0 h-[140px]  max-md:w-full max-md:h-auto max-md:max-h-[170px]':
                    index === 4,
                  'bottom-0 left-[20px]  justify-end  h-[140px] max-md:left-auto max-md:right-0 max-md:w-[240px]':
                    index === 5,
                  'bottom-[10px] right-0 w-full max-h-[100px] ': index === 6,
                  'bottom-0 right-0  justify-end h-full max-[1400px]:h-[230px] max-md:h-[180px] max-md:w-[300px]':
                    index === 7,
                },
              ]"
            >
              <img :src="getImage(card, index)" :alt="card.title" />
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

@media (max-width: 1400px) {
  .parent {
    grid-template-rows: repeat(4, 450px);
  }
}

@media (max-width: 1024px) {
  .parent {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 450px);
  }

  .div1,
  .div2,
  .div3,
  .div4,
  .div5,
  .div6,
  .div7,
  .div8 {
    grid-area: unset;
  }
}

@media (max-width: 768px) {
  .parent {
    display: flex;
    flex-direction: column;
  }
}
</style>
