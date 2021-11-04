<template>
  <div class="container">
    <RouterLink to="/" class="btn">
      <font-awesome-icon icon="long-arrow-alt-left" class="icon" />
      Back
    </RouterLink>
    <div class="details-container">
      <div class="flag-container">
        <img
          :src="country.flags.svg"
          class="country-flag"
          :alt="country.name + ' flag'"
        />
      </div>
      <div>
        <header>
          <h4>{{ country.name }}</h4>
        </header>
        <div class="country-stats">
          <div class="country-stats-left">
            <p>
              <span>Native Name:</span>
              {{ country.nativeName }}
            </p>
            <p>
              <span>Population:</span>
              {{ country.population }}
            </p>
            <p>
              <span>Region:</span>
              {{ country.region }}
            </p>
            <p>
              <span>Sub Region:</span>
              {{ country.subregion }}
            </p>
            <p>
              <span>Capital:</span>
              {{ country.capital }}
            </p>
          </div>
          <div class="country-stats-right">
            <p>
              <span>Top Level Domain:</span>
              {{ country.topLevelDomain[0] }}
            </p>
            <p>
              <span>Currencies:</span>
              {{ country.currencies.map((currency) => currency.name).join() }}
            </p>
            <p>
              <span>Languages:</span>
              {{ country.languages.map((language) => language.name).join() }}
            </p>
          </div>
        </div>
        <div class="country-borders">
          <p><strong>Border Countries:</strong></p>
          <span v-for="border in country.borders" :key="border">
            <RouterLink to="" class="border-btn">
              {{ border }}
            </RouterLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style scoped>
.container {
  padding: 0rem 2rem;
  margin: 0rem 3rem;
  height: 100vh;
}

@media screen and (min-width: 768px) {
  .container {
    margin: 0 auto;
  }
}

.details-container {
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  gap: 7rem;
  color: var(--text-color);
}

@media screen and (min-width: 768px) {
  .details-container {
    flex-direction: row;
  }
}

.country-flag {
  width: 375px;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 768px) {
  .country-flag {
    width: 560px;
  }
}

h4 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.country-stats {
  display: flex;
  margin-bottom: 3rem;
}

.country-stats-left {
  margin-right: 3rem;
}

p:not(:last-of-type) {
  margin-bottom: 1rem;
}
p > span {
  font-weight: 600;
}

.country-borders {
  display: flex;
  align-items: center;
}
.country-borders span {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: var(--card-bg);
}

.btn {
  padding: 0.5rem 2.2rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: var(--card-bg);
  color: var(--text-color);
}

.icon {
  margin-right: 0.5rem;
}
</style>
