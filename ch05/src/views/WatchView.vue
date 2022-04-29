<template>
  <div>
    <div>Full Name: {{ fullName }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'ding',
      lastName: 'co',
      fullName: '',
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
  watch: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    },
  },
};
</script>
