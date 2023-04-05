<template>
    <div class="caontainer-rodape">
        <footer class="rodape">
            <div class="infor">
                <div>LADC</div>
                <div> Cuiabá Mato Grosso, Brasil</div>
            </div>
            <div class="infor">
                <div> (65) 99999-7411</div>
                <div> ladccomunicacao@gmail.com</div>
                <div> Todos os direitos reservados</div>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style>

.rodape {
    background:#495867 ;
    color: white;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.infor {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 100px;
}
@media (max-width: 768px) {

    .infor {
    font-size: 15px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 15px;
}

}
</style>