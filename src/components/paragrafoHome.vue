<template>
    <div class="container-paragrafo">

        <div class="paragrafo">
            <div class="text-paragrafo">"A INJUSTIÇA EM QUALQUER LUGAR É UMA AMEAÇA À JUSTIÇA POR TODA PARTE"</div>
        <div class="autor"> Martin Luther King Jr</div>

        </div>
       
    </div>
</template>

<script>
export default {

}
</script>

<style>
.container-paragrafo {
    margin: 0px 0px 100px 0px ;
    width: 100vw;
    height: 400px;
    background-size: cover;
    /* background-image: url('../../public/direotias/templo.jfif'); */
    
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}


.text-paragrafo{
    color: #dcb675;
   
}

.autor{
    color: #dcb675;
}



@media (max-width: 768px) {
    .container-paragrafo {
    width: 100vw;
    height: 400px;
    background-size: cover;
    background-position: top;
    background-image: url('../../public/direotias/templo.jfif');
    
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

}
</style>