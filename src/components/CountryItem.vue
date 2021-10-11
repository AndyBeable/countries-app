<template>
  <div class="country_card">
    <a href="#">
      <div class="country_card-img">
        <img :src="flag" alt="" />
      </div>
      <div class="country_stats">
        <h2>{{ name }}</h2>
        <p>
          <span>Popluation:</span>
          {{ population }}
        </p>
        <p>
          <span>Region:</span>
          {{ region }}
        </p>
        <p>
          <span>Capital:</span>
          {{ capital }}
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["name", "population", "region", "capital", "flag"],
};
</script>

<style lang="scss" scoped>
.country_card {
  display: flex;
  margin-bottom: 5rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 20rem;
  height: 25rem;

  &-img {
    max-width: 100%;
  }

  & img {
    /* width: 100%; */
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
}

.country_stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem;
  width: 95%;

  & h2 {
    margin-bottom: 1rem;
  }
}

p {
  margin: 3px 0;
}

p span {
  font-weight: 800;
}
</style>
