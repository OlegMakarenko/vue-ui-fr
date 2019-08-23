import Vue from "vue"
import Vuex from "vuex"
import Format from 'fractal-format-protocol';
import axios from "axios"
import requests from './store/requests'
import { Notification } from 'element-ui';  

const HTTP_BASE_URL = "https://fractal.tools";
const WEB_SOCKET_ENDPOINT = "wss://fractal.tools/ws"
const ws = new WebSocket(WEB_SOCKET_ENDPOINT);

Vue.use(Vuex);

const exampleFetchAPI = (endpoint, body) =>
    new Promise((resolve, reject)=>
        resolve({auth_token: "This is JWT"}) );

function colorPick(){
    var colorSwitch = document.getElementById('colorSwitch');
    var bakcgroundColor = colorSwitch.style.backgroundColor;

    if(bakcgroundColor === '#6ab1c7'){
        colorSwitch.style.backgroundColor = '#8a999f';
    } else {
        colorSwitch.style.backgroundColor = '#6ab1c7';
    }
}

ws.onopen = function(){
    console.log("Соединение установлено");
    ws.send("Соединение установлено");
}

ws.onclose = function(event) {
    if (event.wasClean) {
        console.log('Соединение закрыто чисто');
        ws.send("Соединение закрыто чисто");
    } else {
        console.log('Обрыв соединения');
        ws.send("Обрыв соединения");

    }
    console.log('Код: ' + event.code + ' причина: ' + event.reason);
    ws.send("Обрыв соединения " + 'Код: ' + event.code + ' причина: ' + event.reason);
};

ws.onmessage = function(event) {
    console.log("Получены данные " + event.data);
    ws.send("Получены данные " + event.data);
};

ws.onerror = function(error) {
    console.log("Ошибка " + error.message);
    ws.send("Ошибка " + error.message);
};

export default  new Vuex.Store({
    state:{
        auth_token: null,
        http_endpoint: "http://95.217.9.204:8101",
        currentDeviceList: [],
        tree1Data: [],
        tree2Data: [],
        content: [],
        path: [],
        instances: {},
        isLoading: false,
        infoPanelData: {
            name: ' ',
            activity: "None",
            childrenCount: null,
            info: "No info",
            temp: null
        },
        format: {},
    },

    getters:{
        isLoggedIn: state => state.auth_token != null,
        currentDeviceList: state => state.currentDeviceList,
        tree1Data: state => state.tree1Data,
        tree2Data: state => state.tree2Data,
        content: state => state.content,
        path: state => state.path,
        isLoading: state => state.isLoading,
        infoPanelData: state => state.infoPanelData,
        selectedNode: state => state.infoPanelData,

        getInstance: state => payload => {
            if(state.instances[payload.class] 
            && state.instances[payload.class][payload.object])
                return state.instances[payload.class][payload.object];
            else
                return null;
        },
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
        tree2Data:(state, data)=>{
            Vue.set(state, "tree2Data", data)
        },
        content:(state, data) => {
            Vue.set(state, "content", data);
        },
        path:(state, data) => {
            Vue.set(state, "path", data);
        },
        infoPanelData: (state, data) => {
            console.log("infoPanelData", data)
            Vue.set(state.infoPanelData, "name", data.name);
            Vue.set(state.infoPanelData, "activity", data.data.activity);
            Vue.set(state.infoPanelData, "childrenCount", data.children.length);
            Vue.set(state.infoPanelData, "info", data.data.info);
            Vue.set(state.infoPanelData, "temp", data.data.temperature);
            Vue.set(state.infoPanelData, "id", data.id);
        },

        setFormat: (state) => {
            
        }
    },

    actions:{
        ...requests,

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
            axios.post(context.state.http_endpoint + "/open_node", {
                topic:"open_node",
                data: {
                       treeId: payload.treeId, 
                       nodeId: payload.nodeId,
                    },
                
            })
                .then(res => context.dispatch("PROCESS_RESPONSE", res.data)
                .then(content => context.commit("infoPanelData", content.find( el => el.topic=="doSetContent").data)));
        },

        PROCESS_RESPONSE: (context, payload) => {
            return new Promise((resolve, reject) => {
                context.commit("isLoading", false);
           
                for(var i in payload){
                    console.log(payload);
                    context.dispatch(payload[i].topic, payload[i].data)
                }
                resolve(payload);
            })
        },

        ADD_GROUP: () => {
            console.log("group added");
        },

        NODE_RENAME: (context, payload) => {
            axios.post(context.state.http_endpoint + "/rename_node", {
                topic:"rename_node",
                data: {
                       treeId: 1, 
                       nodeId: payload.nodeId,
                       name: payload.name,
                    },
                
            })
                .then(res => context.dispatch("PROCESS_RESPONSE", res.data)
                .then(content => context.commit("infoPanelData", content.find( el => el.topic=="doSetContent").data)));
        },

        NODE_DELETE: (context) => {
            axios.post(context.state.http_endpoint + "/delete_node", {
                topic:"delete_node",
                data: {
                       treeId: 1, 
                       nodeId: context.getters.selectedNode.id,
                    },
                
            })
                .then(res => context.dispatch("PROCESS_RESPONSE", res.data)
                .then(content => context.commit("infoPanelData", content.find( el => el.topic=="doSetContent").data)));
        },

        NODE_SELECTED: (context, payload) => {
             console.log("Selected node:")
             context.commit("infoPanelData", payload)
        },

        doLogIn: (context, payload) => {
            context.commit("SET_AUTH_TOKEN", payload.token)
        },
        doSetData: (context, payload) => {
            for(var key in payload)
                context.commit(key, payload[key])
        },
        doSetContent: (context, payload) => {
            console.warn("Content", payload)
                context.commit("content", payload)
            setTimeout(()=>context.state.instances["ContentPanel"]["ContentPanel0"].doSetData(payload.children), 500)
            ;
        },
        doSetPath: (context, payload) => {
            context.commit("path", payload)
        },
        doNotification: (context, payload) => {
            Notification.error({
                title: 'Error',
                message: 'This is an error message'
              });
        },

        COLOR_SWITCH:(context)=>{
            colorPick(context)
        },

        onAppLoad: (context, payload) => {
            var format = new Format({
                WebSocketClient: ws,
                httpClient: axios,
                httpBaseUrl: HTTP_BASE_URL,
                instances: context.state.instances
            });
            Vue.set(context.state, "format", format)

            ws.onopen = function(){
                alert('Succesfly')
            }
        },

        getChart: (context, payload) => {
            const dateRangeComponent = context.getters.getInstance({
                class: "DateRange",
                object: "dateRange1"
            });
            const dropDownComponent = context.getters.getInstance({
                class: "DropDown",
                object: "dropDown5"
            });
            
            const dateRange = dateRangeComponent.getValue;
            const filters = dropDownComponent.getvalue;
            
            context.state.format.send({
                method: "post",
                url: "trends/chart",
                path: "d1/d2",
                class: "AnotherBackendService",
                object: "someObject",
                function: "trends/chart",
                data: {
                    dateRange,
                    filters
                }
            })
        },

        createComponent: (context, instance) => {
            if(instance && instance.class){
                var counter = 0;
                let obj = "";
                if(instance.object)
                    obj = instance.object;
                else
                {
                    if(context.state.instances[instance.class])
                        counter = Object.keys(context.state.instances[instance.class]).length;
                    obj = instance.class + counter;
                }
                if(!context.state.instances[instance.class])
                    context.state.instances[instance.class] = {}
                context.state.instances[instance.class][obj] = instance;
            }
            
        }
    }
});