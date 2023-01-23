<script>
import axios from 'axios';
export default {
    name: 'SingleProject',
    data() {
        return {
            project: null,
            loading: true,
            api_base_url: 'http://127.0.0.1:8000',

        }
    }, mounted() {
        const url = this.api_base_url + '/api/projects/' + this.$route.params.slug
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.results);
                    this.project = response.data.results
                    this.loading = false

                } else {
                    this.$router.push({ name: 'not-found' })
                }

            }).catch(err => {
                console.error(err);
            })
    }

}
</script>
<template>
    <div v-if="project">
        <div class="container">
            <div class="title">
                {{ project.title }}
            </div>
            <img v-if="project.cover_image" :src="this.api_base_url + '/storage/' + project.cover_image" alt="">
            <img v-else src='/img/default.jpg' alt="">
            <div class="description">
                {{ project.description }}
            </div>
            <div class="details d-flex justify-content-between">
                <div>
                    {{ project.difficulty }}
                </div>
                <span v-if="project.type">
                    {{ project.type.name }}
                </span>
                <span v-else>Uncategorized</span>
                <template v-if="project.technologies.length > 0">
                    <span v-for="project in project.technologies">
                        #{{ project.name }}
                    </span>
                </template>
                <div v-else>
                    no technologies
                </div>
            </div>
        </div>
    </div>

</template>