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
})

const app: any = createApp(App)


app.config.performance = true

app.use(i18n)
app.use(store)

app.mount('#app')


