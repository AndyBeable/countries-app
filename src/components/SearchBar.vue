<template>
  <div class="search">
    <div class="search__bar">
      <font-awesome-icon :icon="['fas', 'search']" class="search__bar-icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        v-model="query"
        @keyup="onTyped"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onTyped() {
      this.$emit("search", this.query);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  background-color: var(--header-bg);
  border-radius: 3px;

  &__bar {
    display: flex;
    align-items: center;
    width: 30rem;
    min-width: 20rem;
    padding: 1rem 2rem;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

    &-icon {
      color: var(--gray);
    }

    & input {
      border: none;
      margin-left: 5px;
      cursor: text;
      font-size: 1rem;
      width: 100%;
      height: 1.5rem;
      background-color: var(--header-bg);
    }
  }

  ::placeholder {
    color: var(--gray);
    letter-spacing: 0.5px;
  }
}
</style>
