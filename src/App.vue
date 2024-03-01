<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/scss/main.scss';

html, body {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f8f8f8;
  height: 100%;
}
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 900

</style>
