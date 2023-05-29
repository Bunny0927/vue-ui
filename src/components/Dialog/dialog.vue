<template>
  <transition name="dialog-fade">
    <!-- 遮罩 -->
    <!-- v-show保证对话框的显示和隐藏 -->
    <div
      class="my-dialog--wrapper"
      v-show="visiable"
      @click.self="closeDialog"
    >
      <div
        :class="['my-dialog', mimicry ? 'mimicry' : '']"
        :style="{ width: width, 'margin-top': top }"
      >
        <div class="my-dialog--header">
          <!-- slot包裹title 如果插入填入了title那么内部的值就会被替换为slot-->
          <slot name="title">
            <span class="my-dialog--title">{{ title }}</span>
          </slot>
          <!-- 有问题 -->
          <!-- <my-Button
            circle
            :icon="['far', 'times-circle']"
            class="my-dialog--headerbtn"
            @click="closeDialog"
          ></my-Button> -->
        </div>
        <div class="my-dialog--body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="my-dialog--footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-dialog",
  data() {
    return {};
  },
  methods: {
    closeDialog() {
      this.$emit("update:visiable", false); //传递给父组件，然后再传回来
    },
  },
  components: {},
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "50%",
    },
    top: {
      type: String,
      default: "15vh",
    },
    visiable: {
      type: Boolean,
      default: false,
    },
    mimicry: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@import "../../styles/dialog.scss";
</style>