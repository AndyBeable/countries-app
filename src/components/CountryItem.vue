<template>
  <div class="country-wrapper">
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <h2>{{ name }}</h2>
      <p>{{ population }}</p>
      <p>{{ region }}</p>
      <p>{{ capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["flag", "name", "population", "region", "capital"],
};
</script>
