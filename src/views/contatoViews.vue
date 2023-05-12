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


        <!-- <form class="contate">

            <input class="input" type="text" placeholder="Nome:" v-model="Formdata.nome">

            <input class="input" type="text" placeholder="Email:" v-model="Formdata.email">

            <input class="input" type="text" placeholder="Telefone:" v-model="Formdata.telefone">

            <textarea class="input" placeholder="Descrição" v-model="Formdata.descricao"></textarea>

            <button type="submit" class="butaoEnviar" @click.prevent="enviarEmail()">Enviar Mensagem</button>

        </form> -->

        <Contato />
        <Footer />
    </div>
</template>

<script>

import Footer from '../components/footerGlobal.vue'
import Header from '../components/headerGlobal.vue'
import Contato from '@/components/contatoViewsComponentes.vue';
import whatsappbtn from '@/components/btnGlobalWhats.vue';
// import { collection, addDoc } from "firebase/firestore"
// import db from '../firebase/index'

export default {
    components: {
        whatsappbtn,
        Header,
        Footer,
        Contato,
    },

    data() {

        return {
            Formdata: {
                nome: '',
                email: '',
                telefone: '',
                descricao: '',
            }
        }
    },

    methods: {
        // async submitForm() {

        //     const colRef = collection(db, "mensagens-producao")

        //     const docRef = await addDoc(colRef, this.Formdata)
        //     console.log('Document was created with ID:', docRef.id)

        //     window.location.href = `mailto:?body=Olá, entrei no endereço ${window.location.origin
        //         } e econtrei a norma ${TipoNormativa[this.normativaStore.normativaLerMais.tipoNormativa]
        //         } nº ${this.normativaStore.normativaLerMais.numero} de ${this.normativaStore.normativaLerMais.ano
        //         } - MT, gostaria de compartilha-la com você, para acessá-lá clique no link: ${window.location.href
        //         }`;

        // },


    }

}
</script>

<style>
.container-contate {
    width: 100vw;
}

.contate {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.titulo-contatos {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    flex-direction: column;
    color: #dcb675;
}

.titulo-contatos h3 {
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

@media (max-width: 768px) {

    .titulo-contatos {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        text-align: center;
        margin: 0px, 0px, 50px, 0px;
    }

    .input {
        width: 300px;

    }

    .butaoEnviar {
        width: 300px;
    }

}
</style>