<template>
  <select v-model="selectedRegion" @change="selectRegion">
    <option value="">Filter by Region</option>
    <option>Africa</option>
    <option>Americas</option>
    <option>Asia</option>
    <option>Europe</option>
    <option>Oceania</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedRegion: "",
    };
  },
  methods: {
    selectRegion() {
      this.$emit("filter", this.selectedRegion);
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
}
</style>
