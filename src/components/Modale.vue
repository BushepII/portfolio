<script>
    export default {
        name: 'Modale',
        props: ['revele', 'toggleModale', 'imageSrc', 'imageDescription'],
    };
</script>

<template>
    <transition name="fade">
        <div class="bloc-modale" v-if="revele">
            <div class="overlay" v-on:click="toggleModale"></div>

            <div class="modale card">
                <button v-on:click="toggleModale" class="btn-modale">X</button>
                <div class="modale-content">
                    <section class="modal-text">
                        <slot></slot>
                    </section>
                    <img :src="imageSrc" class="modal-image">
                </div>

            </div>
        </div>
    </transition>
</template>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .modale-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    .bloc-modale {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .modal-text {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
    }

    .modal-image {
        width: auto;
        height: 100%;
        padding-left: 4em;
        padding-top: 4em;
        padding-right: 4em;
    }

    .overlay {
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .modale {
        background: #f1f1f1;
        color: #333;
        padding: 2em;
        position: fixed;
        top: 10%;
        width: 80%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .btn-modale {
        position: absolute;
        top: 0.5em;
        right: 1em;
    }

    button {
        background-color: rgb(256, 57, 66);
        border: 0.01em solid black;
        border-radius: 20%;
        font-size: 2em;
        width: 2em;
        height: 2em;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.6;
    }
</style>