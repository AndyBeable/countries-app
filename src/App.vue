<template>
  <main>
    <AppHeader />

    <section>
      <CountryList />
    </section>
  </main>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import CountryList from "./components/CountryList.vue";

export default {
  name: "App",

  components: {
    AppHeader,
    CountryList,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

:root {
  --dark-blue: hsl(209, 23%, 22%);
  --very-dark-blue: hsl(207, 26%, 17%);
  --black: hsl(200, 15%, 8%);
  --gray: hsl(0, 0%, 52%);
  --light-gray: hsl(0, 0%, 98%);
  --white: hsl(0, 0%, 100%);
}

html {
  font-family: "Nunito Sans", sans-serif;
}
</style>
