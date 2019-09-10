export default {
    isLoggedIn: state => state.auth_token != null,
    currentDeviceList: state => state.currentDeviceList,
    tree1Data: state => state.tree1Data,
    tree2Data: state => state.tree2Data,
    
    manageTree: state => state.manageTree,
    deviceInfo: state => state.deviceInfo,

    getInstance(){ 
        return state => state.instances
    },

    allPosts(state){
        return state.posts
    },

    chartData: state => state.chartData,
    trendsDate: state=> state.trendsDate,
    trendsDateOptions: state => state.trendsDateOptions,
    trendsFilters: state => state.trendsFilters,
    trendsFiltersOptions: state => state.trendsFiltersOptions,

    chartDataControl: state => state.chartDataControl,
    trendsDataControl: state => state.trendsDataControl,
    trendsFiltersControl: state => state.trendsFiltersControl,

    eventsData: state => state.eventsData,
    eventsDateRange: state => state.eventsDateRange,

    sensorId: state => state.sensorId,
    temperature: state => state.temperature,

    //TREEDATA

    dataTree: state => state.dataTree,
    children: state => state.children,
    data: state => state.data,
    id: state => state.id,
    isRoot: state => state.isRoot,
    name: state => state.name,
    owner: state => state.owner,
    type: state => state.type,

    //TREEDATA

    content: state => state.content,
    path: state => state.path,
    isLoading: state => state.isLoading,
    infoPanelData: state => state.infoPanelData,
    selectedNode: state => state.infoPanelData,
    wsData: state => state.wsData
}