<template>
  <div class="bg-primary-500 flex flex-col gap-3 justify-center items-center h-screen text-center text-xl">
    <h1 class="text-2xl">Demo</h1>
    <button @click="this.$router.push('about')"
    class="border-2 border-primary-900 p-4 rounded hover:bg-primary-300">
      Let's start with first screen HERE
    </button>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      World: "World",
    };
  },
};
</script>
