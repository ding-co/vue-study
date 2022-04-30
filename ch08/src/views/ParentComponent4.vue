<template>
  <div>
    <child-component-4 @send-message="sendMessage" />
  </div>
</template>

<script>
import ChildComponent4 from './ChildComponent4.vue'
export default {
  components: { ChildComponent4 },
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
    sendMessage(data) {
      console.log(data)
    }
  }
}
</script>
