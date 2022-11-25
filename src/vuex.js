import Vue from "vue";
import Vuex from 'vuex'; 

Vue.use(Vuex);

const state = {
    email: null
};

const store = new Vuex.Store({
    state,
    //forgetting the current state value:
    getters: {
        email: (state) => {
            return state.email;
        }
    },
    //changing the value of the state:
    actions: {
        email(context, email){
            context.commit('email', email);
        }
    },
    //changed on the mutations: before actions
    mutations: {
        email(state, email){
            state.email = email;
        }
    }

});

export default store;