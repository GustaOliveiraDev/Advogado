
<template>
  <div class="navbar-container">

    <img class="imgharder"
    src="../../public/direotias/Cristina-04-pbpigupiadcv7tmkjgyc1rh4lakgxwrvs6knyrt7uo.png" alt="logo">
    <div class="navbar">
      <input type="checkbox" name="" id="" />


      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>


      <div class="menu-items">
        <router-link class="rotas" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="rotas" :to="{ name: 'Atuacao' }">Atuação</router-link>
        <router-link class="rotas" :to="{ name: 'Contato' }">Contato</router-link>
        <router-link class="rotas" :to="{ name: 'SobreNós' }">Sobre nós</router-link>
      
      </div>
      <router-view />
    </div>

  
  </div>

</template>

<script>
import { ref } from 'vue';



export default {
  components: {

  },
  setup() {
    let toggleMenu = ref(true)
    // const route = useRoute();
    return {
      toggleMenu
    }
  },
  methods: {
    Sidebar() {
      this.toggleMenu = !this.toggleMenu
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.imgharder{
  height: 100px;
  width: 150px;
  margin-left: 25px;
}

.navbar-container {
  width: 100vw;

  display: flex;
  align-items: center;
  background: 	#4F4F4F;
  margin-bottom: 50px;
}

.navbar {
  height: 100px;
  width: 100vw;
  display: flex;
  margin-right: 25px;
  align-items: center;
  justify-content: end;
}

.navbar-container input[type="checkbox"],
.navbar-container .hamburger-lines {
  display: none;
}

.menu-items {
  visibility: visible;
}

.menu-items {
  display: flex;
  align-items: center;
  font-weight: 500;
}

.items a {
  margin-bottom: 15px;
  margin-right: 15px;
  text-decoration: none;
  color: white;
}
.rotas{
  cursor: pointer;
 
  margin-right: 15px;
  text-decoration: none;
  color: white;
}

.items a:hover {
  color: #dcb675;
  transition: 300ms;
}

.rotas a:hover {
  color: #dcb675;
  transition: 300ms;
}


.lupa {
  margin-right: 20px;
}

.magnify {
  display: flex;
  align-items: center;
  height: 100px;
  color: white;
}


@media (max-width: 768px) {

  .navbar input[type="checkbox"],
  .navbar .hamburger-lines {
    display: block;
  }

  .imgharder{
    position: absolute;
    right: 20px;

    margin:0;
    padding: 5px;
    width: 100px;
    height: 80px;
  
  


}

  .navbar-container {
    height: 60px;
    width: 100vw;
  }
  .navbar {
    display: block;
    position: relative;
    height: 50px;
    width: 100vw;
  }


  .navbar input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
  }

  .navbar .hamburger-lines {
    display: block;
    height: 23px;
    width: 35px;
    position: absolute;
    top: 17px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar .hamburger-lines .line {
    display: block;
    height: 4px;
    border-radius: 10px;
    background: white;
  }

  .navbar .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: 	#4F4F4F;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 50px;
    transition: transform 0.5s ease-in-out;
  }

  .items {
    margin-bottom: 15px;
  }

  .navbar .menu-items {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .navbar input[type="checkbox"]:checked~.menu-items {
    transform: translateX(0);
  }

  .navbar input[type="checkbox"]:checked~.hamburger-lines .line1 {
    transform: rotate(35deg);
  }

  .navbar input[type="checkbox"]:checked~.hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar input[type="checkbox"]:checked~.hamburger-lines .line3 {
    transform: rotate(-35deg);
  }
}
</style>
