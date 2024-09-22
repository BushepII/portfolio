<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import Modale from '@/components/Modale.vue';
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  import ContactForm from '@/components/ContactForm.vue';
  import cvImage from '@/assets/cv.png';
  import chargeImage from '@/assets/cahier_charge.png';
  import commentImage from '@/assets/comment_space.png';
  import commentVideo from '@/assets/comment_space.mp4';

  import { scrollToTop, handleScroll, scrollToSection } from '@/components/functions.js';

  const currentSection = ref('');

  let main;
  let animationPaused = ref(false);
  let creations = [];
  let modalButtons = [];

  const radius = 200;
  let angle = 0;

  function animate() {
    if (!animationPaused.value) {
      // Increment the angle to move the image along the circle
      angle += 0.005; // Adjust this value for speed
    }
    
    creations.forEach((creation, index) => {
      const sectionAngle = angle + (index * (2 * Math.PI / creations.length)); // Distribute sections evenly around the circle

      const xPercent = 50 + 20 * Math.cos(sectionAngle); // 50 is half the section width
      const yPercent = 50 + 20 * Math.sin(sectionAngle); // 50 is half the section height

      creation.style.left = `${xPercent}%`;
      creation.style.top = `${yPercent}%`;
    });

    // Loop the animation
    requestAnimationFrame(animate);
  }

  onMounted(() => {
    creations = [
      document.getElementById('creation-section1'),
      document.getElementById('creation-section2'),
      document.getElementById('creation-section3')
    ]

    modalButtons = [
      document.getElementById('modalButton1'),
      document.getElementById('modalButton2'),
      document.getElementById('modalButton3')
    ]

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

    main = document.getElementsByTagName('main');
    document.addEventListener('scroll', handleScroll);

    animate();

    modalButtons.forEach((modalButton) => {
      modalButton.addEventListener('mouseenter', () => {
        animationPaused.value = true;
      });
    });

    modalButtons.forEach((modalButton) => {
      modalButton.addEventListener('mouseleave', () => {
        animationPaused.value = false;
      });
    });
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
        videoSrc: commentVideo,
        videoType: "video/mp4",
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
      <section v-if="index === 0" :id="index" class="section-content presentation">
          <h1>Développeur Web</h1>
          <p>Je suis Machin Chose, développeur Web dans l'entreprise Webatom. Bien que peu expérimenté, je me forme aux nouvelles technologies du Web.</p>
      </section>

      <h1 v-if="index === 1">{{ header }}</h1>
      <section v-if="index === 1" class="section-content creations" :id="index">
        <section id="creation-section1">
          <h2 class="title-creation">Mon premier CV</h2>
          <button v-on:click="toggleModale1" id="modalButton1">
            <img src="@/assets/cv.png" alt="">
          </button>
        </section>
        <modale v-bind:revele="revele1" v-bind:toggleModale="toggleModale1" v-bind:imageSrc="imageSrc[0]">
          <h2 class="modal-title">Mon premier CV</h2>
          <time datetime="20/09/2024" class="modal-time">Date: 20/09/2024</time>
          <p class="modal-tech">Technologies : HTML5, CSS3</p>
          <a href="https://github.com/BushepII/cv.git" target="_blank" class="modal-link">Lien vers le document</a>
        </modale>
        
        <section id="creation-section2">
          <h2 class="title-creation">Mon premier Cahier des Charges</h2>
          <button v-on:click="toggleModale2" id="modalButton2">
            <img src="@/assets/cahier_charge.png" alt="">
          </button>
        </section>
        <modale v-bind:revele="revele2" v-bind:toggleModale="toggleModale2" v-bind:imageSrc="imageSrc[1]">
          <h2 class="modal-title">Mon premier Cahier des Charges</h2>
          <time datetime="20/09/2024" class="modal-time">Date: 20/09/2024</time>
          <p class="modal-tech">Technologies : LaTeX</p>
          <a href="" target="_blank" class="modal-link">Lien vers le document</a>
        </modale>

        <section id="creation-section3">
          <h2 class="title-creation">Espace de commentaires dynamique</h2>
          <button v-on:click="toggleModale3" id="modalButton3">
            <img src="@/assets/comment_space.png">
          </button>
        </section>
        <modale v-bind:revele="revele3" v-bind:toggleModale="toggleModale3" v-bind:imageSrc="imageSrc[2]" :videoSrc="commentVideo" :videoType="videoType">
          <h2 class="modal-title">Espace de commentaires dynamique</h2>
          <time datetime="20/09/2024" class="modal-time">Date: 20/09/2024</time>
          <p class="modal-tech">Technologies : HTML5, CSS3, JavaScript ES2023</p>
          <a href="" target="_blank" class="modal-link">Lien vers le document</a>
        </modale>
      </section>

      <section v-if="index === 2" class="section-content contact" :id="index">
        <h1>{{ header }}</h1>

        <ContactForm />
      </section>

    </section>
  </main> 

  <Footer />
</template>

<style scoped>
  #section0{
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 20%;
    padding-left: 20%;
  }

  #section1 {
    margin-top: 10%;
    margin-bottom: 10%;
    position: relative;
    width: 100%;
    height: 150vh;
  }

  #section2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
  }

  #creation-section1 {
    position: absolute;
    width: 10%;
    height: 10%;
    transform: translate(-50%, -50%);
  }

  #creation-section2 {
    position: absolute;
    width: 10%;
    height: 10%;
    transform: translate(-50%, -50%);
  }

  #creation-section3 {
    position: absolute;
    width: 10%;
    height: 10%;
    transform: translate(-50%, -50%);
  }

  button {
    padding: 0;
    width: 100%;
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
  }

  button:hover {
    cursor: pointer;
    box-shadow: 1em 1em 1em black;
    transform: scale(1.1);
  }

  h2 {
    font-size: 3em;
  }

  .modal-title {
    font-size: 6em;
  }

  .modal-time {
    font-size: 4em;
  }

  .modal-tech {
    font-size: 4em;
  }

  .modal-link {
    font-size: 3em;
  }
</style>