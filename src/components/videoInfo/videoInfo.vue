<template>
    <div id="videopage">
      <TopContainer></TopContainer>
      <!-- <BHeader></BHeader> -->
      <div class= "main-info">
          <div class='video-info'>
            <div class='rowitem'> 
            <div class='palynum '>
              <ul class='playul' v-if="videoInfo.stat" >
                <li class='pitem'>             
                   <div >
                      <img v-lazy="videoInfo.pic" class="pic">
                    </div>
                </li>
                <div class="split-line"></div>
                <li class="videotitle">{{videoInfo.title}}</li>
                <li>BV号：{{videoInfo.bvid}}</li>
                <li>播放数：{{videoInfo.stat.view|iniView}}</li>
                <li>弹幕数：{{videoInfo.stat.danmaku|iniView}}</li>
                <li>点赞数：{{videoInfo.stat.like|iniView}}</li>
                <li>硬币数：{{videoInfo.stat.coin|iniView}}</li>
                <li>收藏数：{{videoInfo.stat.favorite|iniView}}</li>
                <li>转发数：{{videoInfo.stat.share|iniView}}</li>
              </ul>
            </div>
            <div class ="videochart">
                <viewbar  :videoInfo="videoInfo"></viewbar>
            </div>
              </div>
            <div class='danmuinfo rowitem'>
                <div class="dmselect palynum" >
                     <p>历史弹幕</p>
                     <select  class="fl" v-model="ProductActive"  >
                          <option v-for="(item,index) in productList" :key="index" :value='item'>{{item.title}}</option>  
                    </select>  
                    <button class="dmbtn" @click="creatdm">生成</button>
                    <button class="dmbtn" @click="cancledm">取消</button>
  
                    <!-- <div>
                      <input type="text" v-model="day" placeholder="输入月数格式为">
                      </div>  -->
                    <img class='dmcloud' :src="dmcloudimg" alt="" v-if="dm.dmData[0]">
                </div>
                <div class="dmline" v-if="dm.dmData[0]">

                  <dmline :dm="dm.dmData"></dmline>
                  
                </div> 

            </div>
            <div class='commentinfo'></div> 
            </div>
          <div class='up-info'>   </div>
      </div>
  </div>
</template>

<script>
import TopContainer from 'components/common/TopContainer.vue'
import viewbar from 'components/common/BaseChart/viewbar'
import dmline from 'components/common/BaseChart/dmline'
// import timselect from 'components/videoinfo/timselect'
import moment from "moment";
import { getVideoInfo, getComment, getVideoDataInfo } from "api/video";
import Timselect from './timselect.vue';
export default {
  data(){
    return{
      bvid: {},
      videoInfo: {},
      dm:{getFlag:true,dmData:[]},
      dmcloudimg:"",
      getdmdate:{},
      productList:[
                      //{title:"最近7天",id:0},
                      {title:"最近一个月",id:1},
                      // {title:"最初7天",id:2},
                      {title:"最初一个月",id:3},
                     {title:"自定义",id:4},],
      ProductActive:{}
      
    }
  },
  components:{
    TopContainer,
    viewbar,
    moment,
    dmline
  },
    filters: {
    iniView(inNum) {
      var str;
      if (inNum == undefined) {
        return inNum;
      }
      if (inNum < 10000) {
        str = inNum.toString();
      } else {
        str = parseFloat(inNum / 10000)
          .toFixed(1)
          .toString();
        str = str + "万";
      }
      return str;
    }
  },
  created (){
    this.bvid = this.$route.params.bvid;
    this._getVideoInfo();
    this.ProductActive=this.productList[0]
    },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      if (this.ProductActive.id==1){
            console.log("11111111111111sdjahgfjaksldhgjkalhfgjdkhakjdhg")
      }
      
    }
  },
  watch: {
    // 计算属性的 getter
    ProductActive:{
      handler(item1,item2){
        if(item1.id===4){
  
        }
      },
      deep:true
      
    }
  },
  methods:{
    _getVideoInfo() {
      getVideoInfo(this.bvid).then(
        (res) => {
          {
            this.videoInfo = res.data;
            // this._getDm()
            //   this._setSwitchList()
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
  getDm(startTime,days){
    if(this.getFlag){
      
      getVideoDataInfo(this.bvid,'dm',this.videoInfo.cid,startTime.format("YYYY-MM-DD")).then(
          (res) => {
            {
              this.dm.dmData.push(res.data)
              startTime=startTime.add(1,"d")
              // let next=startTime.format("x")-endTime.format("x")
              days=days-1
              this.dmcloudimg=this.creatDmCloud(this.dm.dmData[0].dmtime.dmcloud)
              if(days<=0){
                this.getFlag=false
                return
              }
              else this.getDm(startTime,days)
            }
          },
          (error) => {
            this.Flag=false
            console.log(error);
          }
        
      )
    }
    
  },
  changeProduct(ProductActive){
    return productList[ProductActive]

  },
  changeflag(){},
  creatdm(){
    let aData = new Date();
    this.getFlag=true
    let startTime=moment(aData).subtract(3,"d")
    this.getDm(startTime,2)
    
  },
  cancledm(){
    this.getFlag=false
    console.log('cancledm')
  },
  creatDmCloud(res)
  {
    let byteString=atob(res)
    let arrayBuffer = new ArrayBuffer(byteString.length); //创建缓冲数组
    let intArray = new Uint8Array(arrayBuffer); //创建视图

    for (var i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
    }
    var blob=new Blob([intArray])
    var url = URL.createObjectURL(blob)
    return url
  }

  },

}
</script>

<style  lang="stylus" scoped >
.main-info
    max-width 1984px
    min-width 988px
    margin 0 auto
    display flex
    -ms-flex-pack center
    justify-content center
    padding :0 68px
    height 500px

    .rowitem
      margin-top: 1px;
      margin-bottom: 16px;
      background: #fff;
      padding: 14px;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
    .video-info
      max-width 1984px
      min-width 988px
      display inline-block
      margin-top 20px
      .palynum
        display inline-block
        padding: 0;
        width: 190px;
        margin: 3px 20px 20px 0;
        padding 3px 10px
        border-radius: 4px;
        border: 3px solid #FB7299;

        .pitem
          // width: 190px;
          // height: 119px;
        .pic
          width: 100%;
          height: 100%;
        .videotitle 
          width 100%       
          // word-wrap:break-word;  
          // word-break:break-all;  
          // overflow: hidden;
      .videochart 
        display inline-block
        // width 100%
        width 700px
        height: 267px;
        vertical-align top
      .dmselect
        display inline-block
        text-align center  
        .dmcloud
          padding-top 3px
          width 100%
      .dmline
        display inline-block
        width 700px
        height: 267px;
        vertical-align top
    .up-info
      width: 320px
      display inline-block
      margin-left: 30px
      background-color red

</style>

