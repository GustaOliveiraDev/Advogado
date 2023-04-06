<template>
    <div class="container-home">

        <div class="banner-pai">

            <div class="imgLogo-container">
                <img class="imgLogo"
                    src="../../public/Advogada-Cristina-Vasconcelos-pbuu9qaqqe82ronozu4uis5taeshlecx22rw5e9sqm.jpg" alt="">
            </div>

            <div class="apresentação">

                <div class="titulo-home">
                    <h4> Cristina Vasconcelos</h4>
                    <h1>Advogada empresarial</h1>
                    Tenho por objetivo oferecer um serviço profissional e atendimento<br>
                    personalizado, com foco no seu encantamento.Atingindo resultados e <br>
                    ultrapassando expectativas.
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
                            <img class="imgcads" src="../../public/Trabalhista.jpg" alt="">
                        </div>
                        <div class="conteudo-cads">
                            <h1>Direito Digital</h1>
                            Trata diretamente do direito digital, que hoje em dia ganha
                            cada vez mais importância na era tecnologia
                        </div>
                    </div>

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

                    <div class="botao">
                        <button>Áreas de atuação</button>
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
}

.banner-pai {
    background: #f1f1f3;
    display: flex;
    justify-content: center;
    align-items: center;
}

.apresentação {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 50px;

    }

.imgLogo {
    display: flex;
    text-align: center;
    border-radius: 15px;
    height: 195px;
    width: 340px;
}


.imgLogo-container {
    padding: 25px;
    display: flex;
    text-align: center;
    justify-content: center;
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
    height: 130px;
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 15px;
    color: #1b2a41;
}

.titulo-home h4 {
    font-size: 20px;
    font-weight: bold;
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
    font-weight: bold;
}

.botao {
    margin-left: 15px;
    padding: 30px;
}

.botao button {
    width: 250px;
    padding: 15px;
    border-radius: 25px;
}

.cadsHome {
    height: 130px;
    width: 500px;
    display: flex;
    margin: 15px;
    justify-content: center;
    border-radius: 15px;
    background: #ffffff;
}

.banner {
    height: 500px;
    width: 800px;
}

@media (max-width: 768px) {

    .banner-pai {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }

    .titulo-home {
        height: 130px;
        width: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
        margin: 15px;
        color: #1b2a41;
    }

    .apresentação {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }



    .cadsHome {
    height: 300px;
    width: 350px;
    display: flex;
    margin: 15px;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
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
    .imgLogo {
        width: 350px;

    }

    .cads-container {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .botao {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 15px;
        padding: 30px;
    }

}
</style>