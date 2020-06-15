<template functional>
  <div class="container">
    <em>{{ props.title }}</em>
    <div class="button-container">
      <button v-on:click="listeners.click(1)">+</button>
      <span>{{ props.count }}개</span>
      <button v-on:click="listeners.click(-1)">-</button>
    </div>
  </div>
</template>

<script>
// 단일 파일 컴포넌트
export default {
  name: "functionalVue",
  props: {
    title: {
      require: true,
      type: String
    },
    count: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped></style>
