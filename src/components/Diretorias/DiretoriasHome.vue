<template>
  <div class="container-diretoria">
    <hr class="hr1">
    <div class="title">
      DIRETORIAS
    </div>

    <div class="diretorias">

   
        <div class="cads-diretoria">
        <picture>
          <img class="banner-diretorias" src="../../../public/direotias/secretaria.jpg" alt="secretaria geral">
        </picture>
        <div class="nome-botao">
          <div class="nome-diretorias">
            SECRETARIA-GERAL
          </div>
          <div class="butao-diretorias">
            Nossa Jornada
          </div>
        </div>
      </div>

      <div class="cads-diretoria">
        <picture>
          <img class="banner-diretorias" src="../../../public/direotias/cientifica.jpg" alt="secretaria geral">
        </picture>
        <div class="nome-botao">
          <div class="nome-diretorias">
            CIENTÍFICA
          </div>
          <div class="butao-diretorias">
            Nossa Jornada
          </div>
        </div>
      </div>


  <div class="cads-diretoria">
        <picture>
          <img class="banner-diretorias" src="../../../public/direotias/comunicacao.jpg" alt="secretaria geral">
        </picture>
        <div class="nome-botao">
          <div class="nome-diretorias">
            COMUNICAÇÃO
          </div>
          <div class="butao-diretorias">
            Nossa Jornada
          </div>
        </div>
      </div>

      <div class="cads-diretoria">
        <picture>
          <img class="banner-diretorias" src="../../../public/direotias/finaceira.jpg" alt="secretaria geral">
        </picture>
        <div class="nome-botao">
          <div class="nome-diretorias">
            FINANCEIRA
          </div>
          <div class="butao-diretorias">
            Nossa Jornada
          </div>
        </div>
      </div>


    </div>
    <hr class="hr1">
  </div>
</template>

<script>

export default {

}
</script>

<style>

.hr1 {
  border: 0;
  border-top: 1px solid #CCC;
}


.title {
  display: flex;
  font-family: "Times New Roman";
  font-size: 30px;
  font-weight: 500;
  font-weight: bold;
  margin: 50px;
  justify-content: center;
  color: #7f6000;
}

.diretorias {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f1f3;
}

.cads-diretoria{
  margin-bottom: 50px;
}

.banner-diretorias {
  height: 200px;
  width: 250px;
  padding: 20px;
}

.nome-botao {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 

}

.nome-diretorias {

  color: black;
  margin-bottom: 15px;
}

.butao-diretorias {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  white-space: nowrap;
  background: #7f6000;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
  color: white;
}
@media (max-width: 768px) {

  .diretorias {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: #f1f1f3;
}
.cads-diretoria{
  margin-right:0px;
}
}

</style>