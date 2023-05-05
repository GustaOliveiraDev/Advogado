<template>
  <main class="container">

    <Headerr />

    <div class="whatsapp">
      <div class="butao-whatsapp-online">
        Online Agora
      </div>
      <div class="div-whatsap">


        <button class="butao-whatsapp">
          <svg-icon class="svg-icon" type="mdi" :path="path"></svg-icon>
          Agende seu Horário
        </button>
      </div>
    </div>

    <Apresentacao />

    <Contato />

    <Blogs />

    <Footerr />


  </main>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWhatsapp } from '@mdi/js';
import Headerr from './components/headerGlobal.vue'
import Apresentacao from './components/apresentacaoHome.vue'
import Contato from './components/ContatoHome.vue'
import Blogs from './components/Blogs/BlogsHome.vue'
import Footerr from './components/footerGlobal.vue'

export default {

  name: 'App',
  components: {
    SvgIcon,
    Headerr,
    Apresentacao,
    Contato,
    Blogs,
    Footerr,
  },
  data() {
    return {
      path: mdiWhatsapp,
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background: #f9f9f9;
}

.whatsapp {
  position: fixed;
  z-index: 10000;
  right: 50px;
  bottom: 25px;
}

.butao-whatsapp {

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: #23a455;
  color: white;
  font-weight: bold;
  width: 250px;
  padding: 10px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.svg-icon {
  margin-right: 10px;

}

.butao-whatsapp-online {

  font-size: 10px;
  text-align: center;
  position: fixed;
  right: 60px;
  bottom: 71px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  background: #ca2935;
  color: white;
  font-weight: bold;
  width: 100px;
  padding: 5px;
  border-radius: 25px;

}

@media (max-width: 768px) {
  .whatsapp {
    position: fixed;
    z-index: 10000;
    right: 15px;
    bottom: 15px;
  }

  .butao-whatsapp {

    border: none;
    cursor: pointer;
    background: #23a455;
    color: white;
    font-weight: bold;
    width: 200px;
    padding: 10px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .butao-whatsapp-online {

    font-size: 10px;
    text-align: center;
    position: fixed;
    right: 25px;
    bottom: 59px;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    background: #ca2935;
    color: white;
    font-weight: bold;
    width: 90px;
    padding: 5px;
    border-radius: 25px;

  }


}
</style>
