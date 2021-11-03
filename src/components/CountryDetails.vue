<template>
  <div class="details-container">
    <div class="flag-container">
      <img :src="country.flags.svg" class="country-flag" />
    </div>
    <div>
      <header>
        <h4>{{ country.name }}</h4>
      </header>
      <div class="country-stats">
        <div>
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
        <div>
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
.details-container {
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  align-items: center;
  gap: 5rem;
}

.country-flag {
  width: 560px;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}

h4 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.country-stats {
  display: flex;
}

p:not(:last-of-type) {
  margin-bottom: 1rem;
}
p > span {
  font-weight: 600;
}
</style>
