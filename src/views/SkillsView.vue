<script>
import 'animate.css';
export default {
    name: "SkillsView",

}
</script>

<template>

    <div class="container">
        <div class="row justify-content-around">
            <div class="col-4">
                <h1 class="text-center">
                    My Skills
                </h1>
                <p>
                    I undertook a crash course to become the best coder.
                    I started with markup languages learning how to make layouts, even responsive ones. I approached
                    with javascript and vue.js for the front-end learning the real programming logic.
                    for the back I interact well with the database through mysql and laravel creating interfaces for the
                    admins
                </p>
            </div>
            <!-- /.col-4 -->
            <div class="col-8">
                <p class="ms-3">Front-end</p>
                <div class="line_default">
                    <div class="box green"></div>
                </div>
                <p class="ms-3">Back-end</p>
                <div class="line_default">
                    <div class="box black"></div>
                </div>
                <p class="ms-3">Vue.js</p>
                <div class="line_default">
                    <div class="box yellow"></div>
                </div>
                <p class="ms-3">Laravel</p>
                <div class="line_default">
                    <div class="box orange"></div>
                </div>


                <div class="row">
                    <div class="col-6">
                        <div class="card">
                            <h2>
                                Front-End Technology
                            </h2>
                        </div>
                    </div>
                    <!-- /.col-6 -->
                    <div class="col-6">
                        <div class="card">
                            <h2>
                                Back-End Technology
                            </h2>
                        </div>
                    </div>
                    <!-- /.col-6 -->
                </div>
            </div>
            <!-- /.col-8 -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container -->




</template>

<style  lang="scss" scoped>
h1 {
    font-size: 60px;
    font-family: 'Space Mono', monospace;
    color: white;
}

.col-4 {
    p {
        line-height: 2rem;
    }
}

p {
    color: white;
}

.line_default {
    margin-bottom: 3rem;
    margin-left: 2rem;
    height: 6px;
    width: 700px;
    background-color: #ffefef61;
}

div {



    .black {
        background-color: black;
        position: relative;
        animation: skills-back 0.5s;
        animation-fill-mode: both
    }

    .green {
        background-color: green;
        position: relative;
        animation: skills-front 1s;
        animation-fill-mode: both
    }

    .yellow {
        background-color: #ffe003;
        position: relative;
        animation: skills-vue 1.2s;
        animation-fill-mode: both
    }

    .orange {
        background-color: orange;
        position: relative;
        animation: skills-laravel 1.5s;
        animation-fill-mode: both
    }

    .box {
        width: 6px;
        height: 6px;
    }

    @keyframes skills-front {
        0% {
            width: 10px;
        }

        100% {
            width: 600px;

        }
    }

    @keyframes skills-back {
        0% {
            width: 10px;
        }

        100% {
            width: 550px;

        }
    }

    @keyframes skills-vue {
        0% {
            width: 10px;
        }

        100% {
            width: 650px;

        }
    }

    @keyframes skills-laravel {
        0% {
            width: 10px;
        }

        100% {
            width: 600px;

        }
    }
}
</style>