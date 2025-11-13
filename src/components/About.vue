<script setup>
import WhiteBtn from "@/ui/WhiteBtn.vue";
import image from "@/assets/img/aboutImg.png";
</script>

<template>
  <div
    class="base-x-padding flex items-center gap-[75px] pb-[246px] max-xl:pb-[200px] max-lg:pb-[150px] max-md:pb-[100px] max-sm:pb-[88px]"
  >
    <div class="flex flex-col flex-1 gap-8 min-w-0 md:min-w-[400px]">
      <div class="underTitle">Know US</div>
      <div class="title">
        About
        <span class="secTitle">Steel Spear Media</span>
      </div>
      <div class="description">
        Our distribution networks and strategic partnerships eliminate the
        complexities of public relations. We collaborate closely with you to
        engage your target audience and deploy superior media strategies,
        supported by our SEO and media specialists We execute your initiatives
        according to your timeline, ensuring you remain in control. With Steel
        Spear Media, your brand will achieve the visibility and traffic needed
        to outshine the competition and drive revenue growth.
      </div>

      <div class="description">
        Steel Spear Media is a leading PR and marketing company with a dynamic
        team specializing in major fields such as crypto, fintech, software, AI,
        eCommerce, and more. What sets us apart from traditional PR agencies is
        our extensive experience, global reach, and diverse international team
        and network.
      </div>

      <WhiteBtn label="Contact Us" />
    </div>

    <div class="max-w-[821px] flex-1 h-auto">
      <img :src="image" alt="" />
    </div>
  </div>
</template>

<style scoped></style>
