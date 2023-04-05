<template>
  <div class="container-diretoria">
    <div class="title">
      DIRETORIAS
    </div>

    <div class="diretorias">

      <div class="secretaria">
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

      <div class="cientifica">
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

      <div class="comunicacao">
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

      <div class="financeira">
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
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container-diretoria{
  /* margin-bottom: 100px; */

  background: black ;
}
.title {
  display: flex;
  font-family: "Times New Roman";
  font-size: 25px;
  font-weight: 500;
  justify-content: center;
  color: #7f6000;

}

.diretorias {
  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
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

  color: white;
  margin-bottom: 15px;
}

.butao-diretorias {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  white-space: nowrap;
  background: #7f6000;
  padding: 5px;
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

  background: black;
}
}

</style>