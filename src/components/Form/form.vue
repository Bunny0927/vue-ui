<template>
    <div class="my-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "my-form",
    data() {
        return {
           
        };
    },
    methods: {
        // 提交表单
        submit() {
            this.$emit("submit");
        },
        // 重置表单
        reset() {
            this.$emit("reset");
        }
    },
}
</script>

<style>

</style>