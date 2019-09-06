export default {
    getTree: (context, payload) => {
        context.state.format.send({
            method: "post",
            url: "admin/tree",
            path: "d1/d2",
            class: "AnotherBackendService",
            object: "someObject",
            function: "admin/tree",
            data: {}
        })
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

    getEventData:(context, payload) => {
        context.state.format.send({
            method: "post",
            url: "/",
            path: "events/user",
            class: "EventManager",
            object: "manager",
            function: "GetEventsInTimePer",
            data: {
                eventsDateRange: []
            }
        })
    },

    chartData:(context, payload) => {
        context.state.format.send({
            method: "post",
            url: "/",
            path: "trends/user",
            class: "Trends",
            object: "trends",
            function: "GetChart",
            data: {
                "trendsDate": [1484687, 484798798],
                "trendsFilters": ["vega/asfdsf23 temperature"]
            }
        })

        console.log("chartData", payload)
    },

    rename: (context, payload) => {
        console.log("rename", payload)
        context.state.format.send({
            // method: "post",
            // url: "",
            // path: "d1/d2",
            // class: "AnotherBackendService",
            // object: "someObject",
            // function: [],
            // data: {
            //     name: payload.name,
            //     id: payload.nodeId
            // }
            path: "realtime/user",
            calls: 
            [
                {
                    Realtime: {
                        realtime: {
                            LastDeviceData: {
                                sensId: payload.nodeId
                            }
                        }
                    }
                }
            ]
        
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
//         this.$store.dispatch("getTree")
//     }
// }
///Чтобы получить данныe из компонента context.getInstance({class: <name>, object: <name>}).getData();


///вариант 2
///Данные для запроса передаются в экшн
///methods:{
//     onclick(){
//         var name = this.name;  //данные для запроса
//         var id = this.id;        //данные для запроса
//         this.$store.dispatch("rename", {neme, id})
//     }
// }