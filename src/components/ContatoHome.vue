<template>
    <div class="container-contato">
       

        <div class="pai-contato">
            <div class="text">

                <h2>Especializada em Direito<br></h2>

                <h1>empresarial<br></h1>

               <h3> Expert na prevenção de riscos às empresas e na proposição de mecanismos
                para fortalecimento do negócio. Agende seu horário</h3>

            </div>

            <div class="container-maps">
                <div class="contato">


                    <div class="meio-contato">
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

                    <div @click="contatoWhats" target="_blank" class="meio-contato">
                        <div class="icon-contate">
                        <svg-icon type="mdi" :path="Whatsapp"></svg-icon>
                       </div>
                       <div  class="text-contato">
                        <a href="https://wa.me/65984788306" target="_blank">
                            Whatsapp
                            <h3> (33) 3333-3333</h3>
                        
                        </a>
                       </div>
                        
                    </div>

                    <div class="meio-contato">
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


                <div>
                    <iframe class="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30746.80685292295!2d-56.067925133320635!3d-15.572892097826315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db0e1e0fe00a3%3A0x5e743e84393bed23!2sCentro%20Pol%C3%ADtico%20Administrativo%2C%20Cuiab%C3%A1%20-%20MT!5e0!3m2!1spt-BR!2sbr!4v1683644593720!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div class="botaoMaps">
                        <button target="_blank" @click="maps">
                            <a href="https://goo.gl/maps/eLxPFfGQJQ7sjBJ56" target="_blank" >Traçar rota</a>
                            <svg-icon type="mdi" :path="MapMarker"></svg-icon>
                        </button>
                    
                    </div>
                </div>
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
  },

}
</script>

<style>
.container-contato {
    width: 100vw;

}


.pai-contato {
    background-color: #4F4F4F;
    padding: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.container-maps {
    display: flex;
    flex-direction: column;
    justify-content: center;

}

.maps {
    width: 750px;
    height: 300px;
  
}
.text-contato{
    text-align: start;
}
.icon-contate{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:10px ;
    font-size: 25px;
}

.text {
    margin: 25px;
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.text h2 {
    font-size: 36px;
    font-weight: 400;
}

.text h1 {
    font-size: 36px;
    font-weight: 400;
}

.text h3 {
    font-size: 16px;
    font-weight: 400;
}

.contato {
    display: flex;
    justify-content: center;
    align-items: center;

}

.meio-contato {
    display: flex;
    justify-content: center;
    cursor: pointer;

    margin-left: 15px;
    padding: 30px;
    margin: 15px;
    width: 250px;
    padding: 15px;
    border-radius: 25px;
    background: #dcb675;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 50px;
}

.meio-contato a {
  color: white;
  text-decoration: none;
 
}

.meio-contato h3 {
    font-size: 16px;
    font-weight: bold;
 
}

.botaoMaps a {
    color: white;
  text-decoration: none;
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

    .maps {
        width: 360px;
        height: 300px;
    }

    .contato {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 300px;
        margin-bottom: 30px;
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

@media (max-width: 500px) {

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

.maps {
    width: 300px;
    height: 300px;
}

.contato {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 300px;
    margin-bottom: 30px;
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