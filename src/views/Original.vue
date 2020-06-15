<template>
  <div>
    <h3>Vue</h3>
    <p>
      대부분 Vue.js를 사용하는 방법입니다.
    </p>
    <QuantityInput
      title="Vue"
      :count="count"
      :increase="increase"
      :decrease="decrease"
    ></QuantityInput>
  </div>
</template>

<script>
import QuantityInput from "@/components/QuantityInput/org.vue";

export default {
  name: "Original",
  components: {
    QuantityInput
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increase() {
      this.count++;
    },
    decrease() {
      this.count = this.count > 0 ? this.count - 1 : 0;
    }
  }
};
</script>
