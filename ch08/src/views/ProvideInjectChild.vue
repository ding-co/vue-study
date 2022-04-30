<template>
  <div></div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  inject: ['itemLength'],
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.itemLength)
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>
