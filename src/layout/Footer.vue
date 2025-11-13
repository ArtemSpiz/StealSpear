<script setup>
import Logo from "../assets/img/FooterLogo.png";
import FooterSoc1 from "../assets/img/FooterSoc1.png";
import FooterSoc2 from "../assets/img/FooterSoc2.png";
import FooterSoc3 from "../assets/img/FooterSoc3.png";

const FooterSoc = [
  {
    image: FooterSoc1,
  },
  {
    image: FooterSoc2,
  },
  {
    image: FooterSoc3,
  },
];

const FooterLinks = [
  {
    title: "Home",
  },
  {
    title: "About us",
  },
  {
    title: "Work with us",
  },
  {
    title: "Industries",
  },
  {
    title: "Our services",
  },
];
</script>

<template>
  <div
    class="px-[46px] pb-14 w-full flex justify-center max-lg:px-9 max-md:px-6"
  >
    <div
      class="px-[180px] py-[120px] w-full bg-white rounded-[40px] flex justify-between items-center self-stretch max-xl:px-[100px] max-lg:px-[60px] max-md:px-[10px] max-xl:py-[80px] max-lg:py-[60px] max-md:py-[30px] max-md:gap-16 max-md:flex-col-reverse max-md:items-center max-md:justify-center"
    >
      <div
        class="h-full flex flex-col items-start justify-between max-md:h-[248px] max-md:items-center max-md:text-center"
      >
        <div class="h-auto w-[250px]">
          <img :src="Logo" alt="" />
        </div>

        <div class="flex flex-col gap-5">
          <div class="flex gap-3 self-stretch max-md:justify-center">
            <div
              v-for="soc in FooterSoc"
              :key="soc.image"
              class="box-border cursor-pointer w-10 p-[10px] bg-black rounded-xl flex justify-center items-center transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-lg hover:shadow-black/50"
            >
              <img
                class="w-auto h-5 transition-transform duration-500 ease-in-out hover:rotate-9"
                :src="soc.image"
                alt=""
              />
            </div>
          </div>

          <div class="text-black text-xs font-helvetica leading-[150%]">
            COPYRIGHT ALL RIGHT RESERVED
          </div>
        </div>
      </div>

      <div class="flex flex-col max-md:items-center max-md:text-center">
        <div class="text-lg font-helvetica text-black leading-[145%] mb-6">
          SUPPORT
        </div>

        <a
          v-for="(link, index) in FooterLinks"
          :key="index"
          class="relative text-xs cursor-pointer font-helvetica text-black leading-[150%] mb-4 inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[-1px] after:h-[2px] after:bg-black after:w-0 after:transition-all after:duration-300 hover:after:w-full"
        >
          {{ link.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
