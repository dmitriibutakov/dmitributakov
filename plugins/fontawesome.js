import {
    faDocker, faHtml5, faJs, faNode, faReact, faSass, faSquareGit, faVuejs
} from '@fortawesome/free-brands-svg-icons'
import {config, library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faHtml5, faJs, faSass, faVuejs, faReact, faSquareGit, faNode, faDocker)
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('fa', FontAwesomeIcon, {})
})
