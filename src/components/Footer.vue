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
                const x = document.lastModified;
                this.lastUpdateTime = x;
                this.lastUpdateDateTime = new Date(x).toISOString();
            }
        }
    };

    let lastUpdateTime;
    let lastUpdateDateTime;

    function displayLastUpdateTime() {
        lastUpdateTime = document.lastModified;
        lastUpdateDatetime = new Date(x).toISOString();
    }

  document.addEventListener("DOMContentLoaded", displayLastUpdateTime);
</script>

<template>
    <footer>
        <section>
            <a href="https://github.com/BushepII" target="_blank"><img src="../assets/github_icon.png" alt="github icon"></a>
            <a href="https://fr.linkedin.com/" target="_blank"><img src="../assets/linkedin_icon.png" alt="linkedin icon"></a>
        </section>
        <time v-if="lastUpdateTime" :datetime="lastUpdateDateTime">
            Last Update time: {{ lastUpdateTime }}
        </time>
    </footer>
</template>

<style scoped>
    time{
        text-align: center;
    }

    img {
        width: 5em;
    }
    img:hover{
        opacity: 0.2;
    }
</style>