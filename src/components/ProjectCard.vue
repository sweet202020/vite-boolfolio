<script>
import { state } from '../state.js'
export default {
    name: 'ProjectCard',
    props: { project: Object },
    data() {
        return {
            state,
            max: 100
        }
    }, methods: {
        getImagePath(path) {
            console.log(path);
            if (path) {
                return state.base_api_url + '/storage/' + path
            }
            return '/img/default.jpg'
        },
        trimBody(text) {
            if (text.length > this.max) {
                return text.slice(0, this.max) + '...'
            }
            return text
        },
    }
}
</script>


<template>
    <div class="col">
        <div class="card ">
            <img class="card-image rounded-top" :src="getImagePath(project.cover_image)" alt="">
            <div class="card-body">
                <h4>{{ project.title }}</h4>
                <p>
                    {{ trimBody(project.description) }}
                </p>
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }">Read
                    More</router-link>
            </div>
            <div class=" card-footer text-muted">
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
</template>


<style lang="scss" scoped>
.card {
    background-color: #183153;
    color: #ffe22ec9;
    box-shadow: 0.7rem 0.7rem;


}

img {
    margin-top: 2rem;
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: contain;
}
</style>