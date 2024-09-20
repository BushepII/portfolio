<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, onMounted, onUnmounted } from 'vue'
  import Modale from './components/Modale.vue';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  const currentSection = ref('');

  let app;

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id');
        }
      });
    });
    document.querySelectorAll('section div h1').forEach((section) => {
      observer.observe(section);
    })

    app = document.getElementById('app');
    document.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll);
  });

  function handleScroll() {
    const nextSection = document.getElementById('section1');
    const nextSectionRect = nextSection.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const nextSectionScrollY = nextSectionRect.top + window.scrollY;

    const distanceToNextSection = nextSectionScrollY - currentScrollY;

    let fadeFactor = Math.max((distanceToNextSection / window.innerHeight), 0);

    const endColor = { r: 0, g: 0, b: 0 };
    const startColor = { r: 121, g: 35, b: 9 };

    const interpolatedColor = {
      r: Math.round(startColor.r + fadeFactor * (endColor.r - startColor.r)),
      g: Math.round(startColor.g + fadeFactor * (endColor.g - startColor.g)),
      b: Math.round(startColor.b + fadeFactor * (endColor.b - startColor.b)),
    };

    app.style.backgroundColor = `rgb(${interpolatedColor.r}, ${interpolatedColor.g}, ${interpolatedColor.b})`;
  };
</script>


<script>
  export default {
    name: 'App',
    data() {
      return {
        revele: false,
        headers: ['Présentation', 'Créations', 'Contact'],
        active: false,
      }
    },
    components: {
      'modale': Modale,
      'appHeader': Header,
      'appFooter': Footer
    },
    methods: {
      toggleModale: function() {
        this.revele = !this.revele;
      },

      scrollToTop: function() {
        const x = window.scrollX;
        window.scrollTo({
          top: 0,
          left: x,
          behavior: 'smooth'
        });
      },

      scrollToSection: function(id){
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - window.innerHeight*0.1,
            behavior: 'smooth',
          });
        }
      },
    },
  };
</script>

<template>
  <!--
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
-->

  <Header :headers="headers" :scrollToTop="scrollToTop" :scrollToSection="scrollToSection" :active="active" :currentSection="currentSection"/>

  <main>
    <section v-for="(header, index) in headers" :key="header" :id="`section${index}`">
      <div v-if="index === 0">
        <div class="presentation">
          <h1 :id="index">Développeur Web</h1>
          <p>Je suis Machin Chose, développeur Web dans l'entreprise Webatom. Bien que peu expérimenté, je me forme aux nouvelles technologies du Web.</p>
        </div>
        <img src="./assets/atom.png" alt="atom image">
      </div>

      <div v-if="index === 1" class="creations">
        <h1 :id="index">{{ header }}</h1>
        <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
        <button v-on:click="toggleModale"><img src="./assets/atom.png" alt=""></button>
      </div>

      <div v-if="index === 2" class="contact">
        <h1 :id="index">{{ header }}</h1>
          <label for="">Nom :
            <input v-model="message" placeholder="Nom">
          </label>
          
          <label for="">Prénom :
            <input v-model="message" placeholder="Prénom">
          </label>
        <label for="">Objet : 
          <input v-model="message" placeholder="Objet">
        </label>
        
        <label for="">message : 
          <textarea placeholder="message"></textarea>
        </label>
        
      </div>

    </section>
    
  </main> 

  <Footer />
</template>

<style scoped>
  section{
    padding-top: 10%;
  }

  h1{
    scroll-margin-top: 15vh;
    color: white;
    font-size: 10em;
    padding-bottom: 1em;
  }

  p {
    color: white;
    font-size: 3em;
  }

  #section0 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
  }

  img {
    background-color: aliceblue;
    width: auto;
    height: 30em;
    border-radius: 10%;
    padding: 1em;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .presentation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin-right: 2em;
  }

  .creations {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  button:hover {
    cursor: pointer;
  }

  button img {
    background-color: aliceblue;
    width: auto;
    height: 10em;
  }
</style>
