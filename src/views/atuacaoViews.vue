<template>
  <div>
    <Header />
    <whatsappbtn />

    <div class="container-contate">

    <div class="titulo-atuacao">
      <div>
       <h1> ÁREAS DE ATUAÇÃO</h1>
      </div>
      <div>
     <h3>   REFERENCIA EM ATUAÇÃO JURIDICA</h3>
      </div>
    </div>

    <div class="tags">
      <div class="atuacaoLine">

        <div class="atuacao">
          <div>
            <svg-icon class="icon" type="mdi" size='50' :path="empresa"></svg-icon>
          </div>
          <div>
            <div>
              <h1>EMPRESARIAL</h1>
            </div>
            <div>
              <p>Normas de direito público </p>
            </div>
          </div>
        </div>
        
        <div class="atuacao">
          <div>
            <svg-icon class="icon" type="mdi" size='50' :path="tributario"></svg-icon>
          </div>
          <div>
            <div>
              <h1>TRIBUTÁRIO</h1>
            </div>
            <div>
              <p>Conjunto das leis reguladoras </p>
            </div>
          </div>
        </div>

      </div>


      <div class="atuacaoLine">
        <div class="atuacao">
          <div>
            <svg-icon class="icon" type="mdi" size='50' :path="imoveis"></svg-icon>
          </div>
          <div>
            <div>
              <h1>IMOBILIÁRIO</h1>
            </div>
            <div>
              <p>Regulamenta vários </p>
            </div>
          </div>
        </div>

        <div class="atuacao">
          <div>
            <svg-icon class="icon" type="mdi" size='50' :path="trabalho"></svg-icon>
          </div>
          <div>
            <div>
              <h1>TRABALHISTA</h1>
            </div>
            <div>
              <p>Conjunto de normas jurídicas que</p>
            </div>
          </div>
        </div>

      </div>

      <div class="atuacaoLine">
        <div class="atuacao">
          <div>
            <svg-icon class="icon" type="mdi" size='50' :path="notbook"></svg-icon>
          </div>
          <div>
            <div>
              <h1>DIGITAL</h1>
            </div>
            <div>
              <p>Conjunto de princípios jurídicos e de normas</p>
            </div>
          </div>
        </div>

        <div class="atuacao">
          <div>
            <svg-icon class="icon" type="mdi" size='50' :path="Algema"></svg-icon>
          </div>
          <div>
            <div>
              <h1>PENAL</h1>
            </div>
            <div>
              <p>Normas de direito público que visam a regulação</p>

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
  <Footer />
  </div>
</template>

<script>

import Footer from '../components/footerGlobal.vue'
import Header from '../components/headerGlobal.vue'
import SvgIcon from '@jamescoyle/vue-icon'
import whatsappbtn from '@/components/btnGlobalWhats.vue'
import { mdiHandcuffs } from '@mdi/js';
import { mdiHandCoinOutline } from '@mdi/js';
import { mdiHomeCityOutline } from '@mdi/js';
import { mdiAccountHardHat } from '@mdi/js';
import { mdiDomain } from '@mdi/js';
import { mdiLaptop } from '@mdi/js';

export default {
  components: {
    SvgIcon,
    whatsappbtn,
    Header,
    Footer,

  },

  data() {
    return {
      Algema: mdiHandcuffs,
      tributario: mdiHandCoinOutline,
      imoveis: mdiHomeCityOutline,
      trabalho: mdiAccountHardHat,
      empresa: mdiDomain,
      notbook: mdiLaptop,
    }
  }
}
</script>

<style>
.container-contate {
  width: 100vw;
}

.tags {
  display: flex;
  flex-direction: center;
  align-items: center;
  flex-direction: column;
}

.atuacaoLine {
  display: flex;
  flex-direction: center;


}
.titulo-atuacao{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:#dcb675;
}

.titulo-atuacao h3{

color: black;
}

.atuacao {
  width: 350px;
  display: flex;
  flex-direction: center;
  align-items: center;
  margin: 50px;
}

.icon {
  margin-right: 25px;

}

.atuacao h1 {
  font-size: 16px;
margin-bottom:15px ;
  color:#dcb675;
}

.atuacao p {
  font-size: 16px;
  
}

@media (max-width: 768px) {

.container-contate {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 70vh;
}

.atuacao {
  width: 150px;

  display: flex;
  flex-direction: center;
  align-items: center;
  margin: 8px;

}

.atuacao h1 {
  font-size: 10px;
margin-bottom:5px ;
  color:#dcb675;
}

.atuacao p {
  font-size: 9px;
  
}

.icon {
  margin-right: 5px;

}

}



</style>