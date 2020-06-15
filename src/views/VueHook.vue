<template>
  <div>
    <h3>Vue-hook</h3>
    <p>
      vue-hook library 를 사용하였습니다.<br />
      리액트처럼 render, 가벼운 state 관리를 할 수 있습니다.
    </p>
    <QuantityInput title="vue-hook" :initialValue="0"></QuantityInput>
  </div>
</template>

<script>
import QuantityInput from "../components/QuantityInput/vue-hook.js";

export default {
  name: "Functional",
  components: {
    QuantityInput
  }
};
</script>
