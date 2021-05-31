<template>
    <DisplayWrapper
    :title="t('gallery.buttons.heading')"
    :subtitle="t('gallery.buttons.subheading')">
        <content>
            <h1> buttons </h1>
        </content>
    </DisplayWrapper>
</template>

<script setup>
import DisplayWrapper from '@/components/display'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
