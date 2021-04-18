<template>
  <div id="epie" style="width: 100%;height:100%;" ></div>
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
      option: {
        tooltip: {
          trigger: "item",

        },
        legend: {
          top: "5%",
          left: "center"

        },
        series: [
          {
            
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            top:'10%',
            itemStyle: {
              borderRadius: 5,
              borderColor: "#fff",
              borderWidth: 2
            },
            tooltip: {
                formatter: '{b}: {c} ({d}%)'
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold"
               
              }
            },
            labelLine: {
              show: false
            },
            color:[
              new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF6600'
                }, {
                    offset: 1,
                    color: '#FF6633'
                }]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF6633'
                }, {
                    offset: 1,
                    color: '#FF6666'
                }]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF6666'
                }, {
                    offset: 1,
                    color: '#FF6699'
                }]),
                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF6699'
                }, {
                    offset: 1,
                    color: '#FF66CC'
                }])
                
                ],
            data: []
          }
        ]
      }
    };
  },
  // 指定图表的配置项和数据
  methods: {
    chartInit() {
      this.myChart = echarts.init(document.getElementById("epie"));
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
        categories: ['投币', '点赞', '收藏', '转发'],
        data: [
          this.videoInfo.stat.coin,
          this.videoInfo.stat.like,
          this.videoInfo.stat.favorite,
          this.videoInfo.stat.reply
        ]
      };
      let tmp = [];
      for (let i = 0; i < option.categories.length; i++) {
        let k = { value: option.data[i], name: option.categories[i] };
        tmp.push(k);
      }

      return tmp;
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