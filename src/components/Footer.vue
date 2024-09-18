<script setup>
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
</script>

<template>
  <footer>
    <div class="row">
      <a href="https://github.com/BushepII" target="_blank"><img src="../assets/github_icon.png" alt="github icon"></a>
      <a href="https://fr.linkedin.com/" target="_blank"><img src="../assets/linkedin_icon.png" alt="linkedin icon"></a>
    </div>
  </footer>
</template>

<style scoped>
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
</style>
