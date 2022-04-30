<template>
  <div>
    <child-component ref="child_component" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {
  components: { ChildComponent },
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    this.$refs.child_component.$refs.btn.click()
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>
