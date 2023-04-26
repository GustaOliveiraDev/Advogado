<template>
  <div class="main">

    <div class="text-blogs">
      <h1> Meu Blog</h1>
      <h2>Fique por dentro de todos os acontencimentos jurídicos no Brasil</h2>
    </div>

    <carousel :items-to-show="1" :breakpoints="breakpoints" class="container-diretoria">
      <slide v-for="slide in 1" :key="slide">
        <div class="diretorias">
          <div class="cads-diretoria">
            <picture class="pai-banner">
              <img class="banner-diretorias"
                src="../../../public/direotias/Advocacia-24-pbpi802cbeucwf47byjh2g2jjyygqui7n8k2dzf2lg.jpg"
                alt="cienciaImagem">
            </picture>
            <div class="nome-botao">
              <div class="nome-blog">
                <h2>Como serão as sanções da LGPD</h2>
                O que advogados e escritórios podem esperar do novo Provimento da OAB que deve ser analisado pelo CF
              </div>
              <div class="butao-diretorias">
                <button>
                  Leia mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <slide v-for="slide in 1" :key="slide">
        <div class="diretorias">
          <div class="cads-diretoria">
            <picture class="pai-banner">
              <img class="banner-diretorias"
                src="../../../public/direotias/Advogado-10-pbpikasbqdoesr94irwr6ucncgccgabsc3trfb6n6s.jpg"
                alt="cienciaImagem">
            </picture>
            <div class="nome-botao">
              <div class="nome-blog">
                <h2>Como serão as sanções da LGPD</h2>
                O que advogados e escritórios podem esperar do novo Provimento da OAB que deve ser analisado pelo CF
              </div>
              <div class="butao-diretorias">
                <button>
                  Leia mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <slide v-for="slide in 1" :key="slide">
        <div class="diretorias">
          <div class="cads-diretoria">
            <picture class="pai-banner">
              <img class="banner-diretorias"
                src="../../../public/direotias/Advocacia-24-pbpi802cbeucwf47byjh2g2jjyygqui7n8k2dzf2lg.jpg"
                alt="cienciaImagem">
            </picture>
            <div class="nome-botao">
              <div class="nome-blog">
                <h2>Como serão as sanções da LGPD</h2>
                O que advogados e escritórios podem esperar do novo Provimento da OAB que deve ser analisado pelo CF
              </div>
              <div class="butao-diretorias">
                <button>
                  Leia mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation class="btn" />
      </template>

    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({

    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },

    breakpoints: {


      1024: {
        itemsToShow: 3,
        snapAlign: 'center',
      },
    },
  })
}
</script>



<style>
.main {
  margin-top: 50px;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  display: flex;

}

.container-diretoria {
  width: 1200px;
  justify-content: center;
  display: flex;

}

.text-blogs h1 {
  font: 36px;
  font-weight: bold;
}

.text-blogs {
  margin-bottom: 50px;
  border-bottom: 2px solid #dcb675;

}

.diretorias {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 10px;
  color: white;
  background: #1C1C1C;
}

.btn:hover {
  color: white;
}

.title {
  display: flex;
  font-size: 20px;
  font-weight: bold;

  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: #1b2a41;
}

.pai-banner {
  padding: 25px;
  display: flex;
  text-align: center;
  justify-content: center;

}

.banner-diretorias {
  display: flex;
  text-align: center;
  border-radius: 15px;
  height: 195px;
  width: 340px;
}

.cads-diretoria {
  background: white;
  margin: 10px;
  width: 360px;
  height: 450px;
  border-radius: 15px;
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

.butao-diretorias button {
  display: flex;
  border: none;
  cursor: pointer;
  justify-content: center;
  white-space: nowrap;
  background: #dcb675;
  padding: 6px;
  border-radius: 10px;
  width: 100px;
  color: white;
}

@media (max-width: 768px) {

  .container-diretoria {
    width: 100vw;
    justify-content: center;
    display: flex;

  }

  .diretorias {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>
