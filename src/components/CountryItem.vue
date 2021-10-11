<template>
  <div class="country-card">
    <a href="#">
      <div>
        <img :src="flag" alt="" />
      </div>
      <div class="country-stats">
        <h2>{{ name }}</h2>
        <p>{{ population }}</p>
        <p>{{ region }}</p>
        <p>{{ capital }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["name", "population", "region", "capital", "flag"],
};
</script>

<style scoped>
.country-card {
  display: flex;
  margin-bottom: 5rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 15px;
}

.country-stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  width: 100%;
}
</style>
