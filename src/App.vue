<template>
  <div id="app">
    <header>
      <router-link to="/">KVavito</router-link>

      <router-link class="favorite" to="/favorite">Favorite</router-link>
    </header>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

header {
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: greenyellow;
}

.favorite {
  margin: 0 20px 0 auto;
  text-decoration: none;
  color: #2c3e50;
}

h1 {
  font-size: 24px;
}
</style>
