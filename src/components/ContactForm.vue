<script setup>

</script>

<template>
    <form action="">
        <section class="names">
            <label for="firstName">Prénom: </label>
            <input type="text" id="firstName" name="firstName" placeholder="Prénom" required>

            <label for="name">Nom: </label>
            <input type="text" id="name" name="name" placeholder="Nom" required>
        </section>

        <section class="object">
            <label for="object">Objet: </label>
            <input type="text" id="object" name="object" placeholder="Objet" required>
        </section>

        <section class="message">
            <label for="message">Message: </label>
            <textarea ref="textarea" id="object" name="object" placeholder="Message" required></textarea>
        </section>

        <button type="submit" id="contact-button">Envoyer</button>
    </form>
</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        min-width: 80vw;
        justify-content: center;
        align-items: start;
    }

    label {
        padding-right: 1em;
        color: white;
        font-size: 2em;
    }

    input {
        border-radius: 2em;
        border: 0.1em solid black;
        font-size: 2em;
        padding-left: 0.2em;
    }

    section {
        padding-bottom: 2em;
        width: 100%;
        display: flex;
    }

    #firstName {
        margin-right: 2em;
    }

    .message {
        min-height: 20vh;
    }

    textarea {
        min-width: 80%;
        min-height: 100%;
        border-radius: 1em;
        border: 0.1em solid black;
        font-size: 2em;
        padding-left: 0.5em;
        box-sizing: border-box;
    }

    #contact-button {
        min-height: 10vh;
        min-width: 10vw;
        align-self: center;
        border: 0.1em solid black;
        border-radius: 1em;
        font-size: 2em;
    }

    #contact-button:hover {
        cursor: pointer;
        opacity: 0.6;
    }
</style>