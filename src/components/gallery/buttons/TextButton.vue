<template>
    <DisplayTemplate
    :title="t('gallery.buttons.textButton.title')"
    :subtitle="t('gallery.buttons.textButton.description')">
        <TextButton/>
    </DisplayTemplate>
</template>

<script setup>
import DisplayTemplate from '@/components/display/template/DisplayTemplate'
import TextButton from '@/components/elements/buttons/TextButton'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
