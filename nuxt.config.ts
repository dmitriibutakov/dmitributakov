export default defineNuxtConfig({
    title: 'Dmitry Butakov',
    app: {
        head: {
            htmlAttrs: {lang: "en"},
        },
        pageTransition: {name: 'page', mode: "in-out"}
    },

    css: [
        "@/assets/styles/main.scss",
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    fontawesome: {
        component: 'Fa',
        suffix: false,
        icons: {
            solid: true,
            brands: true
        }
    },
    modules: [
        ['@nuxtjs/google-fonts',
            {
                display: 'swap',
                families: {
                    "Montserrat": [100, 300, 400, 500, 600, 700],
                    "VT323": [400]
                }
            }]],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/_variables.scss";',
                },
            },
        },
    },
});
