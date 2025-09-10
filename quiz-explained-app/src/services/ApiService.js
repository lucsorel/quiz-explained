class ApiService {
    constructor() {
        this.quizPromisesById = {}
        this.playerPromisesById = {}
    }
    getAndCachePromise(itemPromisesById, itemId) {
        let itemPromise = itemPromisesById[itemId]
        if (itemPromise) {
            return itemPromise
        } else {
            itemPromise = fetch(`/api/quizzez/${itemId}`).then(quizResponse => quizResponse.json())
            itemPromisesById[itemId] = itemPromise
            // TODO check and adapt key removal
            itemPromise.catch(() => delete itemPromisesById[itemId])
            return itemPromise
        }
    }

    getQuizPromise(quizId) {
        return this.getAndCachePromise(this.quizPromisesById, quizId)
    }
    getPlayerPromise(playerId) {
        return this.getAndCachePromise(this.playerPromisesById, playerId)
    }
}

export const apiService = new ApiService()