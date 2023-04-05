<template>
    <div class="banner-container">
        <picture>
            <img class="imgLogo" src="../../public/Advogada-Cristina-Vasconcelos-pbuu9qaqqe82ronozu4uis5taeshlecx22rw5e9sqm.jpg" alt="">
        </picture>
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
                <h1 class="titulo-cads">Direito Trabalhista</h1>
               <div class="conteudo-cads">
                Serviços jurídicos para empresas nas diversas situações <br>
                trabalhistas, como contratação e demissão de funcionários.
               </div>
            </div>

            <div class="cadsHome">
                <h1 class="titulo-cads">Direito Digital</h1>
                <div class="conteudo-cads">Trata diretamente do direito digital, que hoje em dia ganha<br>
                cada vez mais importância na era tecnologia</div>
            </div>

            <div class="cadsHome">
                <h1 class="titulo-cads">Direito Trabalhista</h1>
               <div class="conteudo-cads">
                Serviços jurídicos para empresas nas diversas situações <br>
                trabalhistas, como contratação e demissão de funcionários.
               </div>
            </div>

            <div class="botao">
                <button>Áreas de atuação</button>
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
.banner-container {
    background: #f1f1f3;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.imgLogo{
    width:450px;
 
}

.titulo-home{
    height: 130px;
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 15px;
}

.titulo-cads{
    font-size: 16px;
}
.conteudo-cads{
    font-size: 14px;
}

.botao{
    margin-left: 15px;
    padding: 30px;
}
.botao button{
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
    flex-direction: column;
    padding-left: 10px;
    background: #ffffff;
}

.banner {
    height: 500px;
    width: 800px;
}

@media (max-width: 768px) {
    .banner-container {
    background: #f1f1f3;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}
}
</style>