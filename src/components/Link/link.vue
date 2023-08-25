<template>
  <a 
    :href="link"
    :class="[
        'my-link',
        `my-link--${type}`,
        {underline: underline},
        {disabled: disabled}
    ]"
    :disabled = "disabled"
    @click="isDisabled"
  >{{ value }}</a>
</template>

<script>
export default {
    name: "my-link",
    data() {
        return {
            link: this.href
        }
    },
    props: {
        type: {
            type: String,
            default: "default",
            validator: function () {
                return ["default", "primary", "success", "warning", "danger", "info"];
            }
        },
        href: {
            type: String,
            default: ''
        },
        underline: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: "文字链接"
        }
    },
    methods: {
        isDisabled() {
            if(this.disabled) {
                // 不直接修改props值，保证数据单向流动
                this.link = "javascript:void(0)";
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../styles/link.scss";
</style>