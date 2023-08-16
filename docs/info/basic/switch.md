# Switch 开关
::: tip 简介
你可以通过设置`v-model`来达到独立控制开关，或者控制开关的状态，` activeColor` `inactiveColor `分别控制开启和关闭的颜色
:::

### 使用

:::demo

```html
<template>
  <div id="app">
    <my-switch name="12" v-model="active1"></my-switch>

    <my-switch
      name="11"
      v-model="active2"
      activeColor="red"
      inactiveColor="green"
    ></my-switch>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        active1: false,
        active2: false,
      };
    },
  };
</script>
```

:::

### Attributes

| 属性          | 属性值 | 说明                |
| ------------- | ------ | ------------------- |
| v-model       | Object | switch 绑定的对象值 |
| activeColor   | String | 激活的颜色          |
| inactiveColor | String | 没激活的颜色        |
| name          | String | 名字                |
