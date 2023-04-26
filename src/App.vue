<template>
  <main class="container">

 
      <Headerr />

      <Apresentacao />
   
      <Contato />
    
      <Blogs />

      <Footerr />
 

  </main>
</template>

<script>
import Headerr from './components/headerGlobal.vue'
import Apresentacao from './components/apresentacaoHome.vue'
import Contato from './components/ContatoHome.vue'
import Blogs from './components/Blogs/BlogsHome.vue'

import Footerr from './components/footerGlobal.vue'

export default {

  name: 'App',
  components: {

    Headerr,
    Apresentacao,
    Contato,
    Blogs,
    Footerr,
  }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background: #f9f9f9;
}
</style>
