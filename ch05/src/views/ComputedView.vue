<template>
  <div>
    <h1>Full Name: {{ fullName }}</h1>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'ding',
      lastName: 'co',
    };
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  methods: {},
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
</script>
