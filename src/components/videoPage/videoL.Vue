<template>
<div class="videoL"> 
  <div class="LeftHead">
      <div class="upinfo">
          <div class=face>
             <a href="">
                 <img class="imgface" :src="upInfo.face" >
            </a> 
          </div>
          <div class="upinfo-right">
              <div class="upname">
                  <a href="">
                      {{upInfo.name}}
                  </a>
              <span class="upmail" ></span>
              </div>
              <div class=title>
                  sdhfjgashjdfgajksdf
              </div>
              <div class="btn">

              </div>
          </div>
      </div>

  </div>
  <div><LRowItem v-for="(item,index) in recommendList" :item="item" :key="index"></LRowItem></div>
  
    
  </div>
</template>

<script>
import LRowItem from 'components/videoPage/LRowItem'
export default {
    data(){
        return{
            mailImg:"src/fonts/mail.svg"
        }
    },
    props:{
        upInfo:{
            type:Object
            },
        recommendList:{
            type:Array
        }
    },
    components:{
        LRowItem
    }


}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.videoL{
    .LeftHead{
                height: 58px;
                padding-top: 30px;
                padding-bottom: 12px;
                display: flex;
        .upinfo{

            .face{
                    display :inline-block
                    a{
                        .imgface{
                                height: 48px;
                                width: 48px;
                                border-radius: 50%;
                        }
                    }
                }
            .upinfo-right{
                    display :inline-block
 
                .upname{
                    
                    position: relative;
                    bottom :20px;
                    right :0px;
                    padding: 0px 10px;
                    text-align: left;
                    font-size: 14px;
                    a{
                        color: #212121;
                        }
                }
                .upmail{
                    position: relative;
                    margin-left: 12px
                    bottom :0px;
                    // left -5px;
                    // top -20px;
                    background url(../../assets/images/icons.png) no-repeat;
                    width 22px;
                    height 22px;
                    display inline-block;
				    background-position -278px -2002px;
                    }
                .title{
                    position: relative
                    bottom :20px
                    padding: 3px 10px;
                    text-align: left;
                    font-size: 14px;
                    color: #999;
                    
                }
                }
            }
        
        }
    
    }

</style>