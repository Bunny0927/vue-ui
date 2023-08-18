// 打包入口，组件导出
import Vue from 'vue';
import { Button } from "./components/Button";
import { Dialog } from "./components/Dialog";
import { Input } from "./components/Input";
import {Form,FormItem} from "./components/Form"
import { Switcher } from "./components/Switch";
// import { Message } from './components/Message';
import Message from "./components/Message";
import {Radio,RadioButton,RadioGroup} from "./components/Radio";
import {Checkbox,CheckboxGroup} from "./components/CheckBox"
import './assets/iconfont/iconfont.css';
// import './styles/index.scss';
Vue.config.productionTip = false;

const install = function (Vue) {  
    Vue.use(Button);
    Vue.use(Dialog);
    Vue.use(Input);
    Vue.use(Form);
    Vue.use(FormItem);
    Vue.use(Switcher);
    // Vue.use(Message);
    Vue.use(Radio);
    Vue.use(RadioButton);
    Vue.use(RadioGroup);
    Vue.use(Checkbox);
    Vue.use(CheckboxGroup);
    Vue.prototype.$notice = Message;

};

export default install;

export {
    Button,
    Dialog,
    Input,
    Form,
    FormItem,
    Switcher,
    Message,
    Radio,
    RadioButton,
    RadioGroup,
    Checkbox,
    CheckboxGroup
};