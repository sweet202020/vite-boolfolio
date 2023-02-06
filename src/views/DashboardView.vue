<script>

import NavBar from '../components/NavBar.vue'
import { state } from '../state.js'
import 'animate.css';
export default {
    name: "DashBoardView",
    components: { NavBar },
    data() {
        return {
            state
        }
    }

}
</script>

<template>
    <NavBar></NavBar>
    <div class="banner">
        <p>click here for <br> rick and morty animation</p>
        <img width="200" src="/img/arrow.png" alt="">
    </div>
    <!-- ./banner -->





</template>

<style lang="scss" scoped>
img {

    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);

    filter: invert(1);
}

p {


    margin-left: 5rem;
    font-weight: bold;
    width: 300px;
    color: #662d91;
    background-color: white;
    text-transform: uppercase;
    font-size: 20px;
}

/* div {
    position: relative;
    animation: crystal 3s timing-function;
    animation-iteration-count: infinite;
}

@keyframes crystal {

    0% {
        top: 0;
    }

    100% {
        top: 50%;
    }

} */
</style>