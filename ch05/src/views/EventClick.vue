<template>
  <div>
    <button type="button" @click="increaseCounter">Add 1</button>
    <p>The counter is : {{ counter }}</p>
    <br />
    <button type="button" @click="setCount(7)">Set 7</button>
    <p>The counter is : {{ counter }}</p>
    <br />
    <button type="button" @click="one(), two()">Click</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      counter: 0,
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
  methods: {
    increaseCounter() {
      this.counter += 1;
    },
    setCount(counter) {
      this.counter = counter;
    },
    one() {
      alert('one');
    },
    two() {
      alert('two');
    },
  },
};
</script>
