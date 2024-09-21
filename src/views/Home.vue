<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, onMounted, onUnmounted } from 'vue'
  import Modale from '@/components/Modale.vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import ContactForm from '@/components/ContactForm.vue';
  import cvImage from '@/assets/cv.png';
  import chargeImage from '@/assets/cahier_charge.png';
  import commentImage from '@/assets/comment_space.png';

  import { scrollToTop, handleScroll, scrollToSection } from '@/components/functions';

  const currentSection = ref('');

  let app;

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          currentSection.value = entry.target.getAttribute('id');
        }
      });
    });
    document.querySelectorAll('.section-content').forEach((section) => {
      observer.observe(section);
    })

    app = document.getElementById('app');
    document.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    document.removeEventListener('scroll', handleScroll);
  });
</script>


<script>
  export default {
    name: 'Home',
    data() {
      return {
        revele1: false,
        revele2: false,
        revele3: false,
        headers: ['Présentation', 'Créations', 'Contact'],
        active: false,
        imageSrc: [cvImage, chargeImage, commentImage],
        name: "",
        subject: "",
        message: "",
      }
    },
    components: {
      'modale': Modale,
      'appHeader': Header,
      'appFooter': Footer,
      'contactform': ContactForm,
    },
    methods: {
      toggleModale1: function() {
        this.revele1 = !this.revele1;
      },

      toggleModale2: function() {
        this.revele2 = !this.revele2;
      },

      toggleModale3: function() {
        this.revele3 = !this.revele3;
      },
    },
  };

</script>

<template>

  <Header :headers="headers" :scrollToTop="scrollToTop" :scrollToSection="scrollToSection" :active="active" :currentSection="currentSection"/>

  <main>
    <section v-for="(header, index) in headers" :key="header" :id="`section${index}`">
      <div v-if="index === 0" :id="index" class="section-content">
        <div class="presentation">
          <h1>Développeur Web</h1>
          <p>Je suis Machin Chose, développeur Web dans l'entreprise Webatom. Bien que peu expérimenté, je me forme aux nouvelles technologies du Web.</p>
        </div>
        <img src="@/assets/atom.png" alt="atom image" class="presentation-image">
      </div>

      <div v-if="index === 1" class="creations section-content" :id="index">
        <h1>{{ header }}</h1>
        <section class="creation-section">
          <h2 class="title-creation">Mon premier CV</h2>
          <modale v-bind:revele="revele1" v-bind:toggleModale="toggleModale1" v-bind:imageSrc="imageSrc[0]">
          <h2 class="modal-title">Mon premier CV</h2>
          <time datetime="20/09/2024" class="modal-time">Date: 20/09/2024</time>
          <p class="modal-tech">Technologies : HTML5, CSS3</p>
          <a href="https://github.com/BushepII/cv.git" target="_blank" class="modal-link">Lien vers le document</a>
          </modale>
          <button v-on:click="toggleModale1"><img src="@/assets/cv.png" alt=""></button>
        </section>
        
        <section class="creation-section">
          <h2 class="title-creation">Mon premier Cahier des Charges</h2>
          <modale v-bind:revele="revele2" v-bind:toggleModale="toggleModale2" v-bind:imageSrc="imageSrc[1]">
          <h2 class="modal-title">Mon premier Cahier des Charges</h2>
          <time datetime="20/09/2024" class="modal-time">Date: 20/09/2024</time>
          <p class="modal-tech">Technologies : LaTeX</p>
          <a href="" target="_blank" class="modal-link">Lien vers le document</a>
          </modale>
          <button v-on:click="toggleModale2"><img src="@/assets/cahier_charge.png" alt=""></button>
        </section>

        <section class="creation-section">
          <h2 class="title-creation">Espace de commentaires dynamique</h2>
          <modale v-bind:revele="revele3" v-bind:toggleModale="toggleModale3" v-bind:imageSrc="imageSrc[2]">
          <h2 class="modal-title">Espace de commentaires dynamique</h2>
          <time datetime="20/09/2024" class="modal-time">Date: 20/09/2024</time>
          <p class="modal-tech">Technologies : HTML5, CSS3, JavaScript</p>
          <a href="" target="_blank" class="modal-link">Lien vers le document</a>
          </modale>
          <button v-on:click="toggleModale3"><img src="@/assets/comment_space.png" alt=""></button>
        </section>
      </div>

      <div v-if="index === 2" class="contact section-content" :id="index">
        <h1>{{ header }}</h1>

        <ContactForm />
      </div>

    </section>
    
  </main> 

  <Footer />
</template>

<style scoped>
  main section{
    margin-top: 10%;
    margin-bottom: 10%;
  }

  main section div {
    padding-bottom: 20vh;
  }

  .presentation p {
    color: white;
    font-size: 2em;
  }

  h1{
    scroll-margin-top: 20vh;
    color: white;
    font-size: 6em;
    padding-bottom: 0.5em;
  }

  .title-creation{
    color: white;
    font-size: 4em;
    width: 60%;
    margin-right: 1em;
  }

  #section0 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .presentation-image {
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

  .creation-section {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
  }

  #section2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  
  button:hover {
    cursor: pointer;
    box-shadow: 1em 1em 1em black;
  }

  button img {
    width: 20em;
  }

  .section-content {
    min-height: 100vh;
  }

  .modal-title {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 6em;
  }

  .modal-time {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 2em;
  }

  .modal-tech {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 2em;
  }

  .modal-link {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    font-size: 2em;
    color: black;
    text-decoration: none;
  }

  .modal-link:hover {
    cursor: pointer;
    text-decoration: underline;
  }
</style>