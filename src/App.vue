<template>
  <div id="app">
    <header>
      <router-link class="logo" to="/">KVavito</router-link>

      <router-link class="favorite" to="/favorite">Избранное</router-link>
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
  height: 40px;
  flex-direction: row;
  align-items: center;
  background: rgb(41, 141, 218);
  color: white;
}

.favorite {
  margin: 0 20px 0 auto;
  text-decoration: none;
}

.logo {
  margin-left: 20px;
}
</style>
