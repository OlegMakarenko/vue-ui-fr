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
        // const sensorId = context.getters.sensorId;
        const temperature = context.getters.temperature;

        var formattedDate = [];
        if(temperature) {
            formattedDate[0] = Math.round(temperature[0] + 1);
            formattedDate[1] = Math.round(temperature[1] + 1);
        }
        else
            formattedDate = [...temperature];

        context.state.format.send({
            method: "post",
            url: "/",
            path: "mode-controller/user",
            class: "ModeController",
            object: "controller",
            function: "setTemperature",
            data: {
            "object": "vega",
            "sensorId": 1,
            temperature
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
        context.state.format.send({
            method: "post",
            url: "/",
            path: "devices/user",
            class: "Devices",
            object: "devices",
            function: "GetGroupHierarchy",
            data: {
                "owner": 2
            }
        }).then(dataTreeGroup => context.dispatch("RESPONSE_REQUEST", dataTreeGroup.data));
    },

    getTreeDevices: (context, payload) => {
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
        }).then(dataTreeDevices => context.dispatch("RESPONSE_REQUEST", dataTreeDevices.data))
    },

    getDeviceInfo: (context, payload) => {
        context.state.format.send({
            method: "post",
            url: "/",
            path: "realtime/user",
            class: "Realtime",
            object: "realtime",
            function: "LastDeviceData",
            data: {
                sensId: "d342f214"
            }
        })
    },

    

    rename: (context, payload) => {
        console.log("rename", payload)
        context.state.format.send({
            method: "post",
            url: "",
            path: "d1/d2",
            class: "AnotherBackendService",
            object: "someObject",
            function: [],
            data: {
                name: payload.name,
                id: payload.nodeId
            }
        })
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