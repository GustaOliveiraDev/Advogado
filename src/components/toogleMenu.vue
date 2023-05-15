<template>
    <div id="menu">
        <div ref="menuBar" id="menuBar" @click="toggleMenu()">
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
        </div>
        <nav ref="nav" class="nav" id="nav">
            <router-link class="rotasMobile" :to="{ name: 'Home' }">Home</router-link>
            <router-link class="rotasMobile" :to="{ name: 'Atuacao' }">Atuação</router-link>
            <router-link class="rotasMobile" :to="{ name: 'Contato' }">Contato</router-link>
            <router-link class="rotasMobile" :to="{ name: 'SobreNós' }">Sobre nós</router-link>
        </nav>
    </div>

    <div ref="menuBg" class="menuBg" id="menuBg"></div>
</template>

<script>
import { ref } from 'vue';
export default {

    setup() {
        return {
            isMenuOpen: ref(false)
        }
    },

    methods: {

        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            console.log(this.isMenuOpen)
            if (this.isMenuOpen === true) {
                this.$refs.menuBar.classList.add('change');
                this.$refs.nav.classList.add('change');
                this.$refs.menuBg.classList.add('change-bg');
            } else {
                this.$refs.menuBar.classList.remove('change');
                this.$refs.nav.classList.remove('change');
                this.$refs.menuBg.classList.remove('change-bg');
            }
        }
    }
}
</script>

<style>
#menu {
    z-index: 2;
}

#menuBar {
    width: 45px;
    height: 40px;
    margin: 20px;
    cursor: pointer;

}

.bar {
    height: 5px;
    width: 100%;
    background-color: white;
    display: block;
    border-radius: 5px;
    transition: 0.3s ease;
}

#bar1 {
    transform: translateY(-4px);
}

#bar3 {
    transform: translateY(4px);
}

.nav {
    transition: 0.3s ease;
    display: none;
}

.nav ul {
    padding: 0 22px;
}

.nav li {
    list-style: none;
    padding: 12px 0;
}

.nav li a {
    color: white;
    font-size: 20px;
    text-decoration: none;
}

.nav li a:hover {
    font-weight: bold;
}

.menuBg,
#menu {
    top: 0;
    left: 0;
    position: absolute;
}

.menuBg {
    z-index: 1;
    width: 0;
    height: 0;
    margin: 30px 0 20px 20px;
    background: radial-gradient(circle, #4F4F4F, #4F4F4F);
    border-radius: 50%;
    transition: 0.3s ease;
}

.rotasMobile {
    margin: 15px;
    text-decoration: none;
    color: white;
    font-size: 18px;
}

.rotasMobile a:hover {
    transition: 0.5s ease;
    color: #dcb675;

}

.change {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
}

.change .bar {
    background-color: white;
}

.change #bar1 {
    transform: translateY(4px) rotateZ(-45deg);
}

.change #bar2 {
    opacity: 0;
}

.change #bar3 {
    transform: translateY(-6px) rotateZ(45deg);
}

.change-bg {
    width: 520px;
    height: 460px;
    overflow: hidden;
    transform: translate(-60%, -30%);
}
</style>