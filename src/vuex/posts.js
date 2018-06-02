import appService from '../app.service.js'

const state = {
  posts: [],
  categroyId: 0
}

const actions = {
  updateCategory (context, categoryId) {
    return new Promise((resolve) => {
      appService.getPosts(categoryId)
        .then(data => {
          context.commit('doUpdateCategory', { categoryId, posts: data })
          resolve()
        })
        .catch(() => window.alert('Could not load posts!'))
    })
  }
}

const mutations = {
  doUpdateCategory (state, data) {
    state.categoryId = data.categoryId
    state.posts = data.posts
  }
}

export default {
  namespaced: true,
  state,
  getters: {
    posts () {
      return state.posts
    }
  },
  actions,
  mutations
}
