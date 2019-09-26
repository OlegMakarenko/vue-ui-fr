import axios from "axios"
import Format from 'fractal-format-protocol'
import Vue from "vue"
import Vuex from "vuex"
import { Notification } from 'element-ui';


Vue.use(Vuex);

const HTTP_BASE_URL = "http://vega-test.fractal.tools/request";
const WEB_SOCKET_ENDPOINT = "ws://vega-test.fractal.tools/ws"
const ws = new WebSocket(WEB_SOCKET_ENDPOINT);

export default {
    LOG_IN: (context, payload) => {
        return new Promise((resolve, reject)=>{
            context.commit("isLoading", true);
            const body = JSON.stringify(payload);

            context.state.format.send({
                method: "post",
                url: "/",
                path: "accounts/user",
                class: "Auth",
                object: "a1",
                function: "Signin",
                data: {
                    __password__: payload.password,
                    __email__: payload.email,
                    }
                }) .then(res => context.dispatch("RESPONSE_REQUEST", res.data))
                resolve()
            }
        );
    },

    DEVICE_INFO: (context, payload) => {
        context.state.format.send({
            method: "post",
            url: "/",
            path: "realtime/user",
            class: "Realtime",
            object: "realtime",
            function: "LastAllDevData",
            data: {}
        })
        ws.onopen = function(){
            console.log("Установлено соединение по WebSocket");
            ws.send("Соединение установлено");
        };
        
        ws.onclose = function(event) {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };
        
        ws.onerror = function(error) {
            console.log("Ошибка " + error.message);
        };

        ws.onmessage = function(event){
            console.log('Realtime ' + event.data);
            
            var wsData = JSON.parse(event.data);

            var parsedData = {};
            if(wsData 
                && wsData.calls 
                && wsData.calls[0] 
                && wsData.calls[0].Class 
                && wsData.calls[0].Class.obj
                && wsData.calls[0].Class.obj.Func
                && wsData.calls[0].Class.obj.Func.data
            )
            {
                parsedData = wsData.calls[0].Class.obj.Func.data
            }

            context.commit("deviceData", parsedData);
        }
    },

    changeCurrentTree:({commit, getters, context}, treeNumber) => { //формируем запрос для дерева устройств()
        commit("currentTree", treeNumber);
        let content = [];
        if(treeNumber === 1 && getters.tree1Data)
            content = getters.tree1Data.children;
        else
        if(treeNumber === 2 && getters.tree2Data)
            content = getters.tree2Data.children;
        commit("content", content);
    },

    currentTree:(context, payload) => { //формируем запрос для дерева устройств()
        var currentTree = context.state.currentTree
        var tree1Data = context.getters.tree1Data
        var tree2Data = context.getters.tree2Data

        if(currentTree === 1){
            context.commit('content', tree1Data)
            console.warn("TREE1")
        } else if (currentTree === 2){
            context.commit('content', tree2Data)
            console.warn("TREE2")
        }
    },

    doNotification: (context, payload) => {
        Notification({
            message: payload.message,
            type: payload.type
            });
    },

    addDeviceGroup:(context, payload) => { //формируем запрос для дерева устройств()
        const name = context.getters.name;
        context.state.format.send({
            method: "post",
            url: "/",
            path: "devices/user",
            class: "Devices",
            object: "devices",
            function: "UpdateGroupNameInGroupHierarchy",
            data: {
                "id": "00",
                name: payload.name,
                "object": "vega",
                "description": "Это спальня",
                "owner": 2,
                "parent": "0"

            }
        }).then(res => context.dispatch("RESPONSE_REQUEST", res.data).then(context.commit("name")));
    },

    // getManageTree:(context, payload) => { //формируем запрос для дерева устройств()
    //     context.state.format.send({
    //         method: "post",
    //         url: "/",
    //         path: "devices/user",
    //         class: "Devices",
    //         object: "devices",
    //         function: "GetOwnerDevicesHierarchy",
    //         data: {
    //             "owner": 2
    //         }
    //     }).then(res => context.commit("manageTree", res.data));
    // },

    RESPONSE_REQUEST: (context, payload) => {
        return new Promise((resolve, reject) => {

            context.commit("isLoading", false);
            
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

    OPEN_NODE: (context, node) => {

        if(node.children && node.children.length > 0){
            context.commit('content', node.children)         
        }       

            console.warn('node clcick: ', node)
    },

    SHOW_NODE: (context, node) => {
        context.commit('content', node)            
        console.warn('SHOW NODE CLICK: ', node)
    },

    SWITCH_CONTENT: (context, payload) => {
        context.commit('contentType', payload)
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