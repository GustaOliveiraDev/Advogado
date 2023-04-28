<template>
    <div class="container-rodape">
        <footer class="rodape">

            <div class="infor">
                <img class="imgFooter"
                    src="../../public/direotias/Advogada-Cristina-Fasconcelos-pbuu9wvibliopqurnjfq78imc8wj3era4cu4cklbsc.jpg"
                    alt="">
            </div>

            <div class="infor1">
                <h1> Cristina Fasconcelos<br> </h1>

                <h2> Advogada empresarial<br> </h2>

                <p> É especialista em contratos e possui experiência na<br>
                    assessoria jurídica de empresas e startups,<br></p>

                <div>
                    <button class="butao-footer">
                        Fale comigo
                    </button>
                </div>
            </div>

            <div class="infor2">
                <h1>Fale comigo</h1>

                <h2>Será um prazer lhe atender</h2>

                <p>R. Diógenes Chianca,1777 - Água Fria<br>
                    Entre em contato<br>
                    (33) 3333-3333<br>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.butao-footer {
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    white-space: nowrap;
    background: #dcb675;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 10px;
    border-radius: 25px;
    width: 300px;
    color: white;
    margin: 15px 0px 0px 0px;
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
    text-align: start;
    margin-left: 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

}

.infor2 {
    display: flex;
    text-align: start;
    margin-left: 25px;
    justify-content: space-between;
    flex-direction: column;
}

@media (max-width: 768px) {

    .infor1 h2 {

        margin-top: 15px;
        font-size: 18px;
        font-weight: 400;
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: column;

    }

    .infor1 h1 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .infor1 p {

        margin-top: 15px;
        font-size: 15px;
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: column;

    }

    .infor2 {

        margin-top: 15px;
        font-size: 18px;
        font-weight: 400;
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: column;

    }

    .infor2 p {
        margin-bottom: 35px;
        margin-top: 15px;
        font-size: 15px;
        display: flex;
        text-align: center;
        justify-content: center;
        flex-direction: column;

    }

    .imgFooter {
        border-radius: 15px;
        height: 140px;
        width: 130px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }


    .infor1 h2 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;

    }


    .infor2 h1 {
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 5px;

    }

    .infor2 h2 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 5px;

    }

    .rodape {
        height: 95vh;
        display: flex;
        justify-content: space-between;
        padding: 35px;
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