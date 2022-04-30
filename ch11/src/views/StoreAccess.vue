<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Cart Count: {{ cartCount }}</p>
    <button type="button" @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    count() {
      return this.$store.state.count
    },
    cartCount() {
      return this.$store.getters.cartCount
    }
  },
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
    increment() {
      this.$store.commit('increment')
    }
  }
}
</script>
