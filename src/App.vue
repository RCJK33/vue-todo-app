<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    </header>

    <router-view />
  </div>
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {

  .logo {
    margin: 0 2rem 0 0;
  }

}
</style>
