<template>
  <div>
    <composition-api-5-child />
  </div>
</template>

<script>
import { provide } from 'vue'
import CompositionApi5Child from './CompositionApi5Child.vue'
export default {
  components: { CompositionApi5Child },
  setup() {
    provide('title', 'Vue.js 프로젝트')
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
