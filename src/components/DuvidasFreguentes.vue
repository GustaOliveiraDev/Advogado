<template>
  <div class="container-duvidas">
    <div class="title-duvidas">
      DÚVIDAS FREQUENTES
    </div>
    <div class="links-duvidas">
      <div class="items"><a href="#home">Diretores</a></div>
      <div class="items"><a href="#diretorias">Colaboradores</a></div>
      <div class="items"><a href="#aplicacao">Coordenadores</a></div>
      <div class="items"><a href="#contato">Ligantes</a></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container-duvidas {

  background: black;
  padding: 20px;
  /* margin-bottom: 100px; */

}

.title-duvidas {
  display: flex;
  font-family: "Times New Roman";
  font-size: 25px;
  font-weight: 500;
  justify-content: center;
  color: #7f6000;
}

.links-duvidas {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-weight: 500;
  margin-bottom: 15px;
  color: white;
}

@media (max-width: 768px) {

  .links-duvidas {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  font-weight: 500;
  margin-bottom: 15px;
  color: white;
}
}
</style>