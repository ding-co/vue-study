<template>
  <div>
    <button type="button" @click="checkChild">자식 컴포넌트 데이터 조회</button>
    <child-component-5 ref="child_component5" />
  </div>
</template>

<script>
import ChildComponent5 from './ChildComponent5.vue'
export default {
  components: { ChildComponent5 },
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
    checkChild() {
      alert(this.msg)
    }
  },
  computed: {
    msg() {
      return this.$refs.child_component5.msg
    }
  }
}
</script>
