<template>
    <div class="banner-container">
        <picture>
            <img class="banner" src="../../public/Banner.jpg" alt="">
        </picture>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.banner-container {
    background: #000000;
    display: flex;
    justify-content: center;

}

.banner {
    height: 500px;
    width: 800px;
}

@media (max-width: 768px) {



    .banner {
        height: 100%px;
        width: 100%px;
        
    }
}
</style>