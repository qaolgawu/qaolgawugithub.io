class Api {
    constructor() {
        this.url = 'https://dummyjson.com/'
    }
    async getProducts() {
        const response = await fetch(this.url + 'products')
        const data = await response.json()
        return data
    }
}

export const api = new Api()