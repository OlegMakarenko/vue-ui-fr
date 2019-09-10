import Vue from "vue"

export default {
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

    chartData:(state, data) => {
        Vue.set(state, "chartData", data)
    },

    tree1Data:(state, data) => {
        Vue.set(state, "tree1Data", data);
    },
    tree2Data:(state, data)=>{
        Vue.set(state, "tree2Data", data)
    },

    manageTree:(state, data) =>{
        Vue.set(state, "manageTree", data)
    },

    deviceInfo:(state, data) =>{
        Vue.set(state, "deviceInfo", data)
    },

    name:(state, payload)=>{
        console.log("Name of tree", payload)
    },

    children:(state, payload)=>{
        console.log("Children of tree", payload)
    },

    data:(state, data)=>{
        console.log("data of tree", data)
        Vue.set(state, "tree1Data", data)
    },

    content:(state, data) => {
        Vue.set(state, "content", data);
    },
    path:(state, data) => {
        Vue.set(state, "path", data);
    },
    infoPanelData: (state, data) => {
        // console.log("infoPanelData", data)
        Vue.set(state.infoPanelData, "name", data.name);
        Vue.set(state.infoPanelData, "activity", data.data.activity);
        Vue.set(state.infoPanelData, "childrenCount", data.children.length);
        Vue.set(state.infoPanelData, "info", data.data.info);
        Vue.set(state.infoPanelData, "temp", data.data.temperature);
        Vue.set(state.infoPanelData, "id", data.id);
    },
    wsData: (state, data) => {
        Vue.set(state.wsData, "data", data);
    },

    chartData: (state, payload)=>{
        state.chartData = payload;
    },

    trendsDate: (state, payload)=>{
        state.trendsDate = payload;
    },

    trendsDateOptions: (state, payload)=>{
        state.trendsDate = payload;
    },

    trendsFiltersOptions: (state, payload)=>{
        state.trendsFiltersOptions = payload;
    },

    chartDataControl: (state, payload)=>{
        state.chartDataControl = payload;
    },

    trendsDataControl: (state, payload)=>{
        state.trendsDataControl = payload;
    },

    trendsFiltersControl: (state, payload)=>{
        state.trendsFiltersControl = payload;
    },

    trendsFilters: (state, payload) => {
        state.trendsFilters = payload;
    },

    eventsData:(state, payload)=>{
        state.eventsData = payload
    },

    eventsDateRange: (state, payload) => {
        state.eventsDateRange = payload
    },

    sensorId:(state, payload) => {
        state.sensorId = payload
    },

    temperature:(state, payload) => {
        state.temperature = payload
    },
    
    updatePosts(state, posts){
        state.posts = posts
    }
}