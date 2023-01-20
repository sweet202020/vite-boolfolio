<script>
import axios from 'axios'
export default {
    name: 'ProjectCard',
    data() {
        return {
            projects: null,
            base_api_url: 'http://127.0.0.1:8000',
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
                    this.projects = response.data.results.data;
                    this.loading = false
                })
                .catch(error => {
                    console.error(error)
                    this.error = error.message
                    this.loading = false
                })
        },
        getImagePath(path) {
            console.log(path);
            if (path) {
                return this.base_api_url + '/storage/' + path
            }
            return '/img/placeholder_600.png'
        },
        trimBody(text) {
            if (text.length > this.max) {
                return text.slice(0, this.max) + '...'
            }
            return text
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
        this.getProjects(this.base_api_url + '/api/projects')
    }
} 
</script>
<template>
    <section class="vue-home pt-5">
        <div class="container">
            <template v-if="projects && !loading">
                <div class="row row-cols-1 row-cols-sm-3 g-4">
                    <div class="col" v-for="project in projects">
                        <div class="card border-0 shadow-sm rounded-0 rounded-bottom">
                            <img class="card-image rounded-top" :src="getImagePath(project.cover_image)" alt="">
                            <div class="card-body">
                                <h4>{{ project.title }}</h4>
                                <p>
                                    {{ trimBody(project.description) }}
                                </p>
                                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                                    More</router-link>
                            </div>
                            <div div class=" card-footer text-muted">
                                <div class="type">
                                    <strong>type: </strong>
                                    <span v-if="project.type">
                                        {{ project.type.name }}
                                    </span>
                                    <span v-else>Uncategorized</span>
                                </div>
                                <div class="technologies">
                                    <strong>technologies: </strong>
                                    <template v-if="project.technologies.length > 0">
                                        <span v-for="project in project.technologies">
                                            #{{ project.name }}
                                        </span>
                                    </template>
                                    <template v-else>
                                        <span>No technologies.</span>
                                    </template>
                                </div>
                            </div>

                        </div>
                    </div>
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