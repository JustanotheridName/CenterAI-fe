import Vue from 'vue'
import Vuex from 'vuex'
import { ShortenLinkCardModule } from '@/store/ShortenLinkCard/Module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ShortenLinkCardModule
  }
})
