<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post) in posts" v-bind:key="post.id">
      <post :link="post.rest_api_enabler.Link">
        <h3 slot="title" v-html="post.title.rendered"></h3>
        <span slot="text" v-html="post.excerpt.rendered"></span>
      </post>
    </div>
  </div>
</template>

<script>
  import Post from './Post.vue'
  import { mapGetters } from 'vuex'
  export default {
    components: {
      'post': Post
    },
    computed: {
      ...mapGetters('postsModule', ['posts'])
    },
    methods: {
      loadPosts () {
        let categoryId = 2
        if (this.$route.params.id === 'mobile') {
          categoryId = 11
        }
        this.$store.dispatch('postsModule/updateCategory', categoryId)
      }
    },
    watch: {
      '$route' (to, from) {
        this.loadPosts()
      }
    },
    created () {
      this.loadPosts()
    }
  }
</script>
<template>
  <div class="columns">
    <div class="column is-one-third" v-for="(post) in posts" v-bind:key="post.id">
      <post :link="post.rest_api_enabler.Link">
        <h3 slot="title" v-html="post.title.rendered"></h3>
        <span slot="text" v-html="post.excerpt.rendered"></span>
      </post>
    </div>
  </div>
</template>