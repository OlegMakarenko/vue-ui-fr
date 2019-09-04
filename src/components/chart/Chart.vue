<template>
        <div 
            class="chart" 
            v-loading="!ready" 
        >
            <apexcharts 
                v-if="ready && showChart" 
                type="line" 
                height="100%" 
                :options="chartOptions" 
                :series="series" 
                class="chart-canvas"
            ></apexcharts>
            <div 
                v-else 
                style="text-align: center; position: absolute; height: 100%; width: 100%; right: 0px; font-weight: bold"
            >
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="100%" height="100%" viewBox="0 80 600 600" xml:space="preserve">
                    <line fill="none" stroke="#F2F6FC" stroke-width="6" stroke-miterlimit="10" x1="128.074" y1="343.986" x2="253.912" y2="218.147"/>
                    <line fill="none" stroke="#F2F6FC" stroke-width="6" stroke-miterlimit="10" x1="253.912" y1="218.147" x2="318.762" y2="282.997"/>
                    <line fill="none" stroke="#F2F6FC" stroke-width="6" stroke-miterlimit="10" x1="318.762" y1="282.997" x2="471.446" y2="130.313"/>
                    <circle cx="128.073" fill="#F2F6FC" cy="343.986" r="6.712"/>
                    <circle cx="254.073" fill="#F2F6FC" cy="217.986" r="6.712"/>
                    <circle cx="319.073" fill="#F2F6FC" cy="282.986" r="6.712"/>
                    <circle cx="471.073" fill="#F2F6FC" cy="129.986" r="6.712"/>
                    <line fill="none" stroke="#F2F6FC" stroke-width="6" stroke-miterlimit="10" x1="128.074" y1="470.986" x2="253.912" y2="371.147"/>
                    <line fill="none" stroke="#F2F6FC" stroke-width="6" stroke-miterlimit="10" x1="253.912" y1="371.147" x2="318.762" y2="409.997"/>
                    <line fill="none" stroke="#F2F6FC" stroke-width="6" stroke-miterlimit="10" x1="318.762" y1="409.997" x2="471.446" y2="296.313"/>
                    <circle cx="128.073" fill="#F2F6FC" cy="470.986" r="6.712"/>
                    <circle cx="254.073" fill="#F2F6FC" cy="370.986" r="6.712"/>
                    <circle cx="319.073" fill="#F2F6FC" cy="409.986" r="6.712"/>
                    <circle cx="471.073" fill="#F2F6FC" cy="295.986" r="6.712"/>
                </svg>
            </div>
            <div 
                v-if="ready && showChart && axesButton" 
                style="position: absolute; top: 3px; right: 150px"
            >
                <el-radio-group v-model="separateAxes" size="mini" @change="redraw()">
                    <el-radio-button :label="false">1</el-radio-button>>
                    <el-radio-button :label="true">N</el-radio-button>
                </el-radio-group>  
            </div>
        </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { setTimeout } from 'timers';

export default {
    props: ["object", "axesButton"],
    
    components: 
    {
        apexcharts: VueApexCharts,
    },

    created()
    {
       //this.$store.dispatch(...)
    },

    data()
    {
        return {  
            separateAxes: false,
            ready: true,
            _chartData: [],
            class: "Chart"
        }
    },


    computed:
    {
        showChart(){
            var chartData = this.chartData;
            return chartData;
        },

        chartData(){
            var chartData = this._chartData;
            if(chartData && chartData.length && chartData.length > 1)
                return chartData;
        },

        chartOptions()
        { 
            return {
                chart: 
                { 
                    animations: {
                        enabled: false,
                        easing: 'easeinout',
                        speed: 800,
                        animateGradually: {
                            enabled: false,
                            delay: 150
                        },
                        dynamicAnimation: {
                            enabled: false,
                            speed: 350
                        }
                    },
                    stacked: false,
                    brush: {
                        enabled: false,
                        target: undefined
                    },
                    foreColor: "#999",
                    dropShadow: {
                        enabled: true,  
                        top: 2,
                        left: 2,
                        blur: 1,
                        opacity: 0.1
                    },
                    fontFamily: 'Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif',
    
                        toolbar: {
                        show: 'toolbar' === true,
                        tools: {
                            download: true,
                            selection: true,
                            zoom: true,
                            zoomin: true,
                            zoomout: true,
                            pan: true,
                            customIcons: []
                        },
                        autoSelected: 'pan' 
                        },
                    
                    
                },
                
                colors: this.colors,
                
                xaxis: this.dateAxis,
                
                yaxis: this.yAxis,
                legend: { show: true, showForSingleSeries: true },
                stroke: {curve: 'smooth', width: 3},
                padding: {
                    left: 30,
                    right: 20
                },
                markers: { size: 3, strokeWidth: 0, },
                tooltip: {
                    x: {
                        format: "dd MMM yyyy HH:mm"
                    },
                },   
            };
        },

        series() 
        {
            var chartData = this.chartData;
            if(chartData && chartData[0])
            {
                var series = [];
                for(var i = 1; i < chartData.length; i++)
                {
                    var data = [];
                    for(var key in chartData[i].value)
                        data.push([
                            getDate(chartData[0].value[key]),
                            1*chartData[i].value[key]
                        ]);

                    var seriesType = 'line';
                    if(chartData[i].chartType)
                        seriesType = chartData[i].chartType;
                    
                    else
                    {
                        const settings = this.seriesSettings.find( f => f.prop == chartData[i].name);
                        if (settings && settings.type)
                            seriesType = settings.type;
                    }   

                    series.push({
                        name: chartData[i].name,
                        type: seriesType,
                        data: data
                    });
                }
                this.redraw()
                return series;
            }
            else
            return [
                {
                    name: "No data",
                    data: [0]
                }
            ]
        },

        dateAxis()
        {
            var chartData = this.chartData;
            if(chartData && chartData[0])
            {
                var dates = [];
                if(chartData[0].type != "text")
                    for(var key in chartData[0].value)
                        dates.push(getDate(chartData[0].value[key]));
                else
                    for(var key in chartData[0].value)
                        dates.push("" + chartData[0].value[key]);

                return { 
                    type: "datetime",
                    labels: {
                        hideOverlappingLabels: true,
                        maxHeight: 210,
                        style: { fontSize: '12px' },
                    },
                    axisBorder: {show: false},
                    axisTicks: {show: false},
                    categories: dates ,
                };
            }
            else
                return { categories: ["No data"] };
        },

        yAxis()
        {
            var chartData = this.chartData;
            if(chartData && chartData[0])
            {
                  
                    
                if(this.separateAxes)
                {
                    var l = chartData.length;
                    var axis = [];
                    for(var i = 1; i < l; i++)
                        axis.push({
                            axisTicks: { show: true },
                            forceNiceScale: true,
                            axisBorder: {
                                show: true,
                                color: this.getColor(i-1)
                            },
                            labels: {
                                style: { color: this.getColor(i-1) }
                            },
                            title: { 
                                text: chartData[i].name, 
                                style: { fontSize: '12px', }
                            }
                        });
                    return axis;
                }
                else
                return {
                    axisTicks: { show: true },
                    forceNiceScale: true,
                    axisBorder: { show: true }  
                }
            }
            
            var v = [
                {
                    axisTicks: {
                        show: false
                    },
                    axisBorder: {
                        show: false,
                        color: this.getColor(0)
                    },
                    labels: {
                        style: {
                        color: this.getColor(0)
                        }
                    },
                    title: {
                        text: "No data"
                    }
                },
            ];

            return v;
        },

        colors()
        {
            var colors = [];
            for(var i=0; i < this.series.length; i++)
                colors.push(this.getColor(i));
            return colors;
        },

        seriesSettings()
        {
            var v = this.chartSeriesSettings;
            return v ? v : [];
        }
    },

    methods:
    {

        doSetData(data){
            this.$set(this, "_chartData", data);
        },

        clear(){
            this.$set(this, "_chartData", null);
        },

        getColor(index)
        {
            var colors = [
                
                "#8e24aa",//purple
                "#039be5",//cyan
                "#e53935",//red
                "#43a047",//green
                "#ffb300",//yellow
                "#546e7a",//grey

                "#3949ab",//blue
                
                "#00897b",//green cyan
                
                "#c0ca33",//lemon
                "#ffb300",//yellow
                "#f4511e",//orange red
                
            ]
            return colors[index];
        },

        getDateValue(value, timestamp, index){},

        redraw()
        {
            this.ready = false;
            setTimeout(()=>{ this.ready = true }, 500);
        },

        getMin(dataType)
        {
            switch(dataType)
            {
                case "hum":
                    return 0;
                    break;
                case "temp":
                    return -20;
                    break;
                case "temp-pos":
                    return 0;
                    break;
                case "lump":
                    return 0;
                    break;
            }
        },
        getMax(dataType){},
    }
}

function getDate(rawDate){
    return rawDate * 1000;
}

</script>

<style lang="scss" scoped>

.chart {
    width: 100%;
    height: 100%;
    padding:5px;
    .chart-canvas{
        width: 100%;
        height: 100%;
        margin-left: 10px;
        .apexcharts-tooltip {
            background: #f3f3f3;
            color: orange;
        }
    }
}

</style>
