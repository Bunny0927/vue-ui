# Checkbox 复选框
::: tip 简介
复选框
:::

### 基本使用
::: demo
```html
 <my-checkbox-group v-model="datalist">
        <my-checkbox label="品牌推广"></my-checkbox>
        <my-checkbox label="形象普及"></my-checkbox>
</my-checkbox-group>
<script>
export default {
  data() {
    return {
      datalist: []
    }
  }
}
</script>
```
:::

### 禁用状态
::: demo
```html
 <my-checkbox-group v-model="datalist" disabled>
        <my-checkbox label="品牌推广"></my-checkbox>
        <my-checkbox label="形象普及"></my-checkbox>
</my-checkbox-group>
<script>
export default {
  data() {
    return {
      datalist: []
    }
  }
}
</script>
```
:::

### 子项垂直排列
::: demo
```html
 <my-checkbox-group v-model="datalist" vertical>
        <my-checkbox label="品牌推广"></my-checkbox>
        <my-checkbox label="形象普及"></my-checkbox>
</my-checkbox-group>
<script>
export default {
  data() {
    return {
      datalist: []
    }
  }
}
</script>
```
:::

### Attributes
### 1、checkbox

| 属性            | 属性值                    | 说明              |
| --------------- | ------------------------- | ----------------- |
| label           | string / number / boolean | checkbox 的 value |
| value / v-model | boolean                   | 绑定值            |
| disabled        | true/false                | 是否禁用表单      |
| name            | string                    | 原生 name 属性    |

### 2、checkbox-group

| 属性            | 属性值     | 说明             |
| --------------- | ---------- | ---------------- |
| disabled        | true/false | 是否禁用表单     |
| value / v-model | Array      | 绑定值           |
| vertical        | true/false | 子项是否垂直排列 |