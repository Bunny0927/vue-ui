# link 链接

### 基本使用
:::demo
```html
<my-link type='default'></my-link>
<my-link type='primary'></my-link>
<my-link type='success'></my-link>
<my-link type='warning'></my-link>
<my-link type='danger'></my-link>
<my-link type='info'></my-link>
```
:::

### 禁用模式
:::demo
```html
<my-link type='default' disabled></my-link>
<my-link type='primary' disabled></my-link>
<my-link type='success' disabled></my-link>
<my-link type='warning' disabled></my-link>
<my-link type='danger' disabled></my-link>
<my-link type='info' disabled></my-link>
```
:::

### 添加下划线
:::demo
```html
<my-link type='default' underline></my-link>
<my-link type='primary' underline></my-link>
<my-link type='success' underline></my-link>
<my-link type='warning' underline></my-link>
<my-link type='danger' underline></my-link>
<my-link type='info' underline></my-link>
```
:::

### 添加链接文本
:::demo
```html
<my-link type='default'>文字链接1</my-link>
<my-link type='primary'>文字链接2</my-link>
<my-link type='success'>文字链接3</my-link>
<my-link type='warning'>文字链接4</my-link>
<my-link type='danger'>文字链接5</my-link>
<my-link type='info'>文字链接6</my-link>
```
:::

### Attributes

| 参数      | 说明         | 类型    | 可选值                                       | 默认值   |
| --------- | ------------ | ------- | -------------------------------------------- | -------- |
| type      | 链接类型     | String  | default,primary,success,warning,danger,info | default  |
| href      | href属性     | String  | -                                            | -        |
| underline | 是否有下划线 | Boolean | -                                            | false    |
| disabled  | 是否禁用     | Boolean | -                                            | false    |
| value     | 显示文本内容 | String  | -                                            | 文字链接 |
