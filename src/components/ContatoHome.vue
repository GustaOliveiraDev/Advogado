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
                        Telefone<br>
                        <h3>(33) 3333-3333</h3>
                    </div>

                    <div class="meio-contato">
                        Whatsapp<br>
                        <h3> (33) 3333-3333</h3>
                    </div>

                    <div class="meio-contato">
                        Instagram<br>
                        <h3> @seuinstagram</h3>
                    </div>

                </div>


                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7685.3006039353395!2d-56.00149657269705!3d-15.610321823552109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939da531617a0115%3A0x1818f4f1a6f0b01a!2sOsmar%20Cabral%2C%20Cuiab%C3%A1%20-%20MT!5e0!3m2!1spt-BR!2sbr!4v1680731766881!5m2!1spt-BR!2sbr"
                        class="maps" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                    <div class="botaoMaps">
                        <button>Traçar rota</button>
                    </div>
                </div>
            </div>
        </div>
     

    </div>
</template>

<script>
export default {

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
    margin-left: 15px;
    padding: 30px;
    margin: 15px;
    width: 250px;
    padding: 15px;
    border-radius: 25px;
    background: #f9f9f9;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 50px;
}

.meio-contato h3 {
    font-size: 16px;
    font-weight: bold;
 
}

.botaoMaps {
    margin-left: 15px;
    padding: 30px;
}

.botaoMaps button {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    background: #f9f9f9;
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
    }

    .container-contato {
    width: 100vw;
 
}

    .container-maps {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

}</style>