<template>
  <div>
    <UserLayout
      viewTitle="Friends view title"
      bannerPath="/img/banners/Ford.png"
    >
      <div class="py-60">Hello World</div>
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
