# Dialog 对话框
::: tip 简介
通过与`visiable`绑定我们可以指定事件打开对话框。
日常生活中，少不了对话，Vue-ui 为您提供了两种对话框，您可以通过`v-slot`填入指定的插槽，实现对话的按钮功能。
:::

### 默认对话框

::: demo 

```html
<template>
  <div id="app">
    <my-button type="primarygold" @click="visiable = true"
      >对话框dialog
    </my-button>
    <my-dialog title="Vue-ui提示您" :visiable.sync="visiable">
      <!-- .sync等同于 visiable="false" @update:visable,false -->
      你好，欢迎使用vue-ui组件库
      <template v-slot:footer>
        <my-button type="primarygold" @click="visiable = false" mimicry
          >确定</my-button
        >
        <my-button @click="visiable = false">取消</my-button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        visiable: false,
        visiable1: false,
      };
    },
  };
</script>
```

:::

### 朴实无华的对话框

::: demo

```html
<template>
  <div>
    <my-button type="primarygold" @click="visiable = true"
      >对话框dialog2
    </my-button>
    <my-dialog title="Vue-ui提示您" :visiable.sync="visiable">
      <!-- .sync等同于 visiable="false" @update:visable,false -->
      你好，欢迎使用Vue-ui组件库
    </my-dialog>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        visiable: false,
      };
    },
  };
</script>
```
:::

### 居中布局
::: demo

```html
<template>
  <div>
    <my-button type="primarygold" @click="visiable = true"
      >对话框dialog3
    </my-button>
    <my-dialog title="Vue-ui提示您" :visiable.sync="visiable" center>
      你好，欢迎使用Vue-ui组件库
      <template v-slot:footer>
        <my-button type="primarygold" @click="visiable = false" mimicry
          >确定</my-button
        >
        <my-button @click="visiable = false">取消</my-button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        visiable: false,
      };
    },
  };
</script>
```
:::

### 自定义内容
::: demo

```html
<template>
  <div>
    <my-button type="primarygold" @click="visiable = true">对话框dialog4</my-button>
    <my-dialog title="Vue-ui提示您" :visiable.sync="visiable">
      <my-button type="primarygold" @click="visiable = false">自定义内容</my-button>
      <template v-slot:footer>
        <my-button type="primarygold" @click="visiable = false" mimicry
          >确定</my-button
        >
        <my-button @click="visiable = false">取消</my-button>
      </template>
    </my-dialog>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        visiable: false,
      };
    },
  };
</script>
```
:::




### Attributes

| 属性     | 属性值 | 说明                          |
| -------- | ------ | ----------------------------- |
| title    | String | dialog 标题                   |
| visiable | String | dialog 是否开始就展示在页面上 |
| v-slot   | slot   | 给对话框添加开关按钮          |
| width    | String | dialog 宽度                   |
| top      | String | dialog 与上页的距离           |
| center   |        | 标题和底部水平居中             |
