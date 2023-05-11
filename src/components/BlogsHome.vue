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
                src="../../public/direotias/douglascosta_82934045_116411013185365_8270789263511275541_n_widelg.jpg"
                alt="cienciaImagem">
            </picture>
            <div class="nome-botao">
              <div class="nome-blog">
                <h2> serão as LGPD</h2>
                do novo Provimento da OAB que deve ser analisado pelo CF
              </div>
              <div class="butao-diretorias">
                <button>
                  Leia mais
                  <svg-icon type="mdi" :path="MenuRight"></svg-icon>
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
                src="../../public/direotias/douglascosta_82934045_116411013185365_8270789263511275541_n_widelg.jpg"
                alt="cienciaImagem">
            </picture>
            <div class="nome-botao">
              <div class="nome-blog">
                <h2> sanções </h2>
                 Provimento da OAB que deve ser analisado pelo CF
              </div>
              <div class="butao-diretorias">
                <button>
                  Leia mais
                  <svg-icon type="mdi" :path="MenuRight"></svg-icon>
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
                src="../../public/direotias/douglascosta_82934045_116411013185365_8270789263511275541_n_widelg.jpg"
                alt="cienciaImagem">
            </picture>
            <div class="nome-botao">
              <div class="nome-blog">
                <h2>LGPD</h2>
                 do novo Provimento da OAB que deve ser analisado pelo CF
              </div>
              <div class="butao-diretorias">
                <button>
                  Leia mais
                  <svg-icon type="mdi" :path="MenuRight"></svg-icon>
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
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenuRight } from '@mdi/js';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
  name: 'App',
  components: {
    SvgIcon,
    Carousel,
    Slide,
    Navigation,
  },

 

  data: () => ({

    MenuRight: mdiMenuRight,
 
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  align-items: center;
  display: flex;
  border: none;
  cursor: pointer;
  justify-content: center;
  white-space: nowrap;
  background: #dcb675;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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

  .text-blogs {
  margin-bottom: 50px;
border: none;
}

  .diretorias {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}


@media (max-width: 500px) {

.container-diretoria {
  width: 100vw;
  justify-content: center;
  display: flex;

}

.cads-diretoria{
  width: 300px;
}

.banner-diretorias {
  height: 160px;
  width: 250px;
}

.text-blogs {
margin-bottom: 50px;
border: none;
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
