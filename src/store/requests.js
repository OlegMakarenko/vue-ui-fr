export default {
    getChart: (context, payload) => {       
        const trendsDate = context.getters.trendsDate;
        var formattedDate = [];
        if(trendsDate) {
            formattedDate[0] = Math.round(trendsDate[0] / 1000);
            formattedDate[1] = Math.round(trendsDate[1] / 1000);
        }
        else
            formattedDate = [...trendsDate];
        const trendsFilters = context.getters.trendsFilters;
        
        context.state.format.send({
            method: "post",
            url: "/",
            path: "trends/user",
            class: "Trends",
            object: "trends",
            function: "GetChart",
            data: {
                trendsDate: formattedDate,
                trendsFilters
            }
        }).then(chartData => context.dispatch("RESPONSE_REQUEST", chartData.data))
    },

    getEventData:(context, payload) => {
        const eventsDateRange = context.getters.eventsDateRange;
        var formattedDate = [];
        if(eventsDateRange) {
            formattedDate[0] = Math.round(eventsDateRange[0] / 1000);
            formattedDate[1] = Math.round(eventsDateRange[1] / 1000);
        }
        else
            formattedDate = [...eventsDateRange];

        context.state.format.send({
            method: "post",
            url: "/",
            path: "events/user",
            class: "EventManager",
            object: "manager",
            function: "GetPagingEventsInTimePer",
            data: {
                "eventsCurrentPage": 1,
                eventsDateRange: formattedDate
            }
        }).then(eventsData => context.dispatch("RESPONSE_REQUEST", eventsData.data))
    },

    getTemperature:(context, payload) => {
        const temperature = context.getters.temperature;
        const sensId = context.getters.sensorId;
        context.state.format.send({
            method: "post",
            url: "/",
            path: "mode-controller/user",
            class: "ModeController",
            object: "controller",
            function: "setTemperature",
            data: {
            "object": "vega",
            "sensorId": sensId,
            temperature
            }
        }).then(temperatureData => context.dispatch("RESPONSE_REQUEST", temperatureData.data))
    },

    lastDeviceData:(context, payload) => {
        context.state.format.send({
            method: "post",
            url: "/",
            path: "realtime/user",
            class: "Realtime",
            object: "realtime",
            function: "LastDeviceData",
            data: {
                "sensId": payload.id
            }
        }).then(temperatureData => context.dispatch("RESPONSE_REQUEST", temperatureData.data))
    },

    getRelay:(context, payload) => {
        const currentState = context.getters.relayState

        var currentRelay;
        if(currentState) {
            currentRelay = Math.round(currentState); // 1
        }
        else
        currentRelay = Math.round(currentState); // 0

        context.state.format.send({
            method: "post",
            url: "/",
            path: "mode-controller/user",
            class: "ModeController",
            object: "controller",
            function: "switchRelay",
            data: {
            "object": "vega",
            "sensorId": 1,
            currentState:currentRelay, //присвоение значения
            }
        }) 
    },

    getDeviceById: (context, payload) => {
        return context.state.format.send({
            method: "post",
            url: "/",
            path: "devices/user",
            class: "Devices",
            object: "dev",
            function: "ConfirmDev",
            data: {
                "datId": payload.id
            }
        })
            .then(res => context.dispatch("RESPONSE_REQUEST", res.data))
            .then(() => context.dispatch("getTreeGroup"))
            .then(() => context.dispatch("getTreeDevices"))
            .then(() => context.dispatch("updateContent")) //upload content when deleting device
    },

    removeDeviceById: (context, payload) => {
        context.state.format.send({
            method: "post",
            url: "/",
            path: "devices/user",
            class: "Devices",
            object: "dev",
            function: "RemoveDev",
            data: {
                "datId": payload.selectedId
            }
        })
            .then(res => context.dispatch("RESPONSE_REQUEST", res.data))
            .then(() => context.dispatch("getTreeDevices")) //upload tree when deleting file
            .then(() => context.dispatch("getTreeGroup")) //upload tree when deleting file
            .then(() => context.dispatch("updateContent")) //upload content when deleting device

            // .then(() => context.dispatch("doSetContent")) //upload content when deleting device
            
    },

    getChartControl: (context, payload) => {
        const trendsDate = context.getters.trendsDataControl
        const trendsFilters = context.getters.trendsFiltersControl
        context.state.format.send({
            method: "post",
            url: "/",
            path: "trends/user",
            class: "Trends",
            object: "trends",
            function: "GetChart",
            data: {
                trendsDate,
                trendsFilters
            }
        }).then(res => context.dispatch("RESPONSE_REQUEST", res.data))
    },

    getFilterOptions:(context, payload) => {       
        context.state.format.send({
            method: "post",
            url: "/",
            path: "trends/user",
            class: "Trends",
            object: "trends",
            function: "GetFiltrOptions",
            data: {}
        }).then(res => context.dispatch("RESPONSE_REQUEST", res.data))
    },

    getTreeGroup: (context, payload) => {
        return context.state.format.send({
            method: "post",
            url: "/",
            path: "trees/user",
            class: "Trees",
            object: "trees",
            function: "GetGroupHierarchy",
            data: {
                "owner": 2
            }
        }).then(dataTreeGroup => context.dispatch("RESPONSE_REQUEST", dataTreeGroup.data));
    },

    getTreeGroupVisible: (context, payload) => { //kostyl`
        context.state.format.send({
            method: "post",
            url: "/",
            path: "trees/user",
            class: "Trees",
            object: "trees",
            function: "GetGroupHierarchy",
            data: {
                "owner": 2
            }
        }).then(dataTreeGroup => context.dispatch("RESPONSE_REQUEST", dataTreeGroup.data));
    },
    
    getTreeDevicesVisible: (context, payload) => { //kostyl`
        context.state.format.send({
            method: "post",
            url: "/",
            path: "trees/user",
            class: "Trees",
            object: "trees",
            function: "GetOwnerDevicesHierarchy",
            data: {
                "owner": 2
            }
        }).then(dataTreeDevices => context.dispatch("RESPONSE_REQUEST", dataTreeDevices.data))
    },

    getTreeDevices: (context, payload) => {
        return context.state.format.send({
            method: "post",
            url: "/",
            path: "trees/user",
            class: "Trees",
            object: "trees",
            function: "GetOwnerDevicesHierarchy",
            data: {
                "owner": 2
            }
        }).then(dataTreeDevices => context.dispatch("RESPONSE_REQUEST", dataTreeDevices.data))
    },

    addGroup: (context, payload) => {
        console.log("addGroup", payload)
        context.state.format.send({
            method: "post",
            url: "admin/addGroup",
            path: "d1/d2",
            class: "AnotherBackendService",
            object: "someObject",
            function: "admin/addGroup",
            data: {
                name: payload.name,
                id: '0'
            }
        })
    },
}



///вариант 1
///Данные для запроса берутся с разных компонентов
///methods:{
//     onLoad(){
//         this.$store.dispatch("getTreeGroup")
//     }
// }
///Чтобы получить данныe из компонента context.getInstance({class: <name>, object: <name>}).getData();


///вариант 2
///Данные для запроса передаются в экшн
///methods:{
//     onclick(){
//         var name = this.name;  //данные для запроса
//         var id = this.id;        //данные для запроса
//         this.$store.dispatch("rename", {name, id})
//     }
// }