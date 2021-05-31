<template>
    <DisplayWrapper
    :title="t('gallery.buttons.heading')"
    :subtitle="t('gallery.buttons.subheading')">

        <!-- text button -->
        <TextButton/>

    </DisplayWrapper>
</template>

<script setup>
import DisplayWrapper from '@/components/display/wrapper/DisplayWrapper'
import TextButton from '@/components/gallery/buttons/TextButton'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
