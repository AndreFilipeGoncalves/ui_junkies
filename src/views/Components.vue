<template>
    <main class="components-wrapper">
        <!-- side menu -->
        <SideMenu :menuEntries="sideMenu"/>
        <!-- display section -->
        <router-view/>
    </main>
</template>

<script setup>
import SideMenu from '@/components/menu/SideMenu'
import { sideMenu } from '@/assets/setups/sideMenu'
</script>

<style lang="scss">
.components-wrapper {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
}
</style>
