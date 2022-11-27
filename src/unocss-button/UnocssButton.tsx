import { defineComponent } from "vue/dist/vue.esm-bundler.js";
export default defineComponent({
  name: "CButton",
  setup(props, { slots }) {
    return () => (
      <button
        class={`
        py-2
        px-4
        font-semibold
        rounded-lg
        shadow-md
        text-white
        bg-green-500
        hover:bg-green-700
        border-none
        cursor-pointer
      `}
      >
        {slots.default ? slots.default() : "按钮"}
      </button>
    );
  },
});
