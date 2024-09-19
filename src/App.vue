<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import { ref, onMounted } from 'vue'

  function displayLastUpdateTime() {
    const x = document.lastModified;
    const footer = document.getElementsByTagName("footer")[0];
    const time = document.createElement("time");
    const content = document.createTextNode("Last Update time : " + x);
    time.setAttribute("datetime", new Date(x).toISOString());
    time.appendChild(content);
    footer.appendChild(time);
  }

  document.addEventListener("DOMContentLoaded", displayLastUpdateTime);


  function scrollToTop() {
    const x = window.scrollX;
    window.scrollTo({
        top: 0,
        left: x,
        behavior: 'smooth' // Enables smooth scrolling
    });
  }

  function scrollToSection(id){
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - window.innerHeight*0.15,
        behavior: 'smooth',
      });
    }
  };

  const headers = [
    'Présentation',
    'Créations',
    'Contact'
  ];

  const currentSection = ref('');

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          currentSection.value = entry.target.getAttribute('id');
        }
      });
    });
    document.querySelectorAll('section h1').forEach((section) => {
      observer.observe(section);
    })
  });
</script>

<template>
  <!--
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
-->

  <header>
    <button @click="scrollToTop">
      <img src="./assets/atom.png" alt="atom image">
    </button>
    <nav>
      <a v-for="(header, index) in headers" :key="header" :href="`#${index}`" :class="{ active: index == currentSection}" @click.prevent="scrollToSection(`section${index}`)">{{ header }}</a>
    </nav>
  </header>

  <main>
        <section class="fade-scroll"></section>
        <section v-for="(header, index) in headers" :key="header" :id="`section${index}`">
          <h1 :id="index">{{ header }}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis ultricies turpis, ut maximus urna cursus quis. Donec vel auctor ex, eu vehicula felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed in leo a augue commodo vestibulum eget in elit. Donec commodo ultrices enim a imperdiet. Integer et fringilla justo. Morbi fermentum tellus at odio consectetur sagittis. Phasellus vehicula a urna eget euismod. Nam et nibh vitae est pulvinar ultricies. Phasellus feugiat magna eleifend enim bibendum, vel mattis nisi cursus. Nam vel nisl quam.

Nunc blandit mi nisi, sed suscipit eros accumsan at. Morbi in leo scelerisque, sagittis augue id, pharetra tortor. Nam auctor maximus ex, non fermentum quam pretium quis. Aenean sed nibh orci. In hac habitasse platea dictumst. Morbi ipsum libero, condimentum eget nisl eget, viverra tincidunt elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam vitae aliquam nibh, vel tincidunt odio. Pellentesque iaculis odio vulputate commodo tristique. Sed porta pharetra tincidunt. Nam quis ante ut nibh malesuada facilisis.

In hac habitasse platea dictumst. Suspendisse laoreet lacus leo, nec posuere erat placerat eu. Maecenas bibendum vulputate enim non posuere. Duis at mi pretium, faucibus nibh eget, hendrerit mauris. Donec id est vestibulum, consectetur velit at, accumsan mi. Nulla faucibus velit sit amet augue sollicitudin, a convallis justo ultrices. Curabitur molestie pulvinar magna, id viverra tortor dictum nec. Vivamus imperdiet neque id faucibus ullamcorper.

Cras eu tincidunt lorem. Phasellus nec congue urna. Nunc feugiat, massa non condimentum aliquam, lorem velit aliquam nisi, quis feugiat augue nisl ut augue. Pellentesque et tristique tellus. Etiam rutrum porta turpis, et pharetra metus gravida sed. Cras et risus eget odio tristique volutpat. Ut aliquet metus cursus, dapibus sem nec, varius lorem.

Quisque eu felis lorem. In hac habitasse platea dictumst. Pellentesque dictum auctor congue. Vestibulum tincidunt ultrices pretium. Morbi velit augue, mollis laoreet ante vel, posuere lacinia velit. Nunc ligula velit, facilisis in ex nec, mattis accumsan nibh. Proin molestie, arcu sed malesuada viverra, orci felis pulvinar dolor, quis tincidunt quam libero quis arcu. Curabitur finibus nunc eget nisl aliquet viverra. Duis sed aliquam lacus. Nam bibendum libero tortor, ut ornare massa faucibus id.

Suspendisse in neque ipsum. Morbi iaculis varius quam, nec sagittis velit ullamcorper ac. Quisque eros velit, ullamcorper a vestibulum id, auctor sit amet quam. Nulla et neque eu enim tincidunt fermentum at ut quam. Nunc commodo semper faucibus. Vivamus metus augue, iaculis quis libero in, sagittis condimentum justo. Aenean tortor orci, varius a dui eget, rhoncus pulvinar ipsum. Nullam porttitor arcu dignissim mauris finibus posuere. Etiam et placerat orci. Proin non nisi vitae dolor pharetra rutrum. Suspendisse dignissim erat vel odio molestie, et fringilla ligula placerat. Aenean efficitur tempor dapibus. Integer a metus dignissim, tincidunt lectus eget, sagittis sapien. Nulla imperdiet orci arcu, sed hendrerit dui sollicitudin non. Praesent sit amet dolor eget purus aliquet vehicula sed vel tellus.

Suspendisse eget eleifend velit. Fusce dolor est, mattis non dapibus in, tincidunt at elit. Donec vitae sollicitudin lorem. Maecenas et semper enim. Integer at tellus orci. Quisque nisl ex, blandit vel lacus vitae, dapibus ornare ex. Integer id urna non dui laoreet dictum non sed enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Donec eget ullamcorper massa, egestas vehicula risus. Proin at metus lacus. Nunc malesuada egestas nisi nec auctor. Donec malesuada ipsum quis nisi hendrerit interdum. Quisque pellentesque sit amet eros facilisis pretium. Nunc a convallis leo. Mauris aliquam libero et massa rhoncus egestas.

Etiam luctus vulputate mauris, eget laoreet lectus ultricies sit amet. Nam tempus pharetra imperdiet. Nulla volutpat massa et nulla feugiat gravida. Aenean efficitur facilisis tellus eu pulvinar. Duis elementum pulvinar sem sit amet convallis. Proin quis maximus odio, ac posuere magna. Quisque libero ligula, tincidunt ac maximus at, vehicula at nisi. Duis quis mattis mauris, sed malesuada dui. Duis sed lectus enim. Mauris imperdiet nulla odio, ac laoreet nisi vulputate non. Mauris erat libero, elementum et sagittis sit amet, feugiat sed nunc. Sed eu vestibulum tortor.

Suspendisse sed pellentesque nisi. Pellentesque quis dapibus nunc. Proin dui ipsum, vulputate ut sodales id, cursus quis elit. Nulla laoreet orci massa, at posuere augue varius sit amet. Donec egestas risus id nisl facilisis, vitae vulputate metus rhoncus. Morbi posuere nunc mauris, id rutrum erat tristique eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis nec velit fermentum, tempus nulla ac, cursus enim. Suspendisse potenti. Phasellus efficitur ornare nulla, sit amet vehicula tortor bibendum eu. Nam ullamcorper dui posuere nisi porta, eget placerat diam mollis. Donec bibendum lacus eu porta maximus. Donec ut libero elementum, placerat augue auctor, luctus est. In pulvinar tortor ac rutrum semper. Phasellus sollicitudin ante ut justo viverra suscipit. Cras efficitur purus ac risus mollis, sollicitudin efficitur libero suscipit.

Aliquam erat volutpat. Quisque dictum risus neque, eget vehicula arcu suscipit et. Vestibulum efficitur mauris purus, in auctor metus dignissim non. Integer euismod sollicitudin ligula in tincidunt. Nullam a ullamcorper ipsum, id lobortis dolor. Aenean vehicula, massa quis eleifend porta, velit justo sodales metus, a vehicula massa lorem in nunc. Curabitur eget massa est. Sed odio diam, pellentesque imperdiet venenatis vel, sollicitudin in nisl. Nunc finibus nisl justo, nec ullamcorper massa sodales eget. Etiam rhoncus volutpat turpis, imperdiet vulputate lacus placerat in. Nullam sed faucibus nibh, id commodo ipsum. Vestibulum purus dolor, sollicitudin vitae feugiat eu, vulputate eu lorem. Sed ante sapien, scelerisque a mattis vitae, rhoncus eu tortor. Sed tristique, velit non accumsan finibus, massa arcu fringilla lacus, tempus auctor erat nunc eget felis.

Morbi vulputate ac dui et ornare. Pellentesque consectetur purus eget ultrices vehicula. Duis vitae finibus purus. Nunc semper quam non nulla convallis, accumsan suscipit ante aliquet. Ut ornare sapien nulla, tempus facilisis enim scelerisque sed. Nam imperdiet ante at risus finibus, non vehicula nunc porttitor. Sed et felis enim. Sed accumsan viverra turpis non imperdiet. Cras ante arcu, condimentum non mattis sit amet, pretium vitae dolor. Pellentesque pulvinar aliquet metus nec feugiat.

Aenean ut mauris sit amet nisi porttitor semper vel a ligula. Mauris vitae sapien enim. Phasellus ac libero metus. Nulla semper velit id ex hendrerit pharetra. Donec vel varius est. Sed eget sapien rutrum, luctus nunc ac, gravida purus. Duis sed pharetra elit. Nam suscipit velit vitae tellus pharetra, eget cursus enim auctor.

Maecenas et tellus elit. Quisque dapibus diam id libero luctus, quis accumsan arcu malesuada. Pellentesque tincidunt dolor sapien, tincidunt luctus nisl euismod non. Sed bibendum egestas fringilla. Ut quis placerat elit, vel laoreet tellus. Maecenas tincidunt molestie est, nec ultricies sapien scelerisque venenatis. Nulla vitae tortor et eros varius pretium. Vivamus non tincidunt nibh. Nunc placerat orci nunc, ut dictum lacus bibendum eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempus purus lorem, id placerat eros auctor vel. Mauris in mi odio. Curabitur a laoreet ligula. Morbi sed augue nunc.

Nam at turpis id elit tincidunt vestibulum. Mauris vulputate nisl non posuere rhoncus. Nam porttitor lacinia justo. Ut tristique, lorem id eleifend molestie, elit nisl tempus sem, id ultrices massa tortor eu justo. Vestibulum eget risus urna. Cras egestas elementum turpis vel pellentesque. Sed imperdiet tortor sit amet gravida sodales. Maecenas sodales ac lacus eget ornare. Sed semper dolor vitae libero ultrices vestibulum a sit amet enim. Praesent convallis sem sit amet ullamcorper eleifend. Vestibulum luctus sem vel euismod luctus. Sed ante est, condimentum sit amet justo eget, ultrices elementum orci. Etiam lobortis scelerisque tortor quis suscipit. Sed et diam quis quam mattis egestas a at enim.

Pellentesque sagittis mi quis neque finibus, non vulputate lectus placerat. Phasellus sed justo non justo condimentum efficitur. Nunc bibendum cursus nibh vel congue. Nulla ac posuere ipsum. Aenean scelerisque porta tortor et viverra. Aliquam erat volutpat. Donec at ligula lacus.

Sed tincidunt sollicitudin tellus, in mollis lorem dictum sed. Quisque auctor, quam in elementum placerat, mi diam tincidunt nibh, ac imperdiet arcu diam a tortor. Etiam lobortis porta velit, sollicitudin tincidunt massa pretium a. Duis a ex luctus, placerat ex in, sollicitudin sem. Aliquam vitae tortor pretium, aliquam est eu, varius mauris. Aliquam blandit ligula sem, a iaculis augue suscipit ut. Proin posuere metus ut massa malesuada ultricies. Suspendisse pellentesque dolor ullamcorper urna viverra, nec scelerisque justo lobortis. Morbi elementum pellentesque rhoncus. Suspendisse nec nisl vitae mi dictum faucibus in ac ipsum. Nulla sit amet ante pellentesque, commodo sem id, dictum justo. Sed dictum lacinia dapibus.

Ut sodales arcu nec quam finibus luctus. Nam non massa mi. Vestibulum pharetra quis ante accumsan malesuada. Morbi in orci tempus, mattis sem nec, placerat enim. Vivamus dignissim elit eu mattis auctor. Phasellus mollis rutrum massa ut venenatis. Fusce accumsan, lorem sed faucibus euismod, mi massa tempus turpis, ut accumsan velit urna non risus. Aliquam sed dui nunc. Sed imperdiet sapien eget lacinia congue. Mauris id felis ac lectus aliquam congue.

Phasellus augue orci, ullamcorper nec feugiat sit amet, dapibus sit amet nibh. Donec volutpat aliquam venenatis. Curabitur commodo, magna et pharetra consectetur, enim felis semper tortor, eget congue sapien ipsum id tortor. Nam finibus malesuada vestibulum. Cras auctor pharetra sem mattis auctor. Sed ullamcorper tellus at urna iaculis faucibus. Quisque eu mauris efficitur, ornare enim a, tincidunt lorem. Vestibulum aliquet tellus ipsum, nec vestibulum ipsum sodales suscipit. Vestibulum tincidunt imperdiet elementum.

Phasellus ullamcorper vel arcu at auctor. Nulla rhoncus auctor urna, ut vulputate elit. Donec tempor risus lorem, eu posuere elit gravida id. Fusce auctor tempor dui euismod molestie. Sed porttitor justo ultricies, mattis diam ac, pharetra elit. Proin ultrices ligula vel pharetra mattis. Aenean rhoncus, velit vel iaculis tempor, sapien nisi facilisis lorem, tincidunt fringilla nulla enim id sapien. Mauris sodales diam at nisi pulvinar tempus. Aliquam mauris sem, varius et quam sed, malesuada iaculis ante. Suspendisse pulvinar ex cursus rhoncus tincidunt. Curabitur felis mi, condimentum quis posuere ut, molestie eu enim. Donec vel tempor nisl. Curabitur iaculis pellentesque dolor a mollis. Fusce id ligula mi. Sed pharetra, dolor vitae porta tincidunt, dui sem mollis metus, at imperdiet ex diam sed ante. Maecenas pretium erat sit amet libero posuere, a vehicula nibh sollicitudin.

Vivamus eleifend, elit nec volutpat varius, nisl eros commodo quam, a hendrerit ipsum purus id felis. Integer malesuada turpis non nisi pharetra hendrerit. Sed ipsum ante, sollicitudin id ultricies eu, aliquam at ante. Pellentesque eget sem vitae tellus fermentum facilisis at eu ligula. Vestibulum vitae risus in ligula malesuada eleifend. Pellentesque cursus mi velit, et commodo dolor blandit in. Integer nisl neque, hendrerit non sem egestas, lacinia egestas nibh. Nam quis sodales mi, at ultricies nisl. Donec neque orci, blandit ut suscipit a, vulputate quis lacus. Quisque auctor libero magna, non bibendum lorem malesuada ac. Sed quis venenatis turpis. Nullam convallis urna ex, a accumsan ex varius in.

Aenean rhoncus in nibh non cursus. Nam fermentum dui in neque tempus, non vehicula justo consectetur. Sed mollis at risus et efficitur. Nullam ornare nisi sed sodales aliquet. Cras varius elit ut leo dapibus venenatis. Cras feugiat vestibulum tellus quis sollicitudin. Integer auctor cursus lobortis. Sed eu dui purus. Maecenas posuere mauris a ex porttitor ornare. Phasellus nisi lorem, aliquet et varius a, convallis quis erat. Phasellus sem odio, pretium et neque ac, vehicula eleifend nunc. Nunc fermentum id lorem id pharetra. Duis laoreet, ipsum non commodo mollis, orci ante iaculis ante, dapibus eleifend leo lacus venenatis dui.

Proin a urna in justo dignissim maximus. Quisque ornare dui lacus, fringilla condimentum lorem tincidunt non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam eget fringilla magna. Ut interdum commodo diam, in aliquet magna malesuada ut. Mauris posuere, massa nec dapibus finibus, ex turpis dapibus ex, vitae lacinia ipsum arcu sed tellus. Donec rhoncus imperdiet ante, in fermentum mauris. Integer accumsan nunc id mi cursus placerat. Sed sed facilisis mi. Aliquam sagittis malesuada magna id mollis. Etiam ultrices iaculis elementum. Proin hendrerit elementum ipsum egestas congue. Phasellus ut consectetur diam. Suspendisse ut leo in mauris convallis ultricies vel in orci. Praesent egestas, tellus tincidunt placerat aliquet, justo ante tincidunt felis, ut imperdiet odio nulla sagittis ex. Fusce vel metus lobortis risus lobortis dignissim sit amet ac.</p>
        </section>
    </main> 

  <footer>
    <div class="row">
      <a href="https://github.com/BushepII" target="_blank"><img src="./assets/github_icon.png" alt="github icon"></a>
      <a href="https://fr.linkedin.com/" target="_blank"><img src="./assets/linkedin_icon.png" alt="linkedin icon"></a>
    </div>
  </footer>
</template>

<style scoped>
  button{
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

    section{
        padding-bottom: 30%;
    }

    img:hover{
    opacity: 0.5;
  }

  img{
    width: 4em;
    height: auto;
  }

  .row{
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
  }

  time{
    text-align: center;
  }

  h1{
    scroll-margin-top: 15vh;
  }

</style>
