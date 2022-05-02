<template>
  <div>
    <HeaderLayout />
    <router-view />
    <FooterLayout />
  </div>
</template>

<script>
import HeaderLayout from './layouts/HeaderLayout.vue'
import FooterLayout from './layouts/FooterLayout.vue'
export default {
  components: { HeaderLayout, FooterLayout },
  data() {
    return {
      sampleData: ''
    }
  },
  computed: {
    user() {
      return this.$store.state.user
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
