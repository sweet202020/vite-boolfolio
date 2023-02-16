import { reactive } from "vue";
export const state = reactive({
    base_api_url: 'http://127.0.0.1:8000',
    portal: true,
    navbar: false,
    zoomOut: false,
    anchors: [
        {
            name: 'skills',
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
    ],
    delayAnchor(url, index) {
        setTimeout(() => {
            window.location.assign('http://localhost:5174/' + url);
        }, 4500);
        setTimeout(() => {
            this.zoomOut = true
        }, 3700);
        setTimeout(() => {
            this.portal = false

        }, 3700);
        /* console.log(this.anchors[index].image); */
        this.anchors[index].image = true
    },
    displayLogo() {
        this.navbar = true
    }
})