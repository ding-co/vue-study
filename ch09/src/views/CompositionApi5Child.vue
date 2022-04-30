<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  components: {},
  setup() {
    const title = inject('title')
    return { title }
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
  methods: {}
}
</script>
