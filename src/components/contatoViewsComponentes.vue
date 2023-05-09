<template>
                <div class="contato-container-2">

                    <div class="meio-contato-2">
                        <div class="icon-contate">
                            <svg-icon type="mdi" :path="Phone"></svg-icon>
                        </div>
                        <div class="text-contato">
                            <a href="tel:65984788306" target="_blank">
                            Telefone
                            <h3> (33) 3333-3333</h3>
                        
                        </a>
                        </div>
                    </div>

                    <div class="meio-contato-2">
                        <div class="icon-contate">
                            <svg-icon type="mdi" :path="Whatsapp"></svg-icon>
                        </div>
                        <a href="https://wa.me/65984788306" target="_blank">
                            Whatsapp
                            <h3> (33) 3333-3333</h3>
                        
                        </a>

                    </div>

                    <div class="meio-contato-2">
                        <div class="icon-contate">
                            <svg-icon type="mdi" :path="Instagram"></svg-icon>
                        </div>
                        <div class="text-contato">
                            <a href="https://wa.me/65984788306" target="_blank">
                            Instagran
                            <h3> @seu_instagran</h3>
                        
                        </a>
                        </div>
                    </div>

                </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMapMarker } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';

export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            MapMarker: mdiMapMarker,
            Phone: mdiPhone,
            Instagram: mdiInstagram,
            Whatsapp: mdiWhatsapp,
        }
    }
}
</script>

<style>

.contato-container-2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.meio-contato-2 {
    display: flex;
    justify-content: center;
    margin-left: 15px;
    padding: 30px;
    margin: 5px;
    width: 250px;
    padding: 15px;
    border-radius: 25px;
    background: #dcb675;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 25px;
}

.icon-contate {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 25px;
}
.text-contato {
    text-align: start;
}

.text {
    color: white;
    display: flex;
    justify-content: center;
}
.meio-contato-2 a {
  color: white;
  text-decoration: none;
 
}

.meio-contato h3 {
    font-size: 16px;
    font-weight: bold;

}

@media (max-width: 768px) {

    .contato-container-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

    .meio-contato-2 {
        display: flex;
        justify-content: center;
        
        margin-left: 15px;
        padding: 30px;
        margin: 15px;
        width: 250px;
        padding: 15px;
        border-radius: 25px;
        background: #dcb675;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        margin-bottom: 15px;
    }

}
</style>