<template>
  <main class="container">

    <Headerr />

    <whatsappbtn />

    <Apresentacao />

    <Contato />

    <Blogs />

    <Footerr class="footer" />


  </main>
</template>
  
<script>

import Headerr from '../components/headerGlobal.vue'
import Apresentacao from '../components/apresentacaoHome.vue'
import Contato from '../components/ContatoHome.vue'
import Blogs from '../components/BlogsHome.vue'
import Footerr from '../components/footerGlobal.vue'
import whatsappbtn from '@/components/btnGlobalWhats';

export default {

  name: 'App',
  components: {

    Headerr,
    Apresentacao,
    Contato,
    Blogs,
    Footerr,
    whatsappbtn,
  },
 
}
</script>
  
<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Poppins&display=swap');


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
font-family: 'Poppins', sans-serif;
}

body {
  background: #f9f9f9;
}

</style>
  