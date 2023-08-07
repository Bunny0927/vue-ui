//封装一个父子间通信的方法
// 接收了三个参数，第一个是组件的 name 值，用于向上或向下递归遍历来寻找对应的组件，
// 第二个和第三个就是上文分析的自定义事件名称和要传递的数据。
// 通过 while 语句，不断向上遍历更新当前组件（即上下文为当前调用该方法的组件）的父组件实例（变量 parent 即为父组件实例），
// 直到匹配到定义的 componentName 与某个上级组件的 name 选项一致时，结束循环，
// 并在找到的组件实例上，调用 $emit 方法来触发自定义事件 eventName。
export default {
    methods: {
      dispatch(componentName, eventName, params) {
        let parent = this.$parent || this.$root;
        let name = parent.$options.name;
        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;
          if (parent) name = parent.$options.name;
        }
        if (parent) parent.$emit.apply(parent, [eventName].concat(params));
      }
    }
  }