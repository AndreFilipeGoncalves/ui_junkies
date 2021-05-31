<template>
    <section class="display-wrapper">
        <head class="display-header">
            <h1 class="display-title">{{title}}</h1>
            <div class="display-subtitle" role="doc-subtitle">
                {{subtitle}}
            </div>
        </head>
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
        .display-title {
            margin-bottom:10px;
        }
    }
}
</style>
