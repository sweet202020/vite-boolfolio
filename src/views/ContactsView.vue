<script>
import { state } from '../state.js';
import axios from 'axios';
export default {
    name: 'ContactsView',
    data() {
        return {
            state,
            name: '',
            email: '',
            message: '',
            success: false,
            loading: false,
            errors: {}
        }
    },

    methods: {
        sendForm() {
            this.loading = true;
            this.errors = {};

            console.log(this.name);
            console.log(this.email);
            console.log(this.message);

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            axios.post(`${this.state.base_api_url}/api/contacts`, data).then(response => {
                this.success = response.data.success;
                console.log(response);
                if (this.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                } else {
                    this.errors = response.data.errors;
                }
                this.loading = false;
            });
        }
    }

}
</script>

<template>
    <div class="container">
        <p>if you are looking for a developer for your company or website, fill out the form, watch a TV series and wait
            for my reply</p>
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model='name' type="text" name="name" id="name" class="form-control" placeholder="mario rossi"
                    aria-describedby="helpId">
            </div>
            <p v-for="(error) in errors.name">
                {{ error }}
            </p>
            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input v-model='email' type="text" name="email" id="email" class="form-control"
                    placeholder="mario.rossi@gmail.com" aria-describedby="helpId">
            </div>
            <p v-for="(error) in errors.email">
                {{ error }}
            </p>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea placeholder="you are so beatiful, I'm looking for a developer for my website"
                    v-model="message" class="form-control" name="message" id="message" rows="3"></textarea>
            </div>
            <p v-for="(error) in errors.message">
                {{ error }}
            </p>
            <div class="d-flex">

                <button type="submit" :disable="loading"><span>{{ loading? 'Sending...': 'Contact Me' }}</span></button>
                <div v-if="success" class="ms-4 mt-2 alert alert-success text-start" role="alert">
                    Messaggio inviato con successo!
                </div>
            </div>
        </form>

    </div>
</template>

<style lang="scss" scoped>
p {
    background-color: #183153;
    padding: 2rem;
    color: #ffe22ec9;
    border: 1 px solid #ffe22ec9;
    border-radius: 1rem;
    box-shadow: 1rem 1rem;
    margin-bottom: 2rem;
}
</style>