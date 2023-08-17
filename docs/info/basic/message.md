# Message 消息提醒

### succss的message提醒
::: demo
```html
 <my-button type="successwhite" @click="messageOpenMeth('success')">success的消息提示</my-button>
 <script>
    export default{
        methods:{
            messageOpenMeth(MSType){
                this.$notice.open({
                    title: '这是一条消息提示',
                    type: MSType
            })
        }
    }
}
 </script>

```
:::
### info的message提醒
::: demo
```html
 <my-button type="primarywhite" @click="messageOpenMeth('info')">info的消息提示</my-button>
 <script>
    export default{
        methods:{
            messageOpenMeth(type){
                this.$notice.open({
                    title:'这是一条消息提示',
                    type:type
            })
        }
    }
}
 </script>

```
:::
### warning的message提醒
::: demo
```html
 <my-button type="warning" @click="messageOpenMeth('warning')">warning的消息提示</my-button>
 <script>
    export default{
        methods:{
            messageOpenMeth(type){
                this.$notice.open({
                    title:'这是一条消息提示',
                    type:type
            })
        }
    }
}
 </script>

```
:::
### error的message提醒
::: demo
```html
 <my-button type="dangergold" @click="messageOpenMeth('error')">error的消息提示</my-button>
 <script>
    export default{
        methods:{
            messageOpenMeth(type){
                this.$notice.open({
                    title:'这是一条消息提示',
                    type:type
            })
        }
    }
}
 </script>

```
:::
### Attributes

| 属性  | 属性值                     | 说明              |
| ----- | -------------------------- | ----------------- |
| title | String                     | message提示的内容 |
| type  | success/info/warning/error | 不同类型的message |
| time  | Number                     | 多少毫秒后关闭    |


