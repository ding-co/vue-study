<template>
  <h2>{{ typeof title }}</h2>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.'
    }
  },
  data() {
    return {}
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
