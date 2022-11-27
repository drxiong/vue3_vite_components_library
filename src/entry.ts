import { App } from "vue";
import XButton from "./button";
import CButton from "./unocss-button";
import IButton from "./individuation-unocss-button";
import SFCButton from "./test/SFCButton.vue";
import JSXButton from "./test/JSXButton";

// 导出单独组件
export { XButton, SFCButton, JSXButton, CButton, IButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(XButton.name, XButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component(CButton.name, CButton);
    app.component(IButton.name, IButton);
  },
};
