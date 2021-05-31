<template>
    <section class="display-wrapper">
        <div class="display-header">
            <h1 class="display-title">{{title}}</h1>
            <div class="display-subtitle" role="doc-subtitle">
                {{subtitle}}
            </div>
        </div>
        <slot></slot>
    </section>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    subtitle: String
})
</script>

<style lang="scss">
.display-wrapper {
    width:calc(100% - 220px);
    height:100%;
    box-sizing:border-box;
    padding:24px;
    .display-header {
        display:block;
        margin-bottom:60px;
        .display-title {
            margin-bottom:10px;
        }
    }
}
</style>
