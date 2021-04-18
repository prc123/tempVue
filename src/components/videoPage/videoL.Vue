<template>
  <div class="videoL">
    <div class="LeftHead">
      <div class="upinfo">
        <div class="face">
          <a href>
            <img class="imgface" :src="upInfo.face" />
          </a>
        </div>
        <div class="upinfo-right">
          <div class="upname">
            <a href>{{ upInfo.name }}</a>
            <span class="upmail"></span>
          </div>
          <div class="title">sdhfjgashjdfgajksdf</div>
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="downloadVideo" >视频下载</div>
      <button class="downloadbtn" :class="isEnable(false)" @click="_downloadVideoInfo">1080p</button>
      <button class="downloadbtn" :class="isEnable(true)" @click="_downloadVideoInfo">720p</button>
      <button class="downloadbtn" :class="isEnable(true)" @click="_downloadVideoInfo">360p</button>
    </div>
    <div class="danmuchart">
      <epie  :videoInfo="videoInfo" ></epie>
      <button class="videoInfobtn" @click="toVideoInfo" target="_blank" >查看详情</button>
    </div>
    <div class="LRowItem">
      <div class="split-line"></div>
      <LRowItem v-for="(item, index) in recommendList.slice(0,20)" :item="item" :key="index"></LRowItem>
    </div>
  </div>
</template>

<script>
import LRowItem from "components/videoPage/LRowItem";
import epie from"components/common/baseChart/epie";
import { downloadVideoInfo } from "api/video";
export default {
  data() {
    return {
      mailImg: "src/fonts/mail.svg",
      downLoadInfo: {}
    };
  },
  props: {
    upInfo: {
      type: Object
    },
    recommendList: {
      type: Array
    },  
     videoInfo:{
      type: Object
    },
    bvid: {
      type: String
    }
  },
  components: {
    LRowItem,
    epie
  },
  methods: {
    _downloadVideoInfo() {
      downloadVideoInfo(this.bvid).then(res => {
        this.downLoadInfo = res.data;
        console.log(this.downLoadInfo);
      });
    },
    isEnable(enable){
      let str='btnEnable'
      if(!enable){
        str='btnUnable'
      }
    return str
    },
    toVideoInfo(){
        this.$router.push({
          path: `/videoinfo/${this.bvid}`
        })
    }
  }
};
</script>


<style  lang="stylus"  rel="stylesheet/stylus" scoped>
.videoL {
  .LeftHead {
    height: 58px;
    padding-top: 30px;
    padding-bottom: 3px;
    display: flex;

    .upinfo {
      .face {
        display: inline-block;

        a {
          .imgface {
            height: 48px;
            width: 48px;
            border-radius: 50%;
          }
        }
      }

      .upinfo-right {
        display: inline-block;

        .upname {
          position: relative;
          bottom: 20px;
          right: 0px;
          padding: 0px 10px;
          text-align: left;
          font-size: 14px;

          a {
            color: #212121;
          }
        }

        .upmail {
          position: relative;
          margin-left: 12px;
          bottom: 0px;
          // left -5px;
          // top -20px;
          background: url('../../assets/images/icons.png') no-repeat;
          width: 22px;
          height: 22px;
          display: inline-block;
          background-position: -278px -2002px;
        }

        .title {
          position: relative;
          bottom: 20px;
          padding: 3px 10px;
          text-align: left;
          font-size: 14px;
          color: #999;
        }
      }
    }

  }
  .btn{
    padding-bottom: 6px
    .downloadVideo{
      display inline-block
      font-size: 10px;
      // background-color: #00a1d6; /* Green */
      color : #757575;
      text-align: center;
      width :60px
      padding: 5px 3px;
    }
    .downloadbtn{    
      background-color: #00a1d6; /* Green */
      border: none;
      width :70px
      color: white;
      padding: 3px 3px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 13px;
      border-radius: 5px;
      border: 2px solid #00a1d6;
      outline: none
      
      }
  }
  
  
  .btnEnable:hover {
  background-color:white; /* Green */
  color: black;
  }
  
   .btnUnable{
    opacity: 0.6;
    cursor: not-allowed;
  }


  .danmuchart{
    display block
    width:100%
    height:150px
    padding: 5px
    .videoInfobtn{
      display block
      position relative
      font-size: 10px;
      // background-color: #00a1d6; /* Green */
      bottom  : 20px
      left:210px
      background: #fb7299;
      border: none;
      width :70px
      color: white;
      padding: 3px 3px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 10px;
      border-radius: 5px;
      border: 2px solid #fb7299;
      outline: none
      &:hover{
          background-color:white; /* Green */
          color: black;
      }
    }
  }
  .LRowItem {
    display: block;
  }


}
</style>

<style lang="stylus">
  .split-line {
    width: 100%;
    height: 1px;
    background: #e5e9ef;
    margin: 6px 0 12px;
}
</style>