import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex);

const exampleFetchAPI = (endpoint, body) =>
    new Promise((resolve, reject)=>
        resolve({auth_token: "This is JWT"}) );

export default  new Vuex.Store({
    state:{
        auth_token: null,
        http_endpoint: "http://95.216.185.195:8101",
        currentDeviceList: [],
        tree1Data: [],
        tree2Data: [],
        content: [],
        path: [],
        isLoading: false
    },

    getters:{
        isLoggedIn: state => state.auth_token != null,
        currentDeviceList: state => state.currentDeviceList,
        tree1Data: state => state.tree1Data,
        tree2Data: state => state.tree2Data,
        content: state => state.content,
        path: state => state.path,
        isLoading: state => state.isLoading
    },

    mutations:{
        isLoading: (state, v) => {
            console.log(v)
            state.isLoading = v;
        },
        SET_AUTH_TOKEN: (state, token) => {
            state.auth_token = token;
        },
        OPEN_FOLDER: (state, folder) => {
            if(folder.children)
                state.currentDeviceList = folder.children;
        },
        tree1Data:(state, data) => {
            Vue.set(state, "tree1Data", data);
        },
        content:(state, data) => {
            Vue.set(state, "content", data);
        },
        path:(state, data) => {
            Vue.set(state, "path", data);
        },
    },

    actions:{
        LOG_IN: (context, payload) => {
            
            return new Promise((resolve, reject)=>{
                context.commit("isLoading", true);
                const body = JSON.stringify(payload);
                
                axios.post(context.state.http_endpoint + "/log_in", {
                    topic:"log_in",
                    data: {
                           __email__: payload.email, 
                           __password__: payload.password
                        }
                })
                    .then(res => context.dispatch("PROCESS_RESPONSE", res.data))
            });
        },
        OPEN_NODE: (context, payload) => {
            //context.commit("isLoading", true);
            console.log({
                treeId: payload.treeId, 
                nodeId: payload.nodeId
             })
            axios.post(context.state.http_endpoint + "/open_node", {
                topic:"open_node",
                data: {
                       treeId: payload.treeId, 
                       nodeId: payload.nodeId
                    }
            })
                .then(res => context.dispatch("PROCESS_RESPONSE", res.data))
        },
        PROCESS_RESPONSE: (context, payload) => {
    
                context.commit("isLoading", false);
           
            for(var i in payload){
                console.log(payload);
                context.dispatch(payload[i].topic, payload[i].data)
            }
        },
        doLogIn: (context, payload) => {
            context.commit("SET_AUTH_TOKEN", payload.token)
        },
        doSetData: (context, payload) => {
            for(var key in payload)
                context.commit(key, payload[key])
        },
        doSetContent: (context, payload) => {
                context.commit("content", payload)
        },
        doSetPath: (context, payload) => {
            context.commit("path", payload)
        }
    }
});