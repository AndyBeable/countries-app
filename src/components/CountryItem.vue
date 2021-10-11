<template>
  <div class="country__card">
    <a href="#">
      <div class="country__card-img">
        <img :src="flag" alt="" />
      </div>
      <div class="country__card-stats">
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
.country__card {
  display: flex;
  margin-bottom: 5rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  height: 27rem;
  width: 20rem;

  &-img {
    height: 50%;
  }
  & img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 100%;
  }

  &-stats {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 2rem;
    width: 90%;

    & h2 {
      margin-bottom: 1rem;
    }
  }
}

p {
  margin: 3px 0;
}

p span {
  font-weight: 600;
}
</style>
