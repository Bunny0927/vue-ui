<template>
  <div :class="[{'is-vertical':vertical}]" class="group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-checkbox-group",
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  props: {
    value:{
      type:Array
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.is-vertical{
    display: flex;
    flex-direction: column;
}
.group{
  margin: 0;
}
</style>