import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const exampleFetchAPI = (endpoint, body) =>
    new Promise((resolve, reject)=>
        resolve({auth_token: "This is JWT"}) );

export default  new Vuex.Store({
    state:{
        auth_token: null,
    },

    getters:{
        isLoggedIn: state => state.auth_token != null
    },

    mutations:{
        SET_AUTH_TOKEN: (state, token) => {
            state.auth_token = token;
        }
    },

    actions:{
        LOG_IN: (context, payload) => {
            return new Promise((resolve, reject)=>{
                const body = JSON.stringify(payload);
                
                exampleFetchAPI('https://test.fractal.tools/auth', body)
                .then( res=>{
                    context.state.auth_token = res.auth_token;
                    resolve();
                })
                .catch( err => reject(err) );
            });
        }
    }
});