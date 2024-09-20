<script>
    export default {
        name: 'Modale',
        props: ['revele', 'toggleModale'],
    };
</script>

<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" v-on:click="toggleModale">

        </div>

        <div class="modale card">
            <div class="btn-modale btn btn-danger">
                <button v-on:click="toggleModale">X</button>
            </div>
            <h2>Le contenu de la modale</h2>

        </div>
    </div>
</template>

<style scoped>
    .bloc-modale {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
        top: 20%;
        width: 60%;
        height: 60%;
    }

    .btn-modale {
        position: absolute;
        top: 0.5em;
        right: 1em;
    }

    button {
        background-color: rgb(256, 57, 66);
        border: 0.1em solid black;
        border-radius: 20%;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.6;
    }
</style>