<template>
  <article class="card">
    <a href="#">
      <header>
        <img
          :src="country.flags.svg"
          :alt="country.name + ' flag'"
          class="card__image"
        />
      </header>
      <footer class="card__footer">
        <h2 class="card__title">{{ country.name.common }}</h2>
        <dl class="card__stats">
          <div>
            <dt>Popluation:</dt>
            <dd>{{ country.population | formatNumber }}</dd>
          </div>
          <div>
            <dt>Region:</dt>
            <dd>{{ country.region }}</dd>
          </div>
          <div>
            <dt>Capital:</dt>
            <dd>{{ country.capital[0] }}</dd>
          </div>
        </dl>
      </footer>
    </a>
  </article>
</template>

<script>
export default {
  name: "CountryItem",
  props: ["country"],
  filters: {
    formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  margin-bottom: 5rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 27rem;
  width: 20rem;
}

.card__image {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  max-width: 100%;
  height: auto;
}

.card__stats {
  dd,
  dt {
    display: inline-block;
  }

  dd {
    margin-bottom: 6px;
    margin-inline-start: 5px;
  }

  dt {
    font-weight: 600;
  }
}

.card__title {
  margin-bottom: 1rem;
}

.card__footer {
  padding: 1rem 2rem;
}
</style>
