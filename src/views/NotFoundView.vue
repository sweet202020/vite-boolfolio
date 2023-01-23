<script>
export default {
    name: 'NotFoundView',
}
</script>
<template>
    <div class="banner">
        <img src="/img/ma_che_dici.jpg" alt="">
        <p>
            page not found error:404
        </p>
        <p>
            ma che dici?
        </p>
        <router-link to="/">go to dashboard</router-link>
    </div>
</template>

<style scoped>
body {

    background-color: black;
}

.banner {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
}
</style>