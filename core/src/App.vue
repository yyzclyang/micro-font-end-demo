<template>
  <div id="core-app" class="core-app">
    <div class="header">header</div>
    <div class="main">
      <div class="slide">
        <router-link to="/app1#/">App1</router-link>
        <router-link to="/app2#/">App2</router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/app2#/about">App2/About</router-link>
      </div>
      <div class="content">
        <div id="single-spa"></div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="less">
body {
  margin: 0;
}
.core-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;

  & > .header {
    padding: 30px;
    background-color: pink;
  }
  & > .main {
    flex-grow: 1;
    display: flex;

    & > .slide {
      padding: 40px;
      background-color: skyblue;
      display: flex;
      flex-direction: column;

      a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
    & > .content {
      flex-grow: 1;
    }
  }
}
</style>
