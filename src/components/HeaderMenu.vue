
<template>
  <nav class="navbar">

    <div class="navbar-container ">
      <input type="checkbox" name="" id="" /> 

        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>

      
        <div class="menu-items">
          <div class="items"><a href="#home">Home</a></div>
          <div class="items"><a href="#diretorias">Diretorias</a></div>
          <div class="items"><a href="#aplicacao">Aplicação</a></div>
          <div class="items"><a href="#contato">Contato</a></div>
        </div>
      
      
      <Magnify class="magnify" />

    </div>

  </nav>
</template>
<script>
import Magnify from 'vue-material-design-icons/Magnify.vue';
export default {
  components: {
    Magnify
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.magnify {
  display: flex;
  align-items: center;
  height: 100px;
  color: white;
}

.navbar input[type="checkbox"],

.navbar .hamburger-lines {
  display: none;
}

.navbar {
 
  background:#495867 ;
  width: 100%;
   height: 100px;
  color: white;
}


.navbar-container {
  height: 100px;
  display: flex;
  margin-right: 25px;
  align-items: center;
  justify-content: end;
}

.menu-items {
  display: flex;
  font-weight: 500;
}

.items a {
  margin-right: 15px;
  text-decoration: none;
  color: white;
}

@media (max-width: 768px) {

  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 50px;
  }


  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
  }

  .navbar-container .hamburger-lines {
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

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: white;
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }



  .navbar .menu-items {
    padding-top: 100px;
    background: #1c1c1c;
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

  .navbar-container input[type="checkbox"]:checked~.menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line1 {
    transform: rotate(35deg);
  }

  .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked~.hamburger-lines .line3 {
    transform: rotate(-35deg);
  }


}
</style>
