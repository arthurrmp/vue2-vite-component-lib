import FirstComponent from "./components/FirstComponent/FirstComponent.vue";
import SecondComponent from "./components/SecondComponent/SecondComponent.vue";

export default {
  install(Vue: Vue.VueConstructor) {
    Vue.component("FirstComponent", FirstComponent);
    Vue.component("SecondComponent", SecondComponent);
  },
};

export { FirstComponent, SecondComponent };
