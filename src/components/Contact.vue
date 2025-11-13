<script setup>
import { ref } from "vue";
import WhiteBtn from "@/ui/WhiteBtn.vue";
import Spear from "../assets/img/ContactSpear.png";

const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const handleSubmit = () => {};
</script>

<template>
  <div
    class="flex flex-col lg:flex-row items-start base-x-padding gap-[86px] justify-between mb-12"
  >
    <div
      class="flex relative flex-1 flex-col gap-5 items-start text-start justify-start"
    >
      <div class="underTitle">CONTACT US</div>
      <div
        class="text-[56px] text-white font-helvetica leading-[120%] max-lg:text-[50px] max-md:text-[42px]"
      >
        Get In Touch!
      </div>
      <div class="description">
        At Steel Spear Media, we’re here to help you take your brand to new
        heights. Whether you have questions, need more information, or are ready
        to start a project, we’d love to hear from you.
      </div>

      <div
        class="absolute left-[-40px] bottom-[-80px] w-[400px] h-auto pointer-events-none"
      >
        <img :src="Spear" alt="Spear decoration" />
      </div>
    </div>

    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col gap-6 flex-1 w-full max-w-[500px]"
    >
      <input
        v-model="form.name"
        placeholder="Enter Full Name"
        class="py-[15px] px-6 rounded-xl bg-[#1B1B1B] text-white placeholder-[#3E3E3E] text-lg font-helvetica leading-[145%] focus:outline-none focus:ring-2 focus:ring-[#444]"
      />

      <input
        v-model="form.email"
        placeholder="Enter Email Address"
        type="email"
        class="py-[15px] px-6 rounded-xl bg-[#1B1B1B] text-white placeholder-[#3E3E3E] text-lg font-helvetica leading-[145%] focus:outline-none focus:ring-2 focus:ring-[#444]"
      />

      <input
        v-model="form.phone"
        placeholder="Enter Phone Number"
        type="tel"
        class="py-[15px] px-6 rounded-xl bg-[#1B1B1B] text-white placeholder-[#3E3E3E] text-lg font-helvetica leading-[145%] focus:outline-none focus:ring-2 focus:ring-[#444]"
      />

      <textarea
        v-model="form.message"
        placeholder="Write Message"
        class="py-[15px] px-6 h-[140px] resize-none rounded-xl bg-[#1B1B1B] text-white placeholder-[#3E3E3E] text-lg font-helvetica leading-[145%] focus:outline-none focus:ring-2 focus:ring-[#444]"
      ></textarea>

      <WhiteBtn
        type="submit"
        label="Submit"
        extraClass="!w-full !justify-center "
      />
    </form>
  </div>
</template>

<style scoped></style>
