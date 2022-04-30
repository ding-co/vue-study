<template>
  <div>
    <PageTitle :title="undefined" />
  </div>
</template>

<script>
import PageTitle from '../components/PageTitle'
export default {
  components: {
    PageTitle
  },
  data() {
    return {
      title: '동적 페이지 타이틀'
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
