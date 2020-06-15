<template>
  <div class="container">
    <em>{{ title }}</em>
    <div class="button-container">
      <button v-on:click="increaseCount">+</button>
      <span>{{ count }}개</span>
      <button v-on:click="decreaseCount">-</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "StoreComponent",
  props: {
    title: {
      type: String,
      require: true,
      default: "타이틀"
    },
    initialValue: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapState(["count"])
  },
  created() {
    this.$store.dispatch("setCount", this.initialValue);
  },
  methods: {
    ...mapActions(["increaseCount"]),
    ...mapActions(["decreaseCount"])
  }
};
</script>

<style scoped></style>
