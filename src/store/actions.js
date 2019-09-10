import axios from "axios"
import Format from 'fractal-format-protocol'
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const HTTP_BASE_URL = "http://pubgproxy.ddns.net";
const WEB_SOCKET_ENDPOINT = "ws://pubgproxy.ddns.net/ws"
const ws = new WebSocket(WEB_SOCKET_ENDPOINT);

export default {
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

    DEVICE_INFO: (context, payload) => {
        context.state.format.send({
            method: "post",
            url: "/",
            path: "realtime/user",
            class: "Realtime",
            object: "realtime",
            function: "LastDeviceData",
            data: {
                "sensId": 1
            }
        })
        ws.onmessage = function(event){
            console.log('Realtime ' + event.data);
            context.state.wsData = JSON.parse(event.data);
        }
    },

    

    getManageTree:(context, payload) => { //формируем запрос для дерева устройств()
        context.state.format.send({
            method: "post",
            url: "/",
            path: "devices/user",
            class: "Devices",
            object: "devices",
            function: "GetOwnerDevicesHierarchy",
            data: {
                "owner": 2
            }
        }).then(res => context.commit("manageTree", res.data));
    },

    RESPONSE_REQUEST: (context, payload) => {
        return new Promise((resolve, reject) => {
            const calls = payload.calls;
            
            for(var i in calls)
                for(var c in calls[i])
                    for(var o in calls[i][c])
                        for(var f in calls[i][c][o])
                            context.dispatch(f, calls[i][c][o][f])
            console.log("Response from server: ", payload);
            resolve(payload);
        })
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
            .then(content => context.commit("infoPanelData", content.find( el => el.topic=="doSetContent").data))); //еррор который делает дабл клик на компоненты
    },

    PROCESS_RESPONSE: (context, payload) => {
        return new Promise((resolve, reject) => {
            context.commit("isLoading", false);
            for(var i in payload){
                // console.log(payload);
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
        //  console.log("Selected node:")
         context.commit("infoPanelData", payload)
    },

    doLogIn: (context, payload) => {
        context.commit("SET_AUTH_TOKEN", payload.token)
    },

    doSetData: (context, payload) => {
        console.log(payload)
        for(var key in payload)
            context.commit(key, payload[key])
    },
    doSetContent: (context, payload) => {
        console.log("Content", payload)
            context.commit("content", payload)
    },

    doSetPath: (context, payload) => {
        context.commit("path", payload)
    },

    // doNotification: (context, payload) => {
    //     Notification.error({
    //         title: 'Error',
    //         message: 'This is an error message'
    //       });
    // },

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
    },

    // getChart: (context, payload) => {
    //     // const dateRangeComponent = context.getters.getInstance({
    //     //     class: "DateRange",
    //     //     object: "dateRange1",
    //     // });
    //     // const dropDownComponent = context.getters.getInstance({
    //     //     class: "DropDown",
    //     //     object: "dropDown5",
    //     // });
        
    //     // const dateRange = dateRangeComponent.getValue;
    //     // const filters = dropDownComponent.getValue;
        
    //     context.state.format.send({
    //         method: "post",
    //         url: "/",
    //         path: "trends/user",
    //         class: "Trends",
    //         object: "trends",
    //         function: "GetChart",
    //         data: {
    //             "trendsDate": [1567781868, 1567882506],
    //             "trendsFilters": ["vega/1 temperature"]
    //         }
    //     }).then(chartData => context.dispatch("RESPONSE_REQUEST", chartData.data))/*context.commit("chartData", chartData.find( el => el.topic=="doSetData").data))*/
    // },

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
    },

}