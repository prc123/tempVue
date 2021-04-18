<template>
  <div class="loginblock">
    <form action="" class="loginform">
      <span>请输入账户cokkies:</span>
      <input class="logininput" v-model="value18" />
      <div class="inputresult">
        <span class="result"> {{getResult}}</span>
        <div class="inputbnt">
            <button class="upcok" @click="uploadcook">确认</button>
            <button class="clcok" @click="delcook">清除</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script >
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      value18: "",
      upStates: null,
      cookstatus:"",
      result:""
    };
  },
  computed: {
    ...mapGetters(["login","logout"]),
    getResult(){
        if(this.upStates==="sucess"){
            return "cokkies上传成功"
        }
        else if (this.upStates===null){
            return ""
        }
        else if(this.upStates==="fail"){
        return "cokkies上传失败"
        }
        else if(this.upStates==="blank"){
        return "cokkies不能为空"
        }
        else{
            return ""
        }
    }
  },

  methods: {
    uploadcook() {
        if(this.value18==""){
            this.upStates="blank"
            return
        } 
        this.$store.dispatch('login',this.value18).then((res)=>{
            this.upStates="sucess"
            this.cookstatus=res.message
        },(error)=>{console.log(error)
            this.upStates="fail"
            this.cookstatus=error.message
        })
    },
    delcook() {
        this.$store.dispatch('logout')
        this.upStates=null
    },
  },
};
</script>

<style scoped  lang="stylus" >
.loginblock {
    padding: 10px 10px;
    float  left
    position fixed
    border-radius 6px
    border-color #fb7299
    border-style:solid
    border-width :3px
    left 30%
    top 30%
    width 800px
    height 50px
    transition .2s
    
    background-color #fff
    overflow hidden
  .logininput { 
    width: 80%;
    display: inline-block;
    outline :true
    border-style:solid
    border-width :2px
    border-color black
    border-radius 6px
    outline :none
    radius: 10%;
    padding: 3px 3px;
  }
.inputresult{
    display :block
    position :relative
    bottom: -3px
    .result{
        display :inline-block
        margin-right: 210px
        width: 130px
    }
  .inputbnt {
    margin: 3px 3px;
    position: relative;
    text-align: center;
    display: inline-block;
    .upcok {
      display: inline-block;
      margin: auto;
      left: 20%;
      width: 50px;
    }

    .clcok {
      display: inline-block;
      margin: auto;
      width: 50px;
    }
  }
}
}
</style>