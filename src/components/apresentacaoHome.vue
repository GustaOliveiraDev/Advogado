<template>
    <div class="container-home">

        <div class="img-logo-container">
            <img class="imgLogo" src="../../public/direotias/Advogada-Cristina.jpg" alt="">
        </div>


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

            <hr class="hr1">

            <div class="cads-container">

                <div class="cadsHome">
                    <div class="paicadsImg">
                        <img class="imgcads" src="../../public/direotias/direito-trabalhista.jpg" alt="">
                    </div>

                    <div class="conteudo-cads">
                        <h1>Direito Trabalhista</h1>
                        Serviços jurídicos para empresas nas diversas situações
                        trabalhistas, como contratação e demissão de funcionários.
                    </div>
                </div>

                <div class="cadsHome">
                    <div class="paicadsImg">
                        <img class="imgcads" src="../../public/direotias/Servico-digital.jpg" alt="">
                    </div>
                    <div class="conteudo-cads">
                        <h1>Direito Digital</h1>
                        Trata diretamente do direito digital, que hoje em dia ganha
                        cada vez mais importância na era tecnologia
                    </div>
                </div>

                <div class="cadsHome">
                    <div class="paicadsImg">
                        <img class="imgcads" src="../../public/direotias/direito-empresarial.jpg" alt="">
                    </div>
                    <div class="conteudo-cads">
                        <h1>Direito Empresarial</h1>
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

.paicadsImg {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 10px;


}

.imgcads {
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 100px;
    height: 100px;
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
    padding: 15px;
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
    border-radius: 25px;
    background: #f9f9f9;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    }

    .img-logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 0px 50px 0px;
        background: #dcb675;
        height: 510px;
        width: 350px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .imgLogo {
        margin: 0px;
        height: 500px;
        width: 350px;
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