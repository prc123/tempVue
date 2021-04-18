<template>
  <div id="videopage">
    <TopContainer></TopContainer>
    <!-- <BHeader></BHeader> -->
    <div class= "v-warp">
        <div class="v-R"> <videoR :bvid="bvid" :videoInfo="videoInfo" :fold="fold" :commentList="commentList" :statCount="statCount"></videoR> </div>
        <div class="v-L"> <videoL :bvid="bvid" :videoInfo="videoInfo" :recommendList="recommendList"  :upInfo="upInfo"></videoL> </div>
    </div>
  </div>
</template>

<script>
import TopContainer from 'components/common/TopContainer.vue'
import BHeader from 'components/common/BHeader.vue'
import { getVideoInfo, getRecommend, getComment, getTags } from "api/video";
import videoL from 'components/videoPage/videoL.vue'
import videoR from 'components/videoPage/videoR.vue'

import { mapGetters } from 'vuex'
export default {
  name: 'videopage',
 data() {
    return {
      bvid: {},
      videoInfo: {},
      upInfo: {},
      statCount: {},
      fold: true,
      indexTab: 0,
      switchList: [],
      recommendList: [],
      commentList: [],
      tagsList: [],
    };
  },
  components: {
    TopContainer,
    BHeader,
    videoL,
    videoR
    // BContent,
    // BNavSide
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows'
    ]),
    options() {
      let options = {
        offset: 100, //偏移的距离
        items: this.rows,
        offsetTop: 0 //距离顶部距离
      }
      return options
    }
  },
  created (){
      this.bvid = this.$route.params.bvid;
      this._getVideoInfo();
      },
  methods: {
         _getVideoInfo() {
      getVideoInfo(this.bvid).then(
        (res) => {
          {
            this.videoInfo = res.data;
            this.upInfo = res.data.owner;
            this.statCount = res.data.stat;
            //   this._setSwitchList()
          }
        },
        (error) => {
          console.log(error);
        }
      );
      this._getRecommend();
      this._getComment();
      this._getTags();
    },
    _getRecommend() {
      getRecommend(this.bvid).then(
        (res) => {
          this.recommendList = res.data;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    _getComment() {
      getComment(this.bvid).then(
        (res) => {
          {
            this.commentList = res.data.replies;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    _getTags() {
      getTags(this.bvid).then(
        (res) => {
          {
            this.tagsList = res.data;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    },
    isShowMask() {
      this.showMask = !this.showMask
    }
  },
    watch: {
    '$route' (to, from) {
      if (to.params.bvid !== from.params.bvid) {
        this.bvid = to.params.bvid
        this._getVideoInfo()
      }
    },
    options() {
      console.log('options 变化了')
    },
    items() {
      console.log('items 变化了')
    },
  }
}
</script>

<style scoped lang="stylus"  >
  #videopage 
    font-family "Microsoft YaHei",Arial,Helvetica,sans-serif
    -webkit-font-smoothing antialiased
    font-size 12px
    margin 0
    padding 0
    background #fff
    color #222
    min-width 990px
    tap-highlight-color transparent
    -webkit-tap-highlight-color transparent
    
    .v-warp
            max-width 1984px
            min-width 988px
            margin 0 auto
            display flex
            -ms-flex-pack center
            justify-content center
            padding :0 68px
            
        .v-R
        
            max-width 1984px
            min-width 988px
            display inline-block
           
        .v-L
        
            width: 320px
            display inline-block
            -ms-flex: none
            flex: none
            margin-left: 30px
            
    .wnd-mask
    
      position fixed
      width 100%
      height 150%
      background-color #000
      opacity .5!important
      z-index 1000
      top 0px
      left 0px
      transition .2s
      
</style>