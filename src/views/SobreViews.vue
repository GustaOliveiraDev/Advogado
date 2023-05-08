<template>
    <div class="container-escritorio">
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

        <div class="sobre">
            <div class="titulo">
                <div><h1>Sobre nós</h1> </div>
                <div>
                  
                    Para com eles. Contamos com excelentes profissionais
                    preparados para a administração da justiça
                    e assegurar a defesa dos interesses das partes em juízo.
                </div>
            </div>

            <div class="misao">
                <div> <h1>Missões</h1></div>
                <div>
                    Construir relação de parceria, confiança e credibilidade
                    com nossos clientes, atuando com ética, transparência
                    e responsabilidade.
                </div>
            </div>

            <div class="misao">
                <div> <h1>Valores</h1></div>
                <div>
                    Construir relação de parceria, confiança e credibilidade
                    com nossos clientes, atuando com ética, transparência
                    e responsabilidade.
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

export default {
    components: {
        SvgIcon,
        Header,
        Footer,
    },

    data() {
        return {
            path: mdiWhatsapp,
        }
    }
}
</script>

<style>
.container-escritorio {
    width: 100vw;
 

}
.sobre{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vh;
}
.titulo{
    text-align: center;
    width: 500px;
    font-size: 16px;
    margin-bottom: 50px;
}
.titulo h1{
    text-align: center;
    width: 500px;
    font-size: 35px;
 
}

.misao{
    width: 500px;
    text-align: center;
    margin-bottom: 50px;
}

.misao h1{
    text-align: center;
    width: 500px;
    font-size: 35px;
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