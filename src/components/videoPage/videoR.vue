<template>
  <div class="layout_1">
    <div class="video-info">
      <div class="title">
        <div class="left">
          <h1 :class="{ spread: fold }">{{ videoInfo.title }}</h1>
        </div>
        <div class="right" :class="{ spread: fold }">
          <i class="icon-top" ></i>
        </div>
      </div>
      <div class="video-data" v-if="videoInfo.stat">
        <span title="总播放数"  class="view">{{videoInfo.stat.view|iniView}}播放&nbsp;·&nbsp;</span>
        <span title="历史累计弹幕数" class="dm">{{videoInfo.stat.danmaku|iniView}}弹幕</span>
        <span> {{dateForma(videoInfo.pubdate)}}</span>
        <span title="本日日排行数据过期后，再纳入本稿件的历史排行数据进行对比得出" class="rank">&nbsp;&nbsp;全站排行榜最高第2名
        </span>
      </div>
    </div>
    <div class="video-player">
      <img :v-lazy="videoInfo.pic" class="cover" />
      <iframe
        class="player-wrapper"
        :src="playerSrc"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      ></iframe>
    </div>
    <div class="TollBar">
        <videoTollBar :statCount="statCount" key="videoTollBar"></videoTollBar>
    </div>
    <div class="comment-wrapper" key="comment">
        <comment :list="commentList"></comment>
    </div>

  </div>
</template>
<script>
import { getVideoInfo, getRecommend, getComment, getTags } from "api/video";
import moment from 'moment'
import comment from 'components/videoPage/comment'
import videoTollBar from 'components/videoPage/videoTollBar'
export default {
props:{
    videoInfo:{
        type:Object
    },
    fold:{
        type:Boolean
    },
    bvid:{
        type: String
    },
    commentList:{
        type:Array
    },
    statCount: {
        type: Object
    }

},
  computed: {
    playerSrc() {
      return `https://player.bilibili.com/player.html?aid=${this.videoInfo.aid}&bvid=${this.bvid}&cid=${this.videoInfo.cid}&page=1`;
    },
  },
  created() {
    // this._getRecommend()
    this.bounce = false;
    
    // this._getVideoInfo();
  },
  filters:{
    iniView(inNum){
    var str
    if (inNum==undefined){
        console.log("sdgafhjagdjfka")
        return inNum
    }
    if (inNum<10000) {
        str=inNum.toString()
    } else {
        str= parseFloat(inNum/10000).toFixed(1).toString()
        str=str+"万"
    }
    return str
},
  },
  methods: {
    
    back() {
      this.$router.go(-1);
    },
    selectItem(item) {
      this.$refs.content.scrollTo(0, 0);
      this.$router.push({ name: "video", params: { bvid: item.bvid } });
    },
   

   dateForma(date){
        date=date*1000
        if(date == undefined){return ''};
        console.log(date)
        let seekTime = moment().format("YYYY-MM-DD HH:mm:ss");
        console.log(moment().Date)
        return moment(date).format("YYYY-MM-DD HH:mm:ss")

    }

  },
  components:{
      moment,
      comment,
      videoTollBar
  },
//   watch: {
//     $route(to, from) {
//       if (to.params.bvid !== from.params.bvid) {
//         this.bvid = to.params.bvid;
//         this._getVideoInfo();
//       }
//     },
//   },
};
</script>




<style scoped  >

.video-info {
    height: 70px;
     padding-top: 27px;
}
.video-player {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.player-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.title {
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  line-height: 26px;
  height: 26px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.left {
  flex: 1;
  overflow: hidden;
}
/* .spread {
            no-wrap();
          } */

.right {
  color: #999;
  height: 24px;
  transition: 0.1s ease;
}

     .video-toolbar {
      display: flex;
      background:  #ffffff;
      color: color-text-video;
      padding-bottom : 12px;
      padding-top:16px;
    }
      .toolbar-item {
        flex: 1;
        /* font-size: font-size-large; */
      }

        .toolbar-item i {
          display: block;
          text-align: center;
        }

        .toolbar-item div {
          display: inline-block;
          width: 100%;
          text-align: center;
          font-size: font-size-small-s;
        }
    .comment{
        padding-top: 20px;
        }
</style>
