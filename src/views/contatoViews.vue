<template>
    <div class="container-contate">
        <Header />

        <whatsappbtn />

      <div class="titulo-contatos">
      <div>
       <h1> MANDE UMA MENSAGEM </h1>
      </div>
      <div>
     <h3> SERÁ UM PRAZER TE ATENDER</h3>
      </div>
    </div>


        <form class="contate" action="">

            <input  class="input" type="text" placeholder="Nome:">

            <input class="input" type="text" placeholder="Email:">

            <input class="input" type="text" placeholder="Telefone:">

            <textarea class="input" placeholder="Descrição"></textarea>

            <button type="submit" class="butaoEnviar" @click.prevent="submitForm">Enviar Mensagem</button>

        </form>

        <Contato />
        <Footer />
    </div>
</template>

<script>

import Footer from '../components/footerGlobal.vue'
import Header from '../components/headerGlobal.vue'
import Contato from '@/components/contatoViewsComponentes.vue';
import whatsappbtn from '@/components/btnGlobalWhats.vue';
// import firebase from "firebase/app";

export default {
    components: {
      whatsappbtn,
        Header,
        Footer,
        Contato
    },
    data() {
    return {
      formData: {
        name: '',
        // email: '',
        // telefone: '',
        // descricao: '',
      }
    }
  },
  methods: {
    // submitForm() {
    //   firebase.database().ref("https://mensagens-adv-default-rtdb.firebaseio.com").push(this.data);
    // }
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

.titulo-contatos{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  flex-direction: column;
  color:#dcb675 ;
}

.titulo-contatos h3{
color: black;
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


</style>