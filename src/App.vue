<template>
    <div class="menu-container">
        <Menu :menuEntries="menuSetup"/>
    </div>
    <router-view/>
</template>

<script setup>
import Menu from '@/components/menu/Menu'
import { menuSetup } from '@/assets/setups/menu'
</script>

<style lang="scss">
html, body, #app {
    width:100%;
    height:100%;
    overflow:hidden;
    background: white;
    font-family: 'Alegreya', serif;
}
.menu-container {
    width:100%;
    display:flex;
}
</style>
