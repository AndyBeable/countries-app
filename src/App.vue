<template>
  <div class="app" :class="isDark ? 'dark' : 'light'">
    <main>
      <AppHeader @toggle="toggleMode" />
      <section>
        <CountryList />
      </section>
    </main>
  </div>
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

  data() {
    return {
      isDark: false,
    };
  },

  methods: {
    toggleMode() {
      this.isDark = !this.isDark;
    },
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

  --bg-colour: var(--light-gray);
  --header-bg: var(--light-gray);
  --card-bg: var(--light-gray);
  --text-color: var(--black);
}

.dark {
  --bg-color: var(--very-dark-blue);
  --header-bg: var(--dark-blue);
  --card-bg: var(--dark-blue);
  --text-color: var(--white);
}

.app {
  background-color: var(--bg-color);
}

html {
  font-family: "Nunito Sans", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
