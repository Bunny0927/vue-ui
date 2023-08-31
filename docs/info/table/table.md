# table 表格

### 基本使用
::: demo
```html
 <my-table
      :columns="columns"
      :data="dataSource"
      numberVisible
></my-table>   

<script>
export default {
    data(){
        return {
             columns: [
        { text: "姓名", filed: "name" ,width:"230"},
        { text: "分数", filed: "score" ,width:"230"},
      ],
      dataSource: [
        { id: 1, name: "aaa", score: 100 ,description:'score is ok'},
        { id: 2, name: "bbb", score: 100 ,description:'score is ok'},
        { id: 3, name: "ccc", score: 80 },
        { id: 4, name: "ddd", score: 60 },
        { id: 5, name: "ddd", score: 85 },
        { id: 6, name: "ddd", score: 88 },
        { id: 7, name: "ddd", score: 93 },
        { id: 8, name: "ddd", score: 89 },
        { id: 9, name: "ddd", score: 70 },
        { id: 10, name: "ddd", score: 63 },
        { id: 11, name: "ddd", score: 76 },
        { id: 12, name: "ddd", score: 95 },
        { id: 13, name: "ddd", score: 99 },
      ],
    }
    }
}

</script> 
```
:::

### 带有多选框且固定表头
::: demo
```html
 <my-table
      :columns="columns"
      :data="dataSource"
      bordered
      selected
      :selectedItems.sync="selectedItems"
      :loadding="loading"
      expend-filed="description"
      height="200"
   ></my-table>   
   <my-button @click = "shuchu()">点击</my-button>

<script>
export default {
    data(){
      return {
        columns: [
          { text: "姓名", filed: "name" ,width:"230"},
          { text: "分数", filed: "score" ,width:"230"},
        ],
        dataSource: [
          { id: 1, name: "aaa", score: 100 ,description:'score is ok'},
          { id: 2, name: "bbb", score: 100 ,description:'score is ok'},
          { id: 3, name: "ccc", score: 100 },
          { id: 4, name: "ddd", score: 100 },
          { id: 5, name: "ddd", score: 100 },
          { id: 6, name: "ddd", score: 100 },
          { id: 7, name: "ddd", score: 100 },
          { id: 8, name: "ddd", score: 100 },
          { id: 9, name: "ddd", score: 100 },
          { id: 10, name: "ddd", score: 100 },
          { id: 11, name: "ddd", score: 100 },
          { id: 12, name: "ddd", score: 100 },
          { id: 13, name: "ddd", score: 100 },
        ],
        selectedItems: [],
        loading: false,
      }
    }
}

</script>
```
:::


### 紧凑型
::: demo
```html
 <my-table
      :columns="columns"
      :data="dataSource"
      numberVisible
      compact
></my-table>   

<script>
export default {
    data(){
      return {
        columns: [
          { text: "姓名", filed: "name" ,width:"230"},
          { text: "分数", filed: "score" ,width:"230"},
        ],
        dataSource: [
          { id: 1, name: "aaa", score: 100 ,description:'score is ok'},
          { id: 2, name: "bbb", score: 100 ,description:'score is ok'},
          { id: 3, name: "ccc", score: 80 },
          { id: 4, name: "ddd", score: 60 },
          { id: 5, name: "ddd", score: 85 },
        ],
      }
  }
}

</script>
```
:::

### 显示加载状态
::: demo
```html
 <my-table
      :columns="columns"
      :data="dataSource"
      numberVisible
      compact
      :loading="loading"
></my-table>   

<script>
export default {
    data(){
      return {
        columns: [
          { text: "姓名", filed: "name" ,width:"230"},
          { text: "分数", filed: "score" ,width:"230"},
        ],
        dataSource: [
          { id: 1, name: "aaa", score: 100 ,description:'score is ok'},
          { id: 2, name: "bbb", score: 100 ,description:'score is ok'},
          { id: 3, name: "ccc", score: 80 },
          { id: 4, name: "ddd", score: 60 },
          { id: 5, name: "ddd", score: 85 },
        ],
        loading:true
      }
    }
}

</script>
```
:::


### Attributes
| 属性          | 属性值        | 说明                                       | 默认  |
| ------------- | ------------- | ------------------------------------------ | ----- |
| data          | Array         | table展示的数据                            | null  |
| columns       | Array         | table每一列的标题                          | null  |
| loading       | Boolean       | 表格是否展示loading状态                    | false |
| selected      | Boolean       | 表格是否展示多选框                         | false |
| height        | Number/String | 表格的高度                                 | ' '   |
| selectedItems | Array         | 表格多选框选中项所存入的数组,必须加`.sync` | [ ]   |
| expendFiled   | String        | 可展开行的具体描述                         | ' '   |
| numberVisible | Boolean       | 是否展示序号                               | false |
| bordered      | Boolean       | 是否带边框                                 | false |
| compact       | Boolean       | 是否为紧凑型                               | false |
| striped       | Boolean       | 是否展示条纹                               | true  |


