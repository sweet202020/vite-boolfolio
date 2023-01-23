<script>
import axios from 'axios'
import { state } from '../state.js'
import ProjectCard from './ProjectCard.vue'
export default {
    name: 'ProjectList',
    components: {
        ProjectCard
    },
    data() {
        return {
            state,
            projects: null,
            error: null,
            loading: true,
            max: 100,
        }


    }, methods: {
        getProjects(url) {
            /* faccio la chiamata ajax */
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    console.log(response.data.results.data);
                    this.projects = response.data.results;
                    this.loading = false
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message
                    this.loading = false
                })
        },
        prevPage(url) {
            console.log(url)
            this.getProjects(url)
        },
        nextPage(url) {
            console.log(url)
            this.getProjects(url)
        }

    }, mounted() {
        this.getProjects(state.base_api_url + '/api/projects')
    }
} 
</script>
<template>
    <section class="vue-home pt-5">
        <div class="container">
            <template v-if="projects && !loading">
                <div class="row row-cols-1 row-cols-sm-3 g-4">
                    <ProjectCard :project="project" v-for="project in projects.data"></ProjectCard>
                </div>

                <nav aria-label="Page navigation" class="d-flex justify-content-center pt-5">
                    <ul class="pagination    ">
                        <li class="page-item" v-if="projects.prev_page_url" @click="prevPage(projects.prev_page_url)">
                            <a class="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li class="page-item active" aria-current="page"><a class="page-link" href="#">{{
                            projects.current_page
                        }}</a></li>

                        <li class="page-item" v-if="projects.next_page_url" @click="nextPage(projects.next_page_url)">
                            <a class="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>

            </template>
            <template v-else-if="loading">
                loading.....
            </template>
            <template v-else>
                no projects heres
            </template>
        </div>
    </section>

</template>

<style>

</style>