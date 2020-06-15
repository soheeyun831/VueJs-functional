<template>
  <div>
    <h3>제 생각</h3>
    <p>
      제 생각으로 만든 함수형 컴포넌트..
    </p>
    <QuantityInput title="Vue" :initial-value="3"></QuantityInput>
  </div>
</template>

<script>
import QuantityInput from "@/components/QuantityInput/StoreComponent.vue";

export default {
  name: "StoreComponent",
  components: {
    QuantityInput
  }
};
</script>

<style scoped></style>
