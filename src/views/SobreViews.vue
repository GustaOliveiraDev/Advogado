<template>
    <div class="container-escritorio">
        <Header />
        <whatsappbtn />

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

import whatsappbtn from '@/components/btnGlobalWhats.vue'

export default {
    components: {
  
        whatsappbtn,
        Header,
        Footer,
    },


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

</style>