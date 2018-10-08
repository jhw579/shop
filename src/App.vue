<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>

<template>
  <div id="app">
    <router-view></router-view>
    <!-- <FooterGuide></FooterGuide> -->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>


<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqFoodCategorys} from './api'

  export default {
    components: {
      FooterGuide
    },
    async mounted(){
      const resulut =  await  reqFoodCategorys()
      console.log(resulut)
    }
  }
</script>
