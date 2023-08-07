// 打包入口，组件导出
import Vue from 'vue';
import { Button } from "./components/Button";
import { Dialog } from "./components/Dialog";
import { Input } from "./components/Input";
import { Form } from "./components/Form";
Vue.config.productionTip = false;

// const install = function (Vue, options = {}) {
    const install = function (Vue) {  
    Vue.use(Button);
    Vue.use(Dialog);
    Vue.use(Input);
    Vue.use(Form);
};

export default install;
