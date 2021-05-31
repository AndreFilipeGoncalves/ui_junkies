<template>
    <DisplayWrapper
    :title="t('gallery.dropdowns.heading')"
    :subtitle="t('gallery.dropdowns.subheading')">
        <content>
            <h1> dropdowns </h1>
        </content>
    </DisplayWrapper>
</template>

<script setup>
import DisplayWrapper from '@/components/display'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
