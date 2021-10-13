<template>
  <header class="header">
    <h1 class="header__title">Where in the world?</h1>
    <div class="div">
      <button @click="$emit('toggleMode')">
        <font-awesome-icon :icon="['fas', 'moon']" class="search__bar-icon" />
        Dark mode
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  background-color: var(--white);
  width: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
}

button {
  border: none;
  background-color: inherit;
  cursor: pointer;
}
</style>
