<script>


import NavBarPrimary from './components/NavBarPrimary.vue';


export default {
    components: {

        NavBarPrimary

    },
}
</script>

<template>
    <header id="site_header">
        <NavBarPrimary></NavBarPrimary>
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
