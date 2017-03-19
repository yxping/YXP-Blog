<template>
  <div class="wrapLayout">
    <div class="navigatorLayout">
      <div class="headLayout">
        <img class="headImg" :src="baseUrl +'/images/head.jpg'" alt="yxp头像" />
        <div class="smallHeadLayout">
          <div class="smallBtnLayout" v-if="githubSite">
            <i class="fa fa-github fa-lg"></i>
            <a class="smallBtnFollowOption" :href="githubSite">Follow</a>
          </div>
          <div class="smallBtnLayout" v-if="weiboSite">
            <i class="fa fa-weibo fa-lg"></i>
            <a class="smallBtnFollowOption" :href="weiboSite">Watch</a>
          </div>
        </div>
      </div>
      <div class="navigatorBtnGroupLayout">
        <div class="navigatorBtnLayout"
              v-for="btn in btnLists"
              @click="clickOnTarget(btn)">
          <label class="navigatorText">{{ btn }}</label>
          <div :class="curBtn == btn? 'navigatorTextUnderline' : ''"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Navigator',
  props: {
    elementAttrs: {
      default: null
    }
  },
  methods: {
    clickOnTarget: function(targetBtn) {
      if (targetBtn == this.curBtn) return
      this.curBtn = targetBtn
      if (targetBtn == "Blog") {
        window.location.replace('/')
      } else if (targetBtn == "Jottings") {
        window.location.replace('/jottings.html')
      } else if (targetBtn == "About") {
        window.location.replace('/about.html')
      }
    },
    initBtn: function() {
      var pathName = window.location.pathname
      if (pathName && pathName.length > 0) {
        var page = pathName.substring(pathName.lastIndexOf('/') + 1)
        if (!page || page.length == 0 || page == "index.html") {
          this.curBtn = "Blog"
        } else if (page == "jottings.html") {
          this.curBtn = "Jottings"
        } else if (page == "about.html") {
          this.curBtn = "About"
        }
      }
    }
  },
  data () {
    return {
      btnLists: ["Blog", "Jottings", "About"],
      baseUrl: String,
      curBtn: String,
      githubSite: String,
      weiboSite: String
    }
  },
  created() {
    this.baseUrl = this.elementAttrs && this.elementAttrs['baseUrl'] ? this.elementAttrs['baseUrl'].value : ""
    this.githubSite = this.elementAttrs && this.elementAttrs['githubSite'] ? this.elementAttrs['githubSite'].value : null
    this.weiboSite = this.elementAttrs && this.elementAttrs['weiboSite'] ? this.elementAttrs['weiboSite'].value : null
    this.initBtn()
  }
}
</script>
<style src="./style.css" />
