<template>
    <div>
        <div class="container-home">

            <div class="img-logo-container">
                <img class="imgLogo"
                    src="../../public/direotias/douglascosta_82934045_116411013185365_8270789263511275541_n_widelg.jpg"
                    alt="">
            </div>


            <div class="apresentação">

                <div class="titulo-home">
                    <h1> Cristina Vasconcelos</h1>
                    <h2>Advogada empresarial</h2>
                    <h3>
                        Tenho por objetivo oferecer um serviço profissional e atendimento
                        personalizado, com foco no seu encantamento.Atingindo resultados e
                        ultrapassando expectativas.
                    </h3>
                </div>

                <hr class="hr1">
                <Cards />
            </div>
        </div>
        
    </div>
</template>

<script>
import Cards from '@/components/cadsApresentacao.vue'
export default {
    components: {
        Cards,
    },
}
</script>

<style>
.container-home {
    width: 100vw;
    margin-bottom: 50px;
    background: #f9f9f9;
    display: flex;
    justify-content: center;
    align-items: center;
}

.apresentação {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 700px;
    width: 600px;
}

.img-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 100px;
    background: #dcb675;
    height: 710px;
    width: 490px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}


.imgLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
    width: 490px;

}

.hr1 {
    border: 2px solid #dcb675;
    width: 100%;
}


.titulo-home {
    height: 140px;
    width: 560px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 15px;
    color: #1b2a41;
}

.titulo-home h1 {
    font-size: 16px;
    margin-top: 15px;
}

.titulo-home h2 {
    font-size: 36px;
    margin: 5px 0px 5px 0px;
}

.titulo-home h3 {
    font-size: 16px;
    margin-bottom: 50px;
}

.banner {
    height: 500px;
    width: 800px;
}

@media (max-width: 768px) {

    .container-home {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .titulo-home {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        width: 350px;
        margin-bottom: 50px;
        color: #1b2a41;
    }

    .apresentação {
        height: 1100px;
        width: 350px;
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
      
    }

    .img-logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #dcb675;
        height: 510px;
        width: 350px;
        margin: 0;
 
        margin-bottom: 30px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .imgLogo {
        height: 500px;
        width: 350px;
    }

}
</style>