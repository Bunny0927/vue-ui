# Form 表单
::: tip 简介
表单
:::

### 使用
::: demo
```html
<my-form :model="activity" :rules="rules" ref="form">
    <my-form-item label="活动名称" prop="name">
        <my-input v-model="activity.name"></my-input>
    </my-form-item>
    <my-form-item label="活动地点" prop="address">
        <my-radio-group v-model="activity.address">
            <my-radio label="上海"></my-radio>
            <my-radio label="北京"></my-radio>
        </my-radio-group>
    </my-form-item>
    <my-form-item label="活动方式" prop="way">
        <my-radio-group v-model="activity.way">
            <my-radio-button label="组队"></my-radio-button>
            <my-radio-button label="个人"></my-radio-button>
        </my-radio-group>
    </my-form-item>
    <my-form-item label="活动性质" prop="datalist">
        <my-checkbox-group v-model="activity.datalist">
            <my-checkbox label="品牌推广"></my-checkbox>
            <my-checkbox label="形象普及"></my-checkbox>
        </my-checkbox-group>
    </my-form-item>
    <my-form-item label="请选择" prop="myValue">
        <my-select v-model="activity.myValue" placeholder="请选择">
            <my-option
            v-for="item in options"
            :label="item.label"
            :value="item.key"
            :key="item.key"
            ></my-option>
        </my-select>
    </my-form-item>
    <my-form-item>
        <my-button @click="handleSubmit">提交</my-button>
        <my-button @click="handleReset">重置</my-button>
    </my-form-item>
</my-form>

<script>
      export default{
        data(){
            return {
                activity:{
                    datalist:[],
                    name:'',
                    address:'',
                    way:'',
                    myValue:'',
                },
                 options: [
                    { key: "key1", label: "选项1" },
                    { key: "key2", label: "选项2" },
                    { key: "key3", label: "选项3" },
                    { key: "key4", label: "选项4" },
                    { key: "key5", label: "选项5" },
                    { key: "key6", label: "选项6" },
                    { key: "key7", label: "选项7" },
                ],
                rules: {
                    name: [{ required: true, message: "不能为空", trigger: "blur" }],
                    address: [{ required: true, message: "不能为空", trigger: "change" }],
                    way: [{ required: true, message: "不能为空", trigger: "change" }],
                    datalist: [
                        {
                            type: "array",
                            required: true,
                            message: "不能为空",
                            trigger: "change",
                        },
                    ],
                    myValue: [{ required: true, message: "至少选择一项" }],
                },
            }
        },
         methods: {
            handleSubmit() {
            console.log(this.activity)
            this.$refs.form.validate((valid) => {
                if (valid) console.log("提交成功");
                else console.log("校验失败");
                });
            },
            handleReset() {
                this.$refs.form.resetFields();
            }
        },
    }
</script>
```
:::

### Attributes
### 1、form

| 属性  | 属性值 | 说明                   |
| ----- | ------ | ---------------------- |
| model | Object | form表单绑定的对象     |
| rules | Object | form表单接受的校验规则 |

### 2、form-item

| 属性  | 属性值 | 说明                                                                         |
| ----- | ------ | ---------------------------------------------------------------------------- |
| label | string | 标签文本                                                                     |
| prop  | string | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 |