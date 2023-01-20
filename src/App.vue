<script>

import NavBar from './components/NavBar.vue'


export default {
    components: {
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
        <router-view></router-view>

    </main>
    <!-- /#site_main -->
    <footer id="site_footer">

    </footer>
    <!-- /#site_footer -->
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
