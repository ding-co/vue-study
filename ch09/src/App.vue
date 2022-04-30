<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/calculator">Calculator</router-link> |
    <router-link to="/compositionapi">Composition API</router-link> |
    <router-link to="/compositionapi2">Composition API 2</router-link> |
    <router-link to="/compositionapi3">Composition API 3</router-link> |
    <router-link to="/compositionapi4">Composition API 4</router-link> |
    <router-link to="/compositionapi5">Composition API 5</router-link> |
    <router-link to="/mixins">Mixins</router-link> |
    <router-link to="/customdirectives">Custom Directives</router-link> |
    <router-link to="/plugins">Plugins</router-link> |
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
