import { createApp } from 'vue'
import App from './App.vue'
import mixins from './mixins'
import router from './router'
import store from './store'
import i18nPlugin from './plugins/i18n'

const app = createApp(App)
app.use(store).use(router).mount('#app')
app.mixin(mixins)

app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

const i18nStrings = {
  en: {
    hi: 'Hello!'
  },
  ko: {
    hi: '안녕하세요!'
  }
}

app.use(i18nPlugin, i18nStrings)
