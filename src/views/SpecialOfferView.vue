<template>
  <div>
    <UserLayout
      viewTitle="Special Offer view title"
      bannerPath="/img/banners/Macdonald.png"
    >
    <div class="py-60">
        Hello World
    </div>
    </UserLayout>
  </div>
</template>

<script lang="ts">
import UserLayout from "./layouts/UserLayout.vue";

export default {
  components: {
    UserLayout,
  },
};
</script>
