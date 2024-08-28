<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import QrcodeVue from 'qrcode.vue'

const route = useRoute()

const qrCodeLink = ref(`${location.protocol}//${location.host}/quiz/${route.params.id}`)
</script>

<template>
    <qrcode-vue :value="qrCodeLink" />
    <p>
        {{ qrCodeLink }}
    </p>
</template>
