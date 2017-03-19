<template>
  <div class="wrapLayout">
    <div class="pageListSelector">
        <div class="selectorStyle" v-if="prePageUrl">
            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
            <a :href="prePageUrl">Newer</a>
        </div>
        <div></div>
        <div class="selectorStyle">
            <a :href="nextPageUrl">Older</a>
            <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSelector',
  props: {
    elementAttrs: {
      default: null
    }
  },
  methods: {
  },
  data () {
    return {
      prePageUrl: String,
      nextPageUrl: String
    }
  },
  created() {
    this.prePageUrl = this.elementAttrs && this.elementAttrs['prePageUrl'] ? this.elementAttrs['prePageUrl'].value : null
    this.nextPageUrl = this.elementAttrs && this.elementAttrs['nextPageUrl'] ? this.elementAttrs['nextPageUrl'].value : null
  }
}
</script>
<style src="./style.css" />
