<template>
 <main class="container">
  <HomeList/>
 </main>
</template>

<script>
import HomeList from './components/HomeList'

export default {
  name: 'App',
  components: {
    HomeList
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

a{
  text-decoration:none;
}

li{
  list-style: none;
}

.container{

}
</style>
