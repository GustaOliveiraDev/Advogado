<template>
  <main class="container">

    <HeaderMenu />
    <BannerHome />
    <ContatoHome />
    <DiretoriasHome />
    <FooterMenu />

  </main>
</template>

<script>
import HeaderMenu from './components/HeaderMenu'
import BannerHome from './components/BannerHome'
import ContatoHome from './components/ContatoHome.vue'
import DiretoriasHome from './components/Diretorias/DiretoriasHome'


import FooterMenu from './components/FooterMenu'

export default {
  name: 'App',
  components: {

    HeaderMenu,
    BannerHome,
    ContatoHome,
    DiretoriasHome,
    FooterMenu,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #f1f1f3;
}
</style>
