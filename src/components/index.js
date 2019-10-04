import Vue from "vue";
import FlockCircleProgress from "./CircleProgress.vue";
import FlockBanner from "./Banner.vue";

const Components = {
    FlockCircleProgress,
    FlockBanner
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;
