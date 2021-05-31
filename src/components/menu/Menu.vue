<template>
    <nav class="menu-wrapper">
        <router-link
        class="menu-entry"
        v-for="entry in menuEntries"
        :to="entry.route"
        :key="entry.route">
            {{entry.label}}
        </router-link>
    </nav>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    menuEntries: Object
})

</script>

<style lang="scss">
.menu-wrapper {
    width:100%;
    height:60px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
    background-color: #f7b42c;
    background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);

    box-sizing:border-box;
    padding:0px 24px;
    box-shadow: -10px 10px 10px 0px rgba(255,255,255,0.15);
    .menu-entry {
        box-sizing:border-box;
        padding:12px;
        font-size:24px;
        color: #ffffff;
        text-decoration:none;
        &.router-link-active {
            text-decoration: underline;
        }
    }
}
</style>
