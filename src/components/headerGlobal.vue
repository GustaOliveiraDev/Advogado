
<template>
  <div class="navbar-container">

    <img class="imgharder"
      src="../../public/direotias/douglascosta_82934045_116411013185365_8270789263511275541_n_widelg.jpg" alt="logo">

    <div class="menuWeb">
      <router-link class="rotas" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="rotas" :to="{ name: 'Atuacao' }">Atuação</router-link>
      <router-link class="rotas" :to="{ name: 'Contato' }">Contato</router-link>
      <router-link class="rotas" :to="{ name: 'SobreNós' }">Sobre nós</router-link>
    </div>

    <div class="menuMobile">
      <toogleMenuVue />
    </div>

  </div>
</template>

<script>
import toogleMenuVue from './toogleMenu.vue'

export default {
  components: {
    toogleMenuVue,
  },


}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar-container {
  width: 100vw;
  display: flex;
  align-items: center;

  background: #4F4F4F;
  margin-bottom: 50px;
}



.menuMobile {
  display: none;
}

.imgharder {
  height: 100px;
  width: 150px;
  margin-left: 25px;
}


@media (max-width: 500px) {

  .imgharder {
    position: absolute;
    right: 20px;
    margin: 0;
    padding: 5px;
    width: 100px;
    height: 70px;
  }

  .navbar-container {
    height: 60px;
    width: 100vw;
  }



}
</style>
