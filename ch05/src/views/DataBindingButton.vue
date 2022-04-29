<template>
  <div>
    <input type="text" v-model="textValue" />
    <button type="button" :disabled="textValue === ''">Click</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      textValue: '',
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
};
</script>
