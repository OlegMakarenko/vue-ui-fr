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

    rename: (context, payload) => {
        console.log("rename", payload)
        context.state.format.send({
            method: "post",
            url: "admin/rename",
            path: "d1/d2",
            class: "AnotherBackendService",
            object: "someObject",
            function: "admin/rename",
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