<script setup>
import { ref } from 'vue'

const playerName = ref('')
const joining = ref(false)

function onJoinQuiz() {
    joining.value = true
    // TODO API call to join and redirect to the quiz
}
</script>

<template>
    <form @submit.prevent="onJoinQuiz" class="pure-form">
        <fieldset>
            <legend>Rejoindre le quiz en tant que : {{ playerName }}</legend>
            <input v-model.trim="playerName" type="name" placeholder="Votre nom (5+ caractères)" />
        </fieldset>
        <button :disabled="joining || playerName.length < 5" type="submit" class="pure-button pure-button-primary">Rejoindre</button>
    </form>
</template>

<style scoped>
</style>
