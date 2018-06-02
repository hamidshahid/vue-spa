import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com/'

const appService = {
  getPosts (categoryId) {
    return new Promise((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${categoryId}&per_page=6`)
        .then((response) => {
          resolve(response.data)
        })
    })
  },
  login (credentials) {
    return new Promise((resolve, reject) => {
      if (credentials.username === 'hamid' && credentials.password === 'vuejs') {
        var random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        var tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        return resolve({token: random, expiration: tomorrow})
      } else {
        return reject(new Error('User not found'))
      }
    })
  }
}

export default appService
