# Nav导航栏
---

### 使用

> 我们还可以通过`my-nav-item`填充 nav

::: demo 最普通的竖排

```html
<div id="app">
  <my-nav :selected.sync="selected" style="margin: 20px 0 0 20px;">
    <my-nav-item name="home">首页</my-nav-item>
    <my-nav-item name="test">测试</my-nav-item>
    <my-nav-item name="btn">按钮</my-nav-item>
  </my-nav>
</div>
<script>
  export default {
    name: "App",

    data() {
      return {
        selected: ["test"],
      };
    },
  };
</script>
```

:::

> 我们还可以通过`vertical`支持竖行排列

::: demo 我们还可以通过`vertical`支持竖行排列

```html
<div id="app">
  <my-nav
    :selected.sync="selected"
    vertical
    style="width: 200px; margin: 20px 0 0 20px;"
  >
    <my-nav-item name="home">首页</my-nav-item>
    <my-nav-item name="test">测试</my-nav-item>
    <my-nav-item name="hello">你好</my-nav-item>
  </my-nav>
</div>

<script>
  export default {
    name: "App",

    data() {
      return {
        selected: ["test"],
      };
    },
  };
</script>
```

:::

### Attributes

### 1、nav

| 属性    | 属性值 | 说明 |
| ------- | ------ | ---- |
| selectd | Array  | 数组 |
| vertical |   | 子项是否垂直排列 |

<!-- ### 2、sub-nav

| 属性  | 属性值 | 说明         |
| ----- | ------ | ------------ |
| title | string | 子导航的标题 | -->

### 2、nav-item

| 属性 | 属性值 | 说明                        |
| ---- | ------ | --------------------------- |
| name | string | 标题的 name 以设置激活 item |
