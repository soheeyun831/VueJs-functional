<template>
  <div>
    <h3>단일 모드 컴포넌트</h3>
    <p>
      단일 파일 컴포넌트로 작성된 컴포넌트는 읽기 쉽고<br />
      다른 컴포넌트와 같이 일관성을 유지 할 수 있습니다.<br />
      functional 키워드로 render context 객체에 접근할 수 있습니다.
    </p>
    <QuantityInput
      title="functional-component"
      :count="count"
      @click="updateCounter"
    ></QuantityInput>
  </div>
</template>

<script>
import QuantityInput from "../components/QuantityInput/functionalComponent.vue";

export default {
  name: "FunctionalVue",
  components: {
    QuantityInput
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    updateCounter(dir) {
      if (dir === -1 && this.count === 0) {
        return;
      }
      this.count = this.count + dir;
    }
  }
};
</script>
