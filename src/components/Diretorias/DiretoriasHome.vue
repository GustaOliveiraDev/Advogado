<template>
  <div class="container-diretoria">
   
    <div class="title">
      <h1> Meu Blog </h1>
      Fique por dentro de todos os acontencimentos jurídicos no Brasil

    </div>

    <div class="diretorias">

      <div class="cads-diretoria">
        <picture class="pai-banner">
          <img class="banner-diretorias" src="../../../public/direotias/cientifica.jpg" alt="cienciaImagem">
        </picture>
        <div class="nome-botao">
          <div class="nome-blog">
            <h2>Como serão as sanções da LGPD</h2>
            O que advogados e escritórios podem esperar do novo Provimento da OAB que deve ser analisado pelo CF
          </div>
          <div class="butao-diretorias">
            Nossa Jornada
          </div>
        </div>
      </div>

      <div class="cads-diretoria">
        <picture class="pai-banner">
          <img class="banner-diretorias" src="../../../public/direotias/cientifica.jpg" alt="cienciaImagem">
        </picture>
        <div class="nome-botao">
          <div class="nome-blog">
            <h2>Como serão as sanções da LGPD</h2>
            O que advogados e escritórios podem esperar do novo Provimento da OAB que deve ser analisado pelo CF
          </div>
          <div class="butao-diretorias">
            Nossa Jornada
          </div>
        </div>
      </div>


      <div class="cads-diretoria">
        <picture class="pai-banner">
          <img class="banner-diretorias" src="../../../public/direotias/cientifica.jpg" alt="cienciaImagem">
        </picture>
        <div class="nome-botao">
          <div class="nome-blog">
            <h2>Como serão as sanções da LGPD</h2>
            O que advogados e escritórios podem esperar do novo Provimento da OAB que deve ser analisado pelo CF
          </div>
          <div class="butao-diretorias">
            Nossa Jornada
          </div>
        </div>
      </div>

      <div class="cads-diretoria">
        <picture class="pai-banner">
          <img class="banner-diretorias" src="../../../public/direotias/cientifica.jpg" alt="cienciaImagem">
        </picture>
        <div class="nome-botao">
          <div class="nome-blog">
         <h2>Como serão as sanções da LGPD</h2>
         O que advogados e escritórios podem esperar do novo Provimento da OAB que deve ser analisado pelo CF
          </div>
          <div class="butao-diretorias">
            Leia mais
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

.container-diretoria{
  width: 100vw;
}
.diretorias {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin: 50px;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: #1b2a41;
}

.pai-banner{
  padding: 25px ;
  display: flex;
  text-align: center;
  justify-content: center;
 
}

.banner-diretorias {
  display: flex;
  text-align: center;
  border-radius:15px;
  height:195px;
  width: 340px;
}
.cads-diretoria {
  background: white;
  margin: 10px;
  width:360px;
  height:450px;
  border-radius:15px;
}


.nome-blog {
  padding: 15px;
  text-align: center;
  color: #1b2a41;
  font-size: 14px;
  margin-bottom: 15px;
}
.nome-botao {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  flex-direction: column;
}

.butao-diretorias {
  display: flex;
  justify-content: center;
  white-space: nowrap;
  background: #cc2936;
  padding: 6px;
  border-radius: 10px;
  width: 100px;
  color: white;
}

@media (max-width: 768px) {

  .diretorias {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>