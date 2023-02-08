<template>
  <div class="sign bg-whisky h-screen">
    <div
      class="bg-primary-500 w-full h-4/6 absolute bottom-0 rounded-t-[64px] text-primary-900 text-primary-900"
    >
      <div
        v-if="isLogin"
        class="about-content flex flex-col gap-3 text-center justify-center items-center p-6"
      >
        <div class="about text">
          <div class="mb-4 px-2">
            <h1 class="mb-2 text-2xl">Załóż konto</h1>
          </div>
          <div class="flex flex-col gap-3 mb-3">
            <p>Nazwa uzytkownika:</p>
            <input
              class="bg-primary-100 rounded p-2"
              type="text"
              placeholder="Nazwa uzytkownika"
            />

            <p>Email:</p>
            <input
              class="bg-primary-100 rounded p-2"
              type="email"
              placeholder="Email"
            />

            <p>Hasło:</p>
            <input
              class="bg-primary-100 rounded p-2"
              type="password"
              placeholder="Hasło"
            />
          </div>
          <p class="text-sm">Masz juz konto?</p>
          <p class="underline font-bold text-sm" @click="toggleLogin">
            Kliknij tutaj
          </p>
          <button
            class="mt-4 bg-primary-100 rounded-lg p-4 hover:bg-primary-300"
            @click="this.$router.push({ name: 'Home' })"
          >
            Zarejestruj się
          </button>
        </div>
      </div>
      <div
        v-else
        class="about-content flex flex-col gap-3 text-center justify-center items-center p-6"
      >
        <div class="mb-4 px-2">
          <h1 class="mb-2 text-2xl">Załóż konto</h1>
        </div>
        <div class="flex flex-col gap-3 mb-">
          <p>Nazwa uzytkownika:</p>
          <input
            class="bg-primary-100 rounded p-2"
            type="text"
            placeholder="Nazwa uzytkownika"
          />
          <p>Hasło:</p>
          <input
            class="bg-primary-100 rounded p-2"
            type="password"
            placeholder="Hasło"
          />
        </div>
        <button
          class="mt-4 bg-primary-100 rounded-lg p-4 hover:bg-primary-300"
          @click="this.$router.push({ name: 'Home' })"
        >
          Zaloguj się
        </button>
        <p class="text-sm">Nie masz jeszcze konta?</p>
        <p class="underline font-bold text-sm" @click="toggleLogin">
          Zarejestruj się tutaj
        </p>
      </div>
      <div class="mt-12">
        <p class="text-center text-xs">© SURN - 2023</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  data() {
    return {
      isLogin: true,
    };
  },
  methods: {
    toggleLogin() {
      this.isLogin = !this.isLogin;
    },
  },
};
</script>
