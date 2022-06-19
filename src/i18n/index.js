import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'en-US',
  messages: {
    'en-US': {
        home: 'Home',
        about: 'About',
    },
    'zh-CN': {
        home: '首页',
        about: '关于',
    }
  },
})
