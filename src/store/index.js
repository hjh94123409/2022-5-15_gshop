
import Vue from "vue";

import Vuex from "vuex";

import msite from "./msite";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        msite
    }
})
