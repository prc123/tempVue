<template>
  <div id="vbar" style="width: 100%;height:100%;" >
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    videoInfo: {
      type: Object
    }
  },
  data() {
    return {
      myChart: {},
    option : {
        // title: {
        //     text: '世界人口总量',
        //     subtext: '数据来自网络'
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        title: {
        left: 'center',
        text: '视频数据',
    },
        color: ['#65B581', '#FFCE34', '#FD665F'],
        legend: {
            data: ['视频数据']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['分享', '收藏', '投币','点赞',  '播放']
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
        series: [
            {
                type: 'bar',
                symbol: 'none',
            // sampling: 'lttb',
            // itemStyle: {
            //     color: 'rgb(255, 70, 131)'
            // },
                data: []
            },

        ]
    }
    };
  },
  // 指定图表的配置项和数据
  methods: {
    chartInit() {
      this.myChart = echarts.init(document.getElementById("vbar"));
      return this
    },
    setcharOption(option) {
      this.myChart.setOption(option);
      return this
    },
    setOption() {
      if(!this.videoInfo.stat){
        return []
      }
      let option = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        data: [           
            this.videoInfo.stat.reply,
            this.videoInfo.stat.favorite,
            this.videoInfo.stat.coin,
            this.videoInfo.stat.like,           
            this.videoInfo.stat.view,   
            
        ]
      };
      return option.data;
    }
  },
  mounted() {
    this.chartInit();
    this.setcharOption(this.option)
    this.setcharOption(this.setOption());

      },

  watch: {
    videoInfo: {
      handler: function() {

        this.setcharOption({
            series: [
                {
                // 根据名字对应到相应的系列
                data: this.setOption()
                }
            ]
            })
      }
    }
  }
  // 使用刚指定的配置项和数据显示图表。
};
</script>

<style>
</style>