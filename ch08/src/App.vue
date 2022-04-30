<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/nestedcomponent">Nested Component</router-link> |
    <router-link to="/parent">Parent Component</router-link> |
    <router-link to="/parent2">Parent Component 2</router-link> |
    <router-link to="/parent3">Parent Component 3</router-link> |
    <router-link to="/parent4">Parent Component 4</router-link> |
    <router-link to="/parent5">Parent Component 5</router-link> |
    <router-link to="/slotmodal">Slot Modal</router-link> |
    <router-link to="/provideinject">Provide Inject</router-link> |
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
