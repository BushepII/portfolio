<script>
    export default {
        name: 'Footer',
        data() {
            return {
                lastUpdateTime: '',
                lastUpdateDateTime: '',
            };
        },
        mounted() {
            this.displayLastUpdateTime();
        },
        methods: {
            displayLastUpdateTime: function () {
                this.lastUpdateTime = document.lastModified;
                this.lastUpdateDateTime = new Date(this.lastUpdateTime).toISOString();
            }
        }
    };
</script>

<template>
    <footer>
        <section>
            <a href="https://github.com/BushepII" target="_blank">
                <img src="../assets/github_icon.png" alt="Icone de GitHub">
            </a>
            <a href="https://fr.linkedin.com/" target="_blank">
                <img src="../assets/linkedin_icon.png" alt="Icode de Linkedin">
            </a>
        </section>
        <time v-if="lastUpdateTime" :datetime="lastUpdateDateTime">
            Date de dernière mise à jour: {{ lastUpdateTime }}
        </time>
    </footer>
</template>

<style scoped>
    time{
        text-align: center;
        color: white;
        font-size: 2em;
    }

    img {
        height: 15vh;
        width: auto;
        background-color: white;
    }
    
    img:hover{
        opacity: 0.2;
    }
</style>