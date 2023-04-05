<template>
  <main class="container">

    <HeaderMenu/>

    <BannerHome/>

    <DiretoriasHome/>

    <DuvidasFreguentes/>

    <ContatoHome />

    <FooterMenu/>

  </main>
</template>

<script>
import HeaderMenu from './components/HeaderMenu'
import BannerHome from './components/BannerHome'
import DiretoriasHome from './components/Diretorias/DiretoriasHome'
import ContatoHome from './components/ContatoHome'
import DuvidasFreguentes from './components/DuvidasFreguentes'
import FooterMenu from './components/FooterMenu'
export default {
  name: 'App',
  components: {
    HeaderMenu,
    BannerHome,
    DiretoriasHome,
    FooterMenu,
    ContatoHome,
    DuvidasFreguentes,
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
  background: black;
}


a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
