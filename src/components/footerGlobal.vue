<template>
    <div class="container-rodape">
        <footer class="rodape">

            <div class="infor">
                <img class="imgFooter"
                    src="../../public/direotias/Advogada-Cristina-Fasconcelos-pbuu9wvibliopqurnjfq78imc8wj3era4cu4cklbsc.jpg"
                    alt="">
            </div>

            <div class="infor1">
                <div class="titulo-footer">
                    <h1> Cristina Fasconcelos </h1>

                    <h2> Advogada empresarial </h2>
                </div>

                <div class="text-footer">
                    É especialista em contratos e possui experiência na<br>
                    assessoria jurídica de empresas e startups
                </div>

                <div>
                    <button class="butao-footer">
                        Fale comigo
                        <svg-icon type="mdi" :path="MenuRight"></svg-icon>
                    </button>
                </div>
            </div>

            <div class="infor2">
                <div class="titulo-footer2">
                    <h1>Fale comigo</h1>

                    <h2>Será um prazer lhe atender</h2>
                </div>

                <div class="contato-footer">
                    <svg-icon type="mdi" :path="MapMarker"></svg-icon>
                    <p>Cuiabá-Centro</p>
                </div>

                <div class="contato-footer">
                    <svg-icon type="mdi" :path="Phone"></svg-icon>
                    <p>(33) 3333-3333</p>
                </div>

            </div>
        </footer>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMapMarker } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiMenuRight } from '@mdi/js';
export default {
    components: {
        SvgIcon
    },
    data() {
        return {
            MapMarker: mdiMapMarker,
            Phone: mdiPhone,
            MenuRight: mdiMenuRight,
        }
    }
}
</script>

<style>
.butao-footer {
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: #dcb675;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 10px;
    border-radius: 25px;
    width: 300px;
    color: white;
    margin: 15px 0px 0px 0px;
}

.contato-footer {
    display: flex;
    justify-content: start;
    margin-top: 15px;
}

.infor1 h1 {
    font-size: 20px;
    margin-bottom: 5px;
}

.infor1 h2 {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;

}

.infor2 h1 {
    font-size: 20px;
    margin-bottom: 5px;
}

.infor2 h2 {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;

}

.titulo-footer2 {
    margin-top: 0;
}

.text-footer {
    margin-top: 15px;
}

.container-rodape {
    margin-top: 50px;
    width: 100vw;
    font-size: 18px;
    font-weight: 400;
}

.rodape {
    height: 400px;
    background: #4F4F4F;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imgFooter {
    background: #dcb675;
    padding-bottom: 3px;
    border-radius: 15px;
    height: 200px;
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.infor1 {
    height: 160px;
    display: flex;
    justify-content: center;
    align-content: center;
    margin-left: 25px;
    flex-direction: column;

}

.infor2 {
    height: 160px;
    display: flex;
    margin-left: 25px;
    flex-direction: column;
}

@media (max-width: 768px) {

    .infor1 {
        text-align: center;
        margin: 0;
        justify-content: center;
        align-items: center;
    }

    .infor2 {
        text-align: center;
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 0;

    }

    .butao-footer {
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        background: #dcb675;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        padding: 10px;
        border-radius: 25px;
        width: 200px;
        color: white;

    }

    .rodape {
        height: 95vh;
        display: flex;
        justify-content: space-between;
        padding: 40px;
        align-items: center;
        flex-direction: column;

    }

    .container-rodape {

        margin-top: 50px;
        width: 100vw;
        font-size: 18px;
        font-weight: 400;
    }

}
</style>