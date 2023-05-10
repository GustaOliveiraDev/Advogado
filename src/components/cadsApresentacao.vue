<template>
    <div class="cads-container">

        <div class="cadsHome">
            <div class="paicadsImg">
                <img class="imgcads"
                    src="../../public/direotias/douglascosta_82934045_116411013185365_8270789263511275541_n_widelg.jpg"
                    alt="">
            </div>

            <div class="conteudo-cads">
                <h1>Direito Trabalhista</h1>
                Serviços jurídicos para empresas nas diversas situações
                trabalhistas, como contratação e demissão de funcionários.
            </div>
        </div>

        <div class="cadsHome">
            <div class="paicadsImg">
                <img class="imgcads"
                    src="../../public/direotias/douglascosta_82934045_116411013185365_8270789263511275541_n_widelg.jpg"
                    alt="">
            </div>
            <div class="conteudo-cads">
                <h1>Direito Digital</h1>
                Trata diretamente do direito digital, que hoje em dia ganha
                cada vez mais importância na era tecnologia
            </div>
        </div>

        <div class="cadsHome">
            <div class="paicadsImg">
                <img class="imgcads"
                    src="../../public/direotias/douglascosta_82934045_116411013185365_8270789263511275541_n_widelg.jpg"
                    alt="">
            </div>
            <div class="conteudo-cads">
                <h1>Direito Empresarial</h1>
                Serviços jurídicos para empresas nas diversas situações
                trabalhistas, como contratação e demissão de funcionários.
            </div>
        </div>



    </div>
</template>

<script>
export default {

}
</script>

<style>
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

@media (max-width: 768px) {


    .paicadsImg {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cadsHome {
        flex-direction: column;
        height: 250px;
        width: 300px;
        margin: 15px;
        background: #ffffff;
    }

    .conteudo-cads {
        display: flex;
        justify-content: center;
        align-content: center;
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

}</style>