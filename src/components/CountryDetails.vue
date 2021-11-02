<template>
  <div>{{ country.name }}</div>
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

<style></style>
