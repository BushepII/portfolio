<script>
import { scrollToSection } from './functions';

    export default {
        name: 'Header',
        props: {
            headers: Array,
            scrollToTop: Function,
            scrollToSection: Function,
            active: Boolean,
            currentSection: String,
        },
    };
</script>

<template>
    <header>
        <button class="menu-button" v-on:click="scrollToTop">
            <img src="../assets/atom.png" alt="Atome de couleur noir sur fond blanc">
        </button>
        <nav>
            <!-- Create the corresponding titles and scroll to clickable section -->
            <a v-for="(header, index) in headers" :key="header" :href="`#${index}`" :class="{ active: index == currentSection}" @click.prevent="scrollToSection(`section${index}`)">{{ header }}</a>
        </nav>
    </header>
</template>

<style scoped>
    .menu-button{
        background-color: white;
        border-width: 0;
        margin-left: 10%;
        border-radius: 100%;
    }

    img{
        width: auto;
        height: 5em;
    }

    img:hover{
        cursor: pointer;
        opacity: 0.6;
    }

    nav{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }

    nav a{
        position: relative;
        color: white;
        text-decoration: none;
        font-size: 2em;
    }

    nav a:hover {
        opacity: 0.6;
    }

    nav a::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.1em;
        background-color: white;
        opacity: 0;
        transition: opacity 300ms, transform 300ms;
    }

    nav a.active::after{
        opacity: 1;
        transform: translate3d(0, 1em, 0);
    }

    nav a::after{
        opacity: 1;
        transform: scale(0);
        transform-origin: center;
    }

    nav a.active::after{
        transform: scale(1);
    }
</style>