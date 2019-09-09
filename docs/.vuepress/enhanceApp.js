import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VuetifyExtra from '../../src/plugin'
import TreeView from 'vue-json-tree-view'
import '@mdi/font/css/materialdesignicons.css'

export default ({
    Vue,
    options,
    router,
    siteData,
}) => {
    Vue.use(Vuetify)
    options.vuetify = new Vuetify({
        icons: {
            iconfont: 'mdi'
        }
    })
    Vue.use(VuetifyExtra)
    Vue.use(TreeView)
}