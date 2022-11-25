// import { createApp } from "vue/dist/vue.esm-bundler.js"
import { createApp } from "vue/dist/vue.esm-bundler.js"
import "uno.css";
import XComponentsLibrary from "./entry"
import CButton from './unocss-button'
// createApp(CButton).use(XComponentsLibrary).mount('#app')
createApp({
  template: `
    <div>
      <IButton color="red">普通按钮</IButton>
      <IButton color="yellow" icon="search">搜索</IButton>
    </div>
  `
}).use(XComponentsLibrary).mount("#app")

// import SFCButton from "./test/SFCButton.vue";
// createApp(SFCButton).mount("#app")
// import JSXButton from "./test/JSXButton";
// createApp(JSXButton).mount("#app")