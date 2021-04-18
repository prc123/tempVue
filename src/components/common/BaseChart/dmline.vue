<template>
  <div id="dmline" style="width: 100%;height:100%;" ></div>
</template>

<script>
import * as echarts from "echarts";
import moment from "moment"; 

export default {
  props: {
    dm: {
      type: Array
    }
  },
  data() {
    return {
      myChart: {},
      date :[],
      data:[],
      option: {
 tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '弹幕分布',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 50
    }, {
        start: 0,
        end: 50
    }],
    series: [
        {
            name: '个数',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: []
        }
    ]
      }
    };
  },
  // 指定图表的配置项和数据
  methods: {
    chartInit() {
      this.option.xAxis.data=this.dm[0].dmtime.index.map(function(i){
        let duration=moment.duration(i*1000)
        let t=duration.get('hours') +":"+duration.get("minutes")+":"+duration.get('seconds')
        return t
      })
      // this.option.series[0].data=this.dm[0].dmtime.times
      // console.log(this.option.series.data)
      this.myChart = echarts.init(document.getElementById("dmline"));
    },
    setcharOption(option) {
      this.myChart.setOption(option);
      return this
    },
    setOption() {
      const series=[]
      for (let i=0 ;i<this.dm.length;i++){
        let colormap=this.handleColors(i)
        let tmp={
            name: this.dm[i].time,
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: colormap[0]
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: colormap[1]
                }, {
                    offset: 1,
                    color: colormap[0]
                }])
            },
            data: this.dm[i].dmtime.times

        }
        series.push(tmp)
      }
      // console.log(series)
      return series
  },
  handleColors(i){
    let color = [];
    // 'rgb(255, 70, 131)
    // let r=Math.floor(Math.random()*256);
    let r=Math.floor(255-(30*i)%255);
    let g=Math.floor(70+(20*i)%255);
    let b=Math.floor(131-(20*i)%255);
    color.push(`rgb(${r},${g},${b})`);
    color.push(`rgb(${r-Math.random()*10},${g-Math.random()*50},${b-Math.random()*50})`);
    return color;//所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
},
  },
  mounted() {
    this.chartInit();
    this.setcharOption(this.option)
    // this.setcharOption(this.setOption());

      },

  watch: {
    dm: {
      handler: function() {
        
       this.myChart.setOption({
            series: this.setOption()
            })
            
      }
    }
  }
  
  // 使用刚指定的配置项和数据显示图表。
};
</script>

<style>
</style>