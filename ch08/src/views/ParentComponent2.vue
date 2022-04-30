<template>
  <div>
    <child-component-2 ref="child_component2" />
  </div>
</template>

<script>
import ChildComponent2 from './ChildComponent2.vue'
export default {
  components: { ChildComponent2 },
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$refs.child_component2.callFromParent()
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>
