<script setup>
import { ref } from 'vue'

const player = ref('')
const joining = ref(false)

function onJoinQuiz() {
    joining.value = true
    // TODO API call to join and redirect to the quiz
}
</script>

<template>
    <form @submit.prevent="onJoinQuiz" class="pure-form">
        <fieldset>
            <legend>Rejoindre le quiz en tant que : {{ player }}</legend>
            <input v-model.trim="player" type="name" placeholder="Votre nom (5+ caractères)" />
        </fieldset>
        <button :disabled="joining || player.length < 5" type="submit" class="pure-button pure-button-primary">Rejoindre</button>
    </form>
</template>

<style scoped>
</style>
