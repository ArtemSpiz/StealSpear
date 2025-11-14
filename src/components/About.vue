<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import WhiteBtn from "@/ui/WhiteBtn.vue";
import image from "@/assets/img/aboutImg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutRef = ref(null);
let animation = null;

onMounted(() => {
  animation = gsap.fromTo(
    aboutRef.value,
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
        trigger: aboutRef.value,
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
    ref="aboutRef"
    class="base-x-padding flex items-center gap-[75px] pb-[220px] max-xl:pb-[180px] max-lg:pb-[150px] max-md:pb-[100px] max-sm:pb-[88px] max-xl:flex-col"
  >
    <div
      class="flex flex-col flex-1 gap-8 min-w-0 md:min-w-[450px] max-xl:justify-center max-xl:text-center max-xl:items-center max-md:gap-5"
    >
      <div class="underTitle">Know US</div>
      <div class="title !-tracking-wide">
        A Growth <span class="secTitle">Team</span> built for
        <span class="secTitle">Web3</span>
      </div>

      <div class="max-w-[500px] flex-1 h-auto hidden max-xl:flex">
        <img :src="image" alt="" />
      </div>

      <div class="description">
        Steel Spear Media is a Web3 focused marketing and PR agency dedicated to
        helping blockchain, crypto and fintech brands grow with precision. Our
        team blends data driven execution, expert storytelling and targeted
        distribution to deliver real traction that scales with your brand.
      </div>

      <WhiteBtn label="Contact Us" />
    </div>

    <div class="max-w-[821px] flex-1 h-auto max-xl:hidden">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
