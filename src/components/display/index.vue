<template>
    <section class="display-wrapper">
        <slot></slot>
    </section>
</template>

<style lang="scss">
.display-wrapper {
    width:calc(100% - 220px);
    height:100%;
    box-sizing:border-box;
    padding:24px;
}
</style>
