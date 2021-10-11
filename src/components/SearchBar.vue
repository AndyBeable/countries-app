<template>
  <div class="search-bar">
    <font-awesome-icon icon="search" class="icon" />
    <img src="" alt="" />
    <input type="text" placeholder="Search for a country..." />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
input {
  width: 30%;
  margin-left: 6rem;
  margin-bottom: 3rem;
  padding: 1rem;
  border: none;
  background-color: #fff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

input::placeholder {
  padding-left: 2rem;
  color: var(--gray);
}

.search-bar {
  position: relative;
}

.icon {
  position: absolute;
  top: 15px;
  left: 110px;
  color: var(--gray);
}
</style>
