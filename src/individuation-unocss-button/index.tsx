import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor = 'balck' | 'gray' | 'red' | 'yellow' | 'green' | 'blue'
export const props = {
  color: {
    type: String as PropType<IColor>,
    default: 'blue'
  },
  icon: {
    type: String,
    default: ""
  }
}
export default defineComponent({
  name: "IButton",
  props,
  setup(props, {slots}){
    return () => <button
      class={`
        py-2
        px-4
        font-semibold
        rounded-lg
        shadow-md
        text-white
        bg-${props.color}-500
        hover: bg-${props.color}-700
        border-none
        cursor-pointer
      `}
    >
      {
        props.icon !=="" ? (<i class={`i-ic-baseline-${props.icon} p3`}></i>) : ''
      }
      {slots.default ? slots.default() : '按钮'}
    </button>
  }
})
