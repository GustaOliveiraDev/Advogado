
<template>
  <div class="container">

    <nav class="nav">
      <label for="toggle">&#9776;</label>

      <input type="checkbox" id="toggle"/>

        <div class="menu">
            <a href="#">Home</a>
            <a href="#">Atuação</a>
            <a href="#">Trabalhos</a>
        </div>
 
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container{
  background: #495867;
}

.nav {

    text-align: right;
    height: 70px;
    line-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}



.menu a {
    text-decoration: none;
    color: gray;
    margin: 0 10px;
    background: #495867;
}


label {
    margin: 0 40px 0 0;
    font-size: 26px;
    line-height: 70px;
    display: none;
    width: 26px;
    float: right;
}

#toggle {
    display: none;
}

.logo{
  border-radius: 50%;
}


@media only screen and (max-width: 500px) {
    label {
        display: block;
        cursor: pointer;
    }
    .menu {
        text-align: start;
        width: 400px;
        display: none;
    }
    .menu a {
        display: block;
        margin-top:50px ;
       
    }
    #toggle:checked + .menu {
        display: block;
    }
    
    
}
</style>
