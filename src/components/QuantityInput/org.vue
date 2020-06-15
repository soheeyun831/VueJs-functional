<template>
  <div class="container">
    <em>{{ title }}</em>
    <div class="button-container">
      <button @click="increase">+</button>
      <span>{{ count }}개</span>
      <button @click="decrease">-</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "org",
  props: ["title", "count", "increase", "decrease"]
};
</script>
