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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quasi, repellendus dolor accusantium
            delectus eum! Tempore dolore quidem velit natus fugit nisi laborum. Quos, dicta praesentium sapiente quidem
            corporis nesciunt rem placeat quis, aperiam vitae ex nobis incidunt quisquam vel reprehenderit illum. Iusto
            dicta est eos earum tempore. Nostrum, corrupti.</p>
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input v-model='name' type="text" name="name" id="name" class="form-control" placeholder=""
                    aria-describedby="helpId">
                <small id="helpId" class="text-muted">Help text</small>
            </div>
            <p v-for="(error) in errors.name">
                {{ error }}
            </p>
            <div class="mb-3">
                <label for="email" class="form-label">email</label>
                <input v-model='email' type="text" name="email" id="email" class="form-control" placeholder=""
                    aria-describedby="helpId">
                <small id="helpId" class="text-muted">Help text</small>
            </div>
            <p v-for="(error) in errors.email">
                {{ error }}
            </p>
            <div class="mb-3">
                <label for="message" class="form-label">message</label>
                <textarea v-model="message" class="form-control" name="message" id="message" rows="3"></textarea>
            </div>
            <p v-for="(error) in errors.message">
                {{ error }}
            </p>
            <button type="submit" :disable="loading">{{ loading? 'Sending...': 'Contact Me' }}</button>
        </form>
        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
        </div>
    </div>
</template>