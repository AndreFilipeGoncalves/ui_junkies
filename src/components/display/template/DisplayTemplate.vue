<template>
    <article class="display-template">
        <div class="template-header">
            <h3 class="template-title">{{title}}</h3>
            <p class="template-subtitle">{{subtitle}}</p>
        </div>
        <slot></slot>
    </article>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    subtitle: String
})
</script>

<style lang="scss">
.display-template {
    .template-header {
        .template-title {
            font-weight:500;
            font-size:20px;
        }
        .template-subtitle {
            font-weight:400;
            font-size:16px;
        }
    }
}
</style>
