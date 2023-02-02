<script>
import 'animate.css';
export default {
    name: "SkillsView",

}
</script>

<template>

    <div class="container">
        <div class="row justify-content-around">
            <div class="col-5">
                <h2>
                    about-me
                </h2>
                <p>
                    I undertook a crash course to become the best coder.
                    I started with markup languages learning how to make layouts, even responsive ones. I approached
                    with javascript and vue.js for the front-end learning the real programming logic.
                    for the back I interact well with the database through mysql and laravel creating interfaces for the
                    admins
                </p>
                <div class="button">
                    <router-link :to="{ name: 'project' }">
                        <button><span>view my projects</span></button>
                    </router-link>

                </div>
            </div>
            <!-- /.col-4 -->
            <div class="col-5">
                <h2>skills</h2>
                <div class="row row-cols-2 cards text-uppercase text-white">
                    <div>
                        html <img src="/img/html.png" alt="">
                    </div>
                    <div>
                        css <img src="/img/css.png" alt="">
                    </div>
                    <div>
                        javascript <img src="/img/js.png" alt="">
                    </div>
                    <div>php
                        <img src="/img/php.png" alt="">
                    </div>
                    <div>mysql
                        <img src="/img/mysql.png" alt="">
                    </div>
                    <div>vue.js
                        <img src="/img/vue.png" alt="">
                    </div>
                    <div>laravel
                        <img src="/img/laravel.png" alt="">
                    </div>
                    <div>boostrap
                        <img src="/img/boostrap.png" alt="">
                    </div>

                </div>
            </div>
            <!-- /.col-8 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->




</template>

<style  lang="scss" scoped>
h2 {
    font-size: 50px;
    font-family: 'Space Mono', monospace;
    color: white;

}

.col-4 {
    p {
        line-height: 2rem;
    }
}

p {
    margin: 2rem 0;
    text-align: justify;
    line-height: 3rem;
    color: white;
    box-shadow: 0.7rem 0.7rem #ffe22ec9;

}


.cards {
    background-color: #183153;
    padding: 1rem;
    border-radius: 1rem;
    border: 2px solid #ffe22ec9;
    margin-bottom: 3rem;



    div {
        border: 2px solid #ffe22ec9;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 0.2rem 0.2rem #ffe22ec9;


    }


}

img {
    max-width: 100%;
    margin-bottom: 1rem;
}
</style>