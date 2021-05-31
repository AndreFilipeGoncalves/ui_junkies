<template>
    <menu class="side-menu-wrapper">
        <router-link
        class="side-menu-entry"
        v-for="entry in menuEntries"
        :to="entry.route"
        :key="entry.route">
            {{entry.label}}
        </router-link>
    </menu>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    menuEntries: Object
})
</script>

<style lang="scss">
.side-menu-wrapper {
    width:220px;
    height:100%;
    border-right: 1px solid #fc575e;
    box-sizing:border-box;
    margin:0;
    padding:0;
    .side-menu-entry {
        text-decoration:none;
    }
}
</style>
