<template>
  <div class="container-contate">
    <Header />

    <div class="whatsapp">
      <div class="butao-whatsapp-online">
        Online Agora
      </div>
      <div class="div-whatsap">


        <button class="butao-whatsapp">
          <svg-icon class="icon" type="mdi" size='30' :path="path"></svg-icon>
          Agende seu Horário
        </button>
      </div>
    </div>

    <div class="tags">
      <div class="atuacaoLine">
      <div class="atuacao">
        <div>
          <svg-icon class="icon" type="mdi" size={1} :path="Algema"></svg-icon>
        </div>
        <div>
          <div>
            <h1>BANCÁRIO & FINANCEIRO</h1>
          </div>
          <div>
           <p>Normas de direito público que visam a regulação</p>
          </div>
        </div>
      </div>

      <div class="atuacao">
        <div>
          <svg-icon class="icon" type="mdi" size={1} :path="Algema"></svg-icon>
        </div>
        <div>
          <div>
            <h1>BANCÁRIO & FINANCEIRO</h1>
          </div>
          <div>
           <p>Normas de direito público que visam a regulação</p>
          </div>
        </div>
      </div>

    </div>


    <div class="atuacaoLine">
      <div class="atuacao">
        <div>
          <svg-icon class="icon" type="mdi" size={1} :path="Algema"></svg-icon>
        </div>
        <div>
          <div>
            <h1>BANCÁRIO & FINANCEIRO</h1>
          </div>
          <div>
           <p>Normas de direito público que visam a regulação</p>
          </div>
        </div>
      </div>

      <div class="atuacao">
        <div>
          <svg-icon class="icon" type="mdi" size={1} :path="Algema"></svg-icon>
        </div>
        <div>
          <div>
            <h1>BANCÁRIO & FINANCEIRO</h1>
          </div>
          <div>
           <p>Normas de direito público que visam a regulação</p>
          </div>
        </div>
      </div>

    </div>

    <div class="atuacaoLine">
      <div class="atuacao">
        <div>
          <svg-icon class="icon" type="mdi" size={1} :path="Algema"></svg-icon>
        </div>
        <div>
          <div>
            <h1>BANCÁRIO & FINANCEIRO</h1>
          </div>
          <div>
           <p>Normas de direito público que visam a regulação</p>
          </div>
        </div>
      </div>

      <div class="atuacao">
        <div>
          <svg-icon class="icon" type="mdi" size={1} :path="Algema"></svg-icon>
        </div>
        <div>
          <div>
            <h1>BANCÁRIO & FINANCEIRO</h1>
          </div>
          <div>
          <p>Normas de direito público que visam a regulação</p>
          
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
import { mdiWhatsapp } from '@mdi/js';
import { mdiHandcuffs } from '@mdi/js';

export default {
  components: {
    SvgIcon,
    Header,
    Footer,

  },

  data() {
    return {
      path: mdiWhatsapp,
      Algema: mdiHandcuffs,
    }
  }
}
</script>

<style>
.container-contate {
  width: 100vw;
}

.tags{
  display: flex;
  flex-direction: center;
  align-items: center;
  flex-direction: column;
}

.atuacaoLine {
  display: flex;
  flex-direction: center;

 
}

.atuacao {
  width: 200px;
  display: flex;
  flex-direction: center;
  align-items: center;
  margin: 30px;
}

.icon {
 margin-right: 25px;
}

.atuacao h1 {
  font-size: 16px;
  text-align: center;
}

.atuacao p {
  font-size: 16px;
text-align: center;
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


}</style>