<template>
    <div class="container-contate">
        <Header />

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


        <form class="contate" action="">

            <input class="input" type="text" placeholder="Nome:">
            <input class="input" type="text" placeholder="Email:">
            <input class="input" type="text" placeholder="Telefone:">
            <textarea class="input" placeholder="Descrição"></textarea>

            <button type="submit" class="butaoEnviar">Enviar Mensagem</button>

        </form>

        <Contato />



        <Footer />
    </div>
</template>

<script>

import Footer from '../components/footerGlobal.vue'
import Header from '../components/headerGlobal.vue'
import Contato from '@/components/contatoViewsComponentes.vue';
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWhatsapp } from '@mdi/js';

export default {
    components: {
        SvgIcon,
        Header,
        Footer,
        Contato
    },

    data() {
      return {
        path: mdiWhatsapp,
      }
    }
}
</script>

<style>
.container-contate {
    width: 100vw;
}

.contate {
 
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.input {
    width: 350px;
    padding: 15px;
    border-radius: 25px;
    margin-bottom: 15px;
    border: none;
    outline: none;
}

.butaoEnviar {
    width: 350px;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px;
    border-radius: 25px;
    background: #dcb675;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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