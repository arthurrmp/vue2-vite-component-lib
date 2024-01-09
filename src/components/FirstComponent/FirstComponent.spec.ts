import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import FirstComponent from "./FirstComponent.vue";

describe("FirstComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(FirstComponent, {
      propsData: { msg: "Hello Vitest" },
    });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
