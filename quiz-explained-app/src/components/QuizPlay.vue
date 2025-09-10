<script setup>
import { ref } from 'vue'
import { apiService } from '../services/ApiService'

const route = useRoute()

const [quiz, player] = await Promise.all(
    await apiService.getQuizPromise(route.params.quizId),
    await apiService.getPlayerPromise(route.params.playerId),
)

// waiting screen
/*
 * Pas de question en cours mais tenez-vous prêt·e !
 */
const question = {
    id: "uid",
    title: "Pourquoi [...] ?",
    weight: 0.5,
    answers: [
        {
            id: "uid",
            title: "parce que [...]"
        },
    ]
}
// arrivée d'une question
/*
 * - intitulé question
 * - réponses possibles sélectionnables
 * - compte à rebours
 * - bouton d'envoi
 *   - grisé si aucune réponse sélectionnée
 *   - activé si réponse sélectionnée
 *   - grisé après envoi de la réponse + confirmation d'envoi de la réponse (non modifiable)
 */

// temps écoulé
/*
 * - vous n'avez rien répondu (le cas échéant)
 */

// podium
/*
 * - points et rang
 * - n 1res personnes (n en dur ? n défini en administration) et leurs points
 */
</script>

<template>
</template>

<style scoped>
</style>
