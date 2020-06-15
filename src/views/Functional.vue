<template>
  <div>
    <h3>함수형 컴포넌트</h3>
    <p>
      라이브러리 없이 render 함수를 사용하여 작업할 수 있습니다.
    </p>
    <QuantityInput
      title="functional-render"
      :count="count"
      @increase="increase"
      @decrease="decrease"
    ></QuantityInput>
  </div>
</template>

<script>
import QuantityInput from "../components/QuantityInput/functional.js";

export default {
  name: "Functional",
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
