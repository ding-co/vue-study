<template>
  <div>
    <input type="text" v-focus v-pin="position" />
  </div>
</template>

<script>
export default {
  directives: {
    pin: {
      mounted(el, binding) {
        el.style.position = 'fixed'
        el.style.top = binding.value.top + 'px'
        el.style.left = binding.value.left + 'px'
      }
    }
  },
  components: {},
  data() {
    return {
      position: { top: 50, left: 100 }
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
