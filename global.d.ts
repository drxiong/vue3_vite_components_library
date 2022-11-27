import XButton from "./src/button";
import CButton from "./src/unocss-button";
import IButton from "./src/individuation-unocss-button";
import SFCButton from "./src/test/SFCButton.vue";
import JSXButton from "./src/test/JSXButton";

declare module 'vue' {
  export interface GlobalComponents {
    XButton: typeof XButton;
    CButton: typeof CButton;
    IButton: typeof IButton;
    SFCButton: typeof SFCButton;
    JSXButton: typeof JSXButton;
  }
}