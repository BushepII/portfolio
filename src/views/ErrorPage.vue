<script setup>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';

  import { scrollToTop} from '@/components/functions';

</script>

<template>
  <Header :scrollToTop="scrollToTop"/>

  <main>
    <img src="@/assets/errorpicture.png" alt="">
    <h1>404</h1>
    <router-link to="/" class="router">Retour à la page d'accueil</router-link>
  </main>

  <Footer />
</template>


<style scoped>
  main {
    color: white;
    padding-top: 5%;
  }

  img {
    height: 30vh;
    width: 30vh;
  }

  h1 {
    font-size: 10em;
    text-align: start;
  }

  .router{
    color: white;
    font-size: 2em;
  }
</style>