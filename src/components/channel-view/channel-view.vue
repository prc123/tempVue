<template>
<div class="home"> 
    <BchennlContent :rows="rows"></BchennlContent>
    <!-- <BNavSide :options="options" v-on:change="isShowMask"></BNavSide> -->
    <div class="wnd-mask" ref="mask" v-show="showMask"></div>
</div>
</template>
<script>
import { regionTags, ERR_OK } from 'api/config'
import BchennlContent from 'components/content/BchennlContent.vue'
import BNavSide from 'components/nav/BNavSide'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    BchennlContent,
    BNavSide
  },
  mounted() {
    this.$store.dispatch('getContentRows')
  },
  data() {
    return {
      indexTab: 0,
      sindexTab: 0,
      regionTags: regionTags,
      regionList: [],
      showMask: false
    }
  },
  watch: {
    options() {
      console.log('options 变化了')
    },
    items() {
      console.log('items 变化了')
    }
  },
  computed: {
    ...mapGetters([
      'requesting',
      'error',
      'rows'
    ]),
    getBlocks () {
      return regionTags[this.indexTab].blocks
    },
    options() {
      let options = {
        offset: 100, //偏移的距离
        items: this.rows,
        offsetTop: 0 //距离顶部距离
      }
      return options
    }
  },
 

  methods: {
    isShowMask() {
      this.showMask = !this.showMask
    },
    _getIndexTab () {
      if (isNaN(this.$route.params.index)) {
        this.indexTab = 0
      } else {
        this.indexTab = this.$route.params.index
        this.sindexTab = 0
      }
    },

  },
    selectItem (item) {
      this.$router.push({ name: 'video', params: { bvid: item.bvid } })
    },
 
}
</script>

<style>

</style>