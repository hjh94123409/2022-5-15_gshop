import Vue from "vue";

import Vuex from "vuex";

import msite from "./msite";

import login from "./login";

import shop from "./shop";

import search from "./search";

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        msite,
        login,
        shop,
        search
    }
})
