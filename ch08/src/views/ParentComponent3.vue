<template>
  <div>
    <child-component-3 ref="child_component3" />
    <button type="button" @click="changeChildData">Change Child Data</button>
  </div>
</template>

<script>
import ChildComponent3 from './ChildComponent3.vue'
export default {
  components: { ChildComponent3 },
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {
    changeChildData() {
      this.$refs.child_component3.msg = '부모 컴포넌트가 변경한 데이터'
    }
  }
}
</script>
