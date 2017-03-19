<template>
  <div class="wrapLayout">
    <a :href="postUrl">
      <div class="articleInfoLayout">
        <div class="titleLayout">
          <i class="fa fa-hand-o-right articleSelected" aria-hidden="true"></i>
          <h3 class="date"> {{ date }} </h3>
          <h2 class="title"> {{ title }} </h2>
        </div>
        <div class="synopsis"> {{ synopsis }} </div>
        <div class="articleInfoLine"></div>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'ArticleInfo',
  props: {
    elementAttrs: {
      default: null
    }
  },
  methods: {
  },
  data () {
    return {
      postUrl: String,
      title: String,
      date: String,
      synopsis: String
    }
  },
  created() {
    this.title = this.elementAttrs && this.elementAttrs['postTitle'] ?
                      this.elementAttrs['postTitle'].value : "undefined"
    this.date = this.elementAttrs && this.elementAttrs['postDate'] ?
                      this.elementAttrs['postDate'].value : "undefined"
    this.synopsis = this.elementAttrs && this.elementAttrs['postSynopsis'] ?
                      this.elementAttrs['postSynopsis'].value : "undefined"
    this.postUrl = this.elementAttrs && this.elementAttrs['postUrl'] ?
                      this.elementAttrs['postUrl'].value : "undefined"
  }
}
</script>
<style src="./style.css" />
