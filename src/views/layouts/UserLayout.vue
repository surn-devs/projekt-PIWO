<template>
  <div class="h-screen">
    <div
      class="masthead bg-primary-500 border-b-2 border-primary-900 pt-6 text-center pb-4 px-4 flex justify-around"
    >
      <div class="w-10"></div>
      <div class="text-2xl">{{ viewTitle }}</div>
      <div
        @click="this.$router.push({ name: 'About' })"
        class="border-2 border-primary-800 rounded-full w-10 h-10 flex"
      >
        <img
          class="items-end"
          src="../../assets/icons/User.svg"
          alt="user-icon"
        />
      </div>
    </div>
    <div class="main pt-4 px-4 flex flex-col justify-center bg-primary-500">
      <div class="view-banner w-72 h-40 mx-auto mb-4">
        <img
          class="max-w-full max-h-full mx-auto"
          :src="bannerPath"
          alt="view-banner"
        />
      </div>
      <div class="flex flex-wrap flex-row gap-4 z-0 justify-center">
        <slot></slot>
      </div>
    </div>
    <div
      class="footer p-4 sticky bottom-0 border-t-2 border-primary-900 z-10 bg-primary-500"
    >
      <div class="flex flex-row justify-around">
        <img
          @click="this.$router.push({ name: 'Calendar' })"
          src="../../assets/icons/Calendar.svg"
          alt="Calendar"
        />
        <img
          @click="this.$router.push({ name: 'CreateEvent' })"
          src="../../assets/icons/CreateEvent.svg"
          alt="CreateEvent"
        />
        <img
          @click="this.$router.push({ name: 'Recomended' })"
          src="../../assets/icons/Happy.svg"
          alt="Recomended"
        />
        <img
          @click="this.$router.push({ name: 'Friends' })"
          src="../../assets/icons/Group.svg"
          alt="Friends"
        />
        <img
          @click="this.$router.push({ name: 'Map' })"
          src="../../assets/icons/Compass.svg"
          alt="Map"
        />
        <img
          @click="this.$router.push({ name: 'SpecialOffer' })"
          src="../../assets/icons/Bag.svg"
          alt="SpecialOffer"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    viewTitle: String,
    bannerPath: String,
  },
};
</script>
