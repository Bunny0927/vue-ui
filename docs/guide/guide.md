# 安装

## npm安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。


```
npm i vue-ui -S
```
## 引入Ema-UI
你可以引入整个 vue-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 vue-ui。

### 完整引入
在 main.js 中写入以下内容：
```js
import myui from 'vue-ui'
import "vue-ui/dist/css/index.css"
Vue.use(myui)
```
### 按需引入
在 main.js 中写入以下内容：
```js
import {Input,Radio} from 'vue-ui'
import "vue-ui/dist/css/index.css"
Vue.use(Input)
Vue.use(Radio)
```
### 完整组件列表和引入方式
```js
Vue.use(Input)
Vue.use(Radio)
Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(Nav)
Vue.use(NavItem)
Vue.use(Subnav)
Vue.use(Dialog)
Vue.use(Icon)
Vue.use(Link)
Vue.use(Tag)
Vue.use(TagList)
Vue.use(Switcher)
Vue.prototype.$notice = Message;
```