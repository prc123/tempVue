<template>
    <div class="video-toolbar border-bottom">
        <span class="toolbar-item">
            <i class="icon-dianzan"></i>
            <span class="infont">{{statCount.like|iniView}}</span>
        </span>
        <span class="toolbar-item">
            <i class="icon-qianbi1"></i>
            <span class="infont">{{statCount.coin|iniView }}</span>
        </span>
        <span class="toolbar-item">
            <i class="icon-shoucang"></i>
            <span class="infont">{{statCount.favorite|iniView }}</span>
        </span>
        <span class="toolbar-item">
            <i class="icon-zhuanfa"></i>
            <span class="infont">{{statCount.share|iniView }}</span>
        </span>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    props: {
		statCount: {
			type: Object
		}
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
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~src/stylus/variable.styl';
@import '~src/stylus/mixin.styl';
    .video-toolbar {
      display: flex;
      background: $color-background = #ffffff;
      color: $color-text-video;
      padding: 12px;

      .toolbar-item {
        display: inline-block ;
        font-size: $font-size-large;
        width: 92px;
        margin-right: 10px;
        .infont{
            display: inline-block
            font-size: 17px;
            height: 25px;
            margin-top: 3px;
            }
        i {
          display: inline-block;
          text-align: center;
          vertical-align: top;
          font-size: 25px;
          width: 25px;
          height: 25px;
          margin-right: 6px;
        }

        div {
          display: inline-block;
          width: 100%;
          text-align: center;
          font-size: $font-size-small-s;
        }
      }
    }
</style>
