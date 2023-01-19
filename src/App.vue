<script>

import ProjectCard from './components/ProjectCard.vue'
import NavBar from './components/NavBar.vue'


export default {
    components: {
        ProjectCard,
        NavBar
    },
}
</script>

<template>
    <header id="site_header">
        <NavBar></NavBar>
    </header>
    <!-- /#site_header -->
    <main id="site_main">
        <ProjectCard></ProjectCard>
    </main>
    <!-- /#site_main -->
    <footer id="site_footer">

    </footer>
    <!-- /#site_footer -->
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
