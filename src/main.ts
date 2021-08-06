import "./firebase";

import {createApp} from 'vue'
import {createI18n} from 'vue-i18n'
import App from './App.vue'
import {store} from "@/store";
import itMessages from "./locales/it.js";
import "swiped-events"

const i18n = createI18n({
    locale: 'it', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        it: {
            ...itMessages
        }
    },
    warnHtmlInMessage: "off"
})

const app: any = createApp(App)


app.config.performance = true

app.use(i18n)
app.use(store)

app.mount('#app')

function calcVH() {
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh * 100}px`);
    document.documentElement.style.setProperty('--vh-1', `${vh}px`);
}


// We listen to the resize event
window.addEventListener('resize', () => {
   calcVH()
});

calcVH();

