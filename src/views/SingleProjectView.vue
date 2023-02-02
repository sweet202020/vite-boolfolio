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
            <div class="title text-uppercase text-center text-white m-3">
                {{ project.title }}
            </div>
            <div class="d-flex justify-content-center">
                <img v-if="project.cover_image" :src="this.api_base_url + '/storage/' + project.cover_image" alt="">
                <img v-else src='/img/default.jpg' alt="">
            </div>

            <div class="description text-white mt-3 ">
                <span class="text-uppercase">
                    project's description:
                </span>
                <p>
                    {{ project.description }}
                </p>
            </div>

            <div class="details my-5 d-flex justify-content-between">
                <div>
                    <span class="text-uppercase">
                        project's difficulty:
                    </span>
                    {{ project.difficulty }}
                </div>
                <div v-if="project.type">
                    <span class="text-uppercase">
                        project's type:
                    </span>
                    {{ project.type.name }}
                </div>
                <div v-else>Uncategorized</div>
                <template v-if="project.technologies.length > 0">
                    <span class="text-uppercase d-flex">
                        project's technologies:
                        <div class="text-white ms-3" v-for="project in project.technologies">

                            #{{ project.name }}
                        </div>
                    </span>
                </template>
                <div v-else>
                    no technologies
                </div>
            </div>
            <div class="link my-3 d-flex justify-content-around">
                <a :href="project.site_link"><button><span class="text-uppercase">click here for my
                            code</span></button></a>
                <router-link :to="{ name: 'contacts' }"><button><span>contact me!</span></button></router-link>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.title {
    font-size: 30px;
}

.details {
    color: white;
}

img {
    max-width: 100%;
}

span {
    color: #ffe22ec9;
    font-weight: bold;
}
</style>