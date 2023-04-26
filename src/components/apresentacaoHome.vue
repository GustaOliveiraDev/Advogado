<template>
    <div class="container-home">

            <img class="imgLogo"
                src="../../public/direotias/fuxeassociados.adv.br-advocacia-empresarial-slider-leilao-de-imoveis.png" alt="">


            <div class="apresentação">

                <div class="titulo-home">
                    <h1> Cristina Vasconcelos</h1>
                    <h2>Advogada empresarial</h2>
                   <h3>
                    Tenho por objetivo oferecer um serviço profissional e atendimento<br>
                    personalizado, com foco no seu encantamento.Atingindo resultados e <br>
                    ultrapassando expectativas.
                   </h3>
                </div>

                <div class="cads-container">

                    <div class="cadsHome">
                        <div class="paicadsImg">
                            <img class="imgcads" src="../../public/Trabalhista.jpg" alt="">
                        </div>

                        <div class="conteudo-cads">
                            <h1>Direito Trabalhista</h1>
                            Serviços jurídicos para empresas nas diversas situações
                            trabalhistas, como contratação e demissão de funcionários.
                        </div>
                    </div>

                    <div class="cadsHome">
                        <div class="paicadsImg">
                            <img class="imgcads" src="../../public/direotias/Servico-digital-pbpi6kd4y9t1mh0pkn89rjpjefvltdtbhxjq8h41ps.jpg" alt="">
                        </div>
                        <div class="conteudo-cads">
                            <h1>Direito Digital</h1>
                            Trata diretamente do direito digital, que hoje em dia ganha
                            cada vez mais importância na era tecnologia
                        </div>
                    </div>

                    <div class="cadsHome">
                        <div class="paicadsImg">
                            <img class="imgcads" src="../../public/direotias/Servico-contratos-pbpi6wl1f49rteiylaif5ymj4g7dlg5tvm11h2lxgw.jpg" alt="">
                        </div>
                        <div class="conteudo-cads">
                            <h1>Direito Trabalhista</h1>
                            Serviços jurídicos para empresas nas diversas situações
                            trabalhistas, como contratação e demissão de funcionários.
                        </div>
                    </div>



                </div>
            </div>
     
    </div>
</template>

<script>
export default {

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
    margin-left: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 700px;
    width: 600px;
}


.imgLogo {
    display: flex;
    text-align: center;
    justify-content: center;
    border-radius: 15px;
    margin-right: 100px;
    background-color: #4F4F4F;
    padding: 25px;
    height: 700px;
    width: 490px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.paicadsImg {
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 10px;
    border-radius: 15px;
}

.imgcads {
    border-radius: 15px;
}


.titulo-home {
    height: 140px;
    width: 560px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 15px;
    color: #1b2a41;
    margin-bottom: 35px;
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

.cads-container {

    display: flex;
    justify-content: space-between;
    flex-direction: column;
}


.conteudo-cads {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
    padding: 5px;
}

.conteudo-cads h1 {
    font-size: 16px;
}


.cadsHome {
    height: 140px;
    width: 560px;
    display: flex;
    margin-top: 30px;
    justify-content: center;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #f9f9f9;
}

.banner {
    height: 500px;
    width: 800px;
}

@media (max-width: 768px) {

    .container-home {
        margin-bottom: 50px;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .titulo-home {
        height: 130px;
        width: 300px;
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        margin: 50px 0px 50px 0px;
        color: #1b2a41;
    }

    .apresentação {
        margin: 0px;
       height: 1100px;
        width: 350px;
        display: flex;
        align-items: center;
        flex-direction: column;

        /* display: none; */
    }
    
    .imgLogo {
        margin: 0px;
        height: 500px;
        width: 350px;
        margin-bottom: 50px;
        margin-right: 0px;

    }
    .cadsHome {
        height: 250px;
        width: 300px;
        display: flex;
        margin: 15px;
        justify-content: center;
        flex-direction: column;
        background: #ffffff;
    }

    .conteudo-cads {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        font-size: 14px;
        padding: 5px;

    }


    .cads-container {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

  

}
</style>