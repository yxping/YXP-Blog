import Vue from 'vue';
import Navigator from './components/navigator/Navigator.vue';
import ArticleInfo from './components/article_info/ArticleInfo.vue';
import PageSelector from './components/page_selector/PageSelector.vue';

const APPS = {
  Navigator,
  ArticleInfo,
  PageSelector
};

function renderAppInElement(el) {
  let App = APPS[el.id];
  if (!App) return;

  const attributes = Object.assign(el.attributes)
  var app = new Vue ({
    el,
    render(createElem) {
      return createElem(App, {
        props: {
          elementAttrs: attributes
        }
      });
  }
  })
}

document.querySelectorAll('.__vue-root').forEach(renderAppInElement)
