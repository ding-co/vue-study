<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" @keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="num2" @keyup="plusNumbers" />
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
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
    plusNumbers() {
      this.result = parseInt(this.num1) + parseInt(this.num2)
    }
  }
}
</script>
