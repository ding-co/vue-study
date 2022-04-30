<template>
  <div>
    <h2>{{ $translate('ko.hi') }}</h2>
    <h2>{{ i18n.ko.hi }}</h2>
  </div>
</template>

<script>
export default {
  inject: ['i18n'],
  components: {},
  data() {
    return {
      sampleData: ''
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.i18n)
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {}
}
</script>
