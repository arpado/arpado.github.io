import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faLinkedinIn, faGithub, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fas)
library.add(faFacebookF)
library.add(faLinkedinIn)
library.add(faGithub)
library.add(faGooglePlusG)



export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})

// Modify the `nuxt.config.ts` file by adding to the `export default defineNuxtConfig()`
// export default defineNuxtConfig({
//   css: [
//     '@fortawesome/fontawesome-svg-core/styles.css'
//   ]
// })