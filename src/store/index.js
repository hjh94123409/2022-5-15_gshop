import Vue from "vue";

import Vuex from "vuex";

import msite from "./msite";

import login from "./login";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        msite,
        login
    }
})
