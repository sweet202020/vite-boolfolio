<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
    components: {
        HelloWorld,

    }, data() {
        return {
            projects: null,
            base_api_url: 'http://127.0.0.1:8000',
            error: null,
            loading: true
        }


    }, methods: {
        getProjects(url) {
            /* faccio la chiamata ajax */
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.results

                })
                .catch(err => {
                    console.error(err.message)
                    this.error = err.message

                })
        }
    }, mounted() {
        this.getProjects(this.base_api_url + '/api/projects')
    }
}
</script>

<template>
    <header id="site_header"></header>
    <!-- /#site_header -->
    <main id="site_main"></main>
    <!-- /#site_main -->
    <footer id="site_footer">

    </footer>
    <!-- /#site_footer -->
</template>

<style lang="scss">
@use './styles/general.scss';

.vue-home {
    color: #2c3e50;
    background: #181818;
    transition: color 0.5s, background-color 0.5s;
    line-height: 1.6;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
