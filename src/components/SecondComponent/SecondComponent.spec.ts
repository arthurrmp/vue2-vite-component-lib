import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";

import SecondComponent from "./SecondComponent.vue";

describe("SecondComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(SecondComponent);
    expect(wrapper.text()).toContain("I'm the second component.");
  });
});
