<script>
    import emailjs from '@emailjs/browser';
    import * as VueSpinnerCss from "vue-spinners-css";
    export default {
        name: 'ContactUs',
        data() {
            return {
                firstName: '',
                name: '',
                subject: '',
                message: '',
                loading: false,
                messageSent: false,
                messageNotSent: false,
            }
        },
        methods: {
            sendEmail() {
                this.loading = true;
                emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, this.$refs.form, {
                    publicKey: import.meta.env.VITE_USER_KEY,
                })
                .then(
                () => {
                    console.log('SUCCESS!');
                    this.loading = false;
                    this.messageSent = true;
                    this.$refs.form.reset();
                },
                (error) => {
                    console.log('FAILED...', error);
                    this.loading = false;
                    this.messageNotSent = true;
                },
                );
            },
        },
    };
</script>

<template>
    <form ref="form" action="" @submit.prevent="sendEmail">
        <section class="names">
            <label for="firstName">Prénom: </label>
            <input type="text" id="firstName" name="firstName" placeholder="Prénom" required>

            <label for="name">Nom: </label>
            <input type="text" id="name" name="name" placeholder="Nom" required>
        </section>

        <section class="object">
            <label for="object">Objet: </label>
            <input type="text" id="subject" name="subject" placeholder="Objet" required>
        </section>

        <section class="message">
            <label for="message">Message: </label>
            <textarea ref="textarea" id="message" name="message" placeholder="Message" required></textarea>
        </section>

        <section class="send-message">
            <button type="submit" id="contact-button" value="Send">
                    Envoyer
            </button>
            <p v-if="loading">Sending message...</p>
            <p v-else-if="messageSent">Message sent !</p>
            <p v-else-if="messageNotSent">Message not sent, try again later !</p>
        </section>
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

    .send-message {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .send-message p {
        font-size: 2em;
        color: white;
        padding-left: 2em;
    }
</style>