import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en_translations from '@/locales/en.json'
import pl_translations from '@/locales/pl.json'

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: {
    en: en_translations,
    pl: pl_translations,
  },
});

export default i18n;
