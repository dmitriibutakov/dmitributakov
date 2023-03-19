export default {
    data() {
        return {
            isMobile: false
        };
    },
    methods: {
        detectWidthScreen() {
            this.isMobile = window.innerWidth <= 800;
        }
    },
    mounted() {
        this.detectWidthScreen();
    }
}
