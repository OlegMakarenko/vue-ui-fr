export default {
    auth_token: null,
    http_endpoint: "http://95.217.9.204:8101",
    currentDeviceList: [],
    tree1Data: [],
    tree2Data: [],

    manageTree: [],
    deviceInfo:{},

    eventsData: [],
    eventsDateRange:[],

    chartData: [],
    trendsDate: [], //1567781868, 1567882506
    trendsDateOptions: [],
    trendsFilters: [], //"vega/1 temperature"
    trendsFiltersOptions: [],

    chartDataControl:[],
    trendsDataControl: [1567781868, 1567882506],
    trendsFiltersControl: ["vega/1 temperature"],

    sensorId: [],
    temperature: [],

    posts:[],

    content: [],
    path: [],
    instances: [],
    isLoading: false,
    infoPanelData: {
        name: ' ',
        activity: "None",
        childrenCount: null,
        info: "No info",
        temp: null
    },

    wsData:{}
}