<template>
    <div class="whatsapp">
        <a href="https://wa.me/65984788306" target="_blank">
            <div class="butao-whatsapp-online">
            Online Agora
        </div>
        <div class="div-whatsap">


            <button class="butao-whatsapp">
                <svg-icon class="svg-icon" type="mdi" :path="whatsapp"></svg-icon>
                Agende seu Horário
            </button>
        </div>
        </a>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiWhatsapp } from '@mdi/js';
export default {

    components: {
        SvgIcon,
    },
    data() {
        return {
            whatsapp: mdiWhatsapp,
        }
    },

}
</script>

<style>

.whatsapp {
  position: fixed;
  z-index: 10000;
  right: 50px;
  bottom: 25px;
}

.whatsapp a{
text-decoration: none;
}

.butao-whatsapp {

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background: #23a455;
  color: white;
  font-weight: bold;
  width: 250px;
  padding: 10px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.svg-icon {
  margin-right: 10px;

}

.butao-whatsapp-online {

  font-size: 10px;
  text-align: center;
  position: fixed;
  right: 60px;
  bottom: 71px;
  white-space: nowrap;
  border: none;
  cursor: pointer;
  background: #ca2935;
  color: white;
  font-weight: bold;
  width: 100px;
  padding: 5px;
  border-radius: 25px;

}

@media (max-width: 768px) {
  .whatsapp {
    position: fixed;
    z-index: 10000;
    right: 15px;
    bottom: 15px;
  }

  .butao-whatsapp {

    border: none;
    cursor: pointer;
    background: #23a455;
    color: white;
    font-weight: bold;
    width: 200px;
    padding: 10px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .butao-whatsapp-online {

    font-size: 10px;
    text-align: center;
    position: fixed;
    right: 25px;
    bottom: 59px;
    white-space: nowrap;
    border: none;
    cursor: pointer;
    background: #ca2935;
    color: white;
    font-weight: bold;
    width: 90px;
    padding: 5px;
    border-radius: 25px;

  }


}

</style>