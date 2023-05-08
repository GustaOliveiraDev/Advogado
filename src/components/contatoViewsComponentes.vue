<template>
    <div class="container-contato">


        <div class="pai-contato">


            <div class="container-maps">
                <div class="contato">


                    <div class="meio-contato">
                        <div class="icon-contate">
                            <svg-icon type="mdi" :path="Phone"></svg-icon>
                        </div>
                        <div class="text-contato">
                            Telefone
                            <h3> (33) 3333-3333</h3>
                        </div>
                    </div>

                    <div class="meio-contato">
                        <div class="icon-contate">
                            <svg-icon type="mdi" :path="Whatsapp"></svg-icon>
                        </div>
                        <div class="text-contato">
                            Whatsapp
                            <h3> (33) 3333-3333</h3>
                        </div>

                    </div>

                    <div class="meio-contato">
                        <div class="icon-contate">
                            <svg-icon type="mdi" :path="Instagram"></svg-icon>
                        </div>
                        <div class="text-contato">
                            Instagram

                            <h3>@seuinstagram</h3>
                        </div>
                    </div>

                </div>


                <!-- <div class="maps-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7685.3006039353395!2d-56.00149657269705!3d-15.610321823552109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939da531617a0115%3A0x1818f4f1a6f0b01a!2sOsmar%20Cabral%2C%20Cuiab%C3%A1%20-%20MT!5e0!3m2!1spt-BR!2sbr!4v1680731766881!5m2!1spt-BR!2sbr"
                        class="maps" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div class="botaoMaps">
                        <button>Traçar rota
                            <svg-icon type="mdi" :path="MapMarker"></svg-icon>
                        </button>

                    </div>
                </div> -->
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
.pai-contato {
    background: #f9f9f9;
}

.container-maps {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.contato {
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 15px;
}

.maps-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


.text-contato {
    text-align: start;
}

.icon-contate {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    font-size: 25px;
}

.text {

    color: white;
    display: flex;
    justify-content: center;

}



.meio-contato {
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

.meio-contato h3 {
    font-size: 16px;
    font-weight: bold;

}

.botaoMaps {
    margin-left: 15px;
    padding: 30px;
    display: flex;
    justify-content: center;
}

.botaoMaps button {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    background: #dcb675;
    color: white;
    font-weight: bold;
    width: 250px;
    padding: 15px;
    border-radius: 25px;
}

@media (max-width: 768px) {

    .pai-contato {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .meio-contato {
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


    .contato {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 300px;
    }

    .container-contato {
        width: 100vw;

    }

    .container-maps {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

}
</style>