<script>
export default {
    name: 'NavBar',
    data() {
        return {
            anchors: [
                {
                    name: 'home',
                    image: false,

                },
                {
                    name: 'project',
                    image: false,

                },
                {
                    name: 'contacts',
                    image: false,

                }
            ]
        }
    }, methods: {
        delayAnchor(url, index) {
            setTimeout(() => {
                window.location.assign('http://localhost:5174/' + url);
            }, 2900);
            console.log(this.anchors[index].image);
            this.anchors[index].image = true
        }
    }
}
</script>
<template>


    <!-- Nav tabs -->
    <ul class="nav flex-column" id="navId" role="tablist">
        <li class="nav-item" v-for="(anchor, index) in anchors">
            <div class="d-flex justify-content-around">
                <img v-show="anchors[index].image" class="shuttle" src="../assets/img/navicelladrink.png" alt="">
                <div class="text-uppercase" @click="delayAnchor(anchor.name, index)">{{ anchor.name }}</div>
                <img v-show="anchors[index].image" src="../assets/img/portale.png" alt="">
            </div>
        </li>


    </ul>

</template>


<style scoped lang="scss">
ul {
    align-items: center;
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    li {
        width: 100%;
        margin: auto;
        margin-bottom: 3rem;

        img {
            width: 150px;

        }

        img.shuttle {
            position: relative;
            animation: shuttle 3s ease-in;
        }

        div {
            div {
                color: purple;

                &:hover {
                    cursor: pointer;
                }
            }
        }
    }
}


@keyframes shuttle {
    0% {
        left: 0;
        top: 0
    }

    100% {
        left: 65%;
        top: 0
    }
}
</style>