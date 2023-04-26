<template>
    <div class="container-rodape">
        <footer class="rodape">

            <div class="infor">
                <img class="imgFooter"
                    src="../../public/direotias/Advogada-Cristina-Fasconcelos-pbuu9wvibliopqurnjfq78imc8wj3era4cu4cklbsc.jpg"
                    alt="">
            </div>

            <div class="infor">
                <h1> Cristina Fasconcelos<br> </h1>

                <h2> Advogada empresarial<br> </h2>



                <div>
                    <button class="butao-footer">
                        Fale comigo
                    </button>
                </div>
            </div>

            <div class="infor">
                <h1>Fale comigo</h1>

                <h2>Será um prazer lhe atender</h2>

                R. Diógenes Chianca,1777 - Água Fria<br>
                Entre em contato<br>
                (33) 3333-3333<br>

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
    padding: 10px;
    border-radius: 25px;
    width: 300px;
    color: white;
    margin: 15px 0px 0px 0px;
}

.infor h1 {
    font: 20px;
    margin-bottom: 5px;
}

.infor h2 {
    font: 12px;
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

.infor {
    margin: 0px 25px 0px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

@media (max-width: 768px) {

    .infor {

        margin-top: 25px;
        font-size: 18px;
        font-weight: 400;
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

    .infor h1 {
        font: 20px;
        margin-bottom: 5px;
    }

    .infor h2 {
        font: 12px;
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