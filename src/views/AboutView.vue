<template>
  <div class="about bg-beer h-screen">
    <div
      class="bg-primary-500 w-full h-4/6 absolute bottom-0 rounded-t-[64px] text-primary-900"
    >
      <div
        class="about-content flex flex-col gap-3 text-center justify-center items-center p-6"
      >
        <div
          class="h-16 w-16 rounded-full bg-primary-100 flex justify-center items-center"
        >
          <img src="../assets/wine-glass.svg" alt="wine-glass" />
        </div>
        <div class="about text">
          <div class="mb-4 px-4">
            <h1 class="mb-6 text-2xl">Project PIWO</h1>
            <p class="text-sm text-justify">
              Tu znajdziesz polecane miejca by spotkać się ze znajomymi,
              zorganizować spotkanie zna które możesz zaprosić także
              nieznajomych urzytkowników a także zlokalizujesz miejsca spotkań
              udostępnione przez zarówno znajomychjak i poszukujących
              towarzystwa nieznajomych!Skorzystaj z funkcji kalendarza spotkań
              która powiadomi cię o zbliżających się terminach planowanych
              spotkań i funkcji mapy powiadamiającej cię o najbliżych miejscach
              spotkań poszukujących towarzystwa.
            </p>
          </div>

          <button
            class="mt-4 bg-primary-100 rounded-lg p-4"
            @click="this.$router.push('sign')"
          >
            Załóż konto/Zaloguj się
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
