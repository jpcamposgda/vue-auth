import Vuex from 'vuex';
import Vue from 'vue'


Vue.use(Vuex)

const estado = {
    toke:null,
    usuario: {}


}

export default new Vuex.Store({

    state: estado
})