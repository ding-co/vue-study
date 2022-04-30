<template>
  <div>
    <provide-inject-child />
  </div>
</template>

<script>
import ProvideInjectChild from './ProvideInjectChild.vue'
export default {
  components: { ProvideInjectChild },
  data() {
    return {
      items: ['A', 'B']
    }
  },
  provide() {
    return {
      itemLength: this.items.length
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
  methods: {}
}
</script>
