<template>
    <nav class="nav has-shadow">
      <div class="container">
        <router-link to="/category/front-end">
          <img src="http://bit.ly/vue-img" alt="VUE SPA" />
        </router-link>
        <router-link class="nav-item is_tab " :to="{ name : 'category', params : { id: 'front-end' } }">Front End</router-link>
        <router-link class="nav-item is_tab" :to="{ name : 'category', params : { id: 'mobile' } }">Mobile</router-link>
        <router-link class="nav-item is_tab" to="/login">
          <span v-if="IsAuthenticated">Logout</span><span v-else>Login</span>
        </router-link>
      </div>
    </nav>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['IsAuthenticated'])
    }
  }
</script>