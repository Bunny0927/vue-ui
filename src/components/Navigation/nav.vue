<template>
  <div class="my-nav" :class="{ vertical: vertical }">
    <!-- 满足vertical属性则给类加上vetical -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-nav",
  data() {
    return {
      items: [],
      namePath: [], //用于存放 寻找父节点的路径
    };
  },
  provide() {
    return {
      root: this,
      vertical: this.vertical,
    };
  },
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //钩子函数
    this.updatedChildren();
    this.listenToChildren();
  },
  updated() {
    this.updatedChildren();
  },
  // 或者也可以使用watch
  // watch: {
  //   selected: {
  //     deep: true, // 监听对象内部的变化
  //     handler() {
  //       this.updatedChildren(); // 调用更新选中状态的函数
  //     },
  //   },
  // },
  methods: {
    addItem(vm) {
      //告诉祖先组件到底是谁被选中了
      //通过 provide就不需要中间商，可以直接选中了
      this.items.push(vm);
    },
    updatedChildren() {
      //更新的时候再做一次
      this.items.forEach((vm) => {
        if (this.selected.indexOf(vm.name) >= 0) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenToChildren() {
      this.items.forEach((vm) => {
        vm.$on("add:selected", (name) => {
          if (this.multiple) {
            //如果是多选则传入多个激活
            if (this.selected.indexOf(name) < 0) {
              //不在数组里
              //单纯的push不行,因为有可能在里面了
              // this.selected.push(name)//但是因为selected是props属性不能改变,得用深拷贝
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit("update:selected", copy); //给selected传入新的copy数组
            }
          } else {
            this.$emit("update:selected", [name]); //如果是单选就传入自己的name
          }
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../styles/nav.scss";
@import "../../styles/totalnav.scss";
@import "../../styles/common/color";
</style>