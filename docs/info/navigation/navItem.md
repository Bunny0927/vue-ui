# Nav-item 导航栏子项
---

### 使用

> 我们还可以通过`my-nav-item`填充 nav

:::demo

```html
<my-nav-item name="hire">测试</my-nav-item>

<script>
  export default {
    name: "App",

    data() {
      return {
        selected: ["culture"],
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

### 2、sub-nav

| 属性  | 属性值 | 说明         |
| ----- | ------ | ------------ |
| title | string | 子导航的标题 |

### 2、nav-item

| 属性 | 属性值 | 说明                        |
| ---- | ------ | --------------------------- |
| name | string | 标题的 name 以设置激活 item |
