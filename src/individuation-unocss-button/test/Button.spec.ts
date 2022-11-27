import IButton from "../IndividuationUnocssButton";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("mount @vue/test-utils", () => {
    const wrapper = shallowMount(IButton, {
      slots: {
        default: "Button",
      },
    });
    expect(wrapper.text()).toBe("Button");
  });
});
