<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    computed: {
      ...mapGetters(['IsAuthenticated'])
    },
    methods: {
      ...mapActions({
        logout: 'logout'
      }),
      login () {
        this.$store.dispatch('login', {username: this.username, password: this.password})
          .then(() => {
            this.username = ''
            this.password = ''
          })
      }
    }
  }
</script>
<template>
  <div class="content">
    <div v-if="IsAuthenticated">
      <button class="button is-primary" v-on:click='logout'>Logout</button>
    </div>
    <div v-else>
      <h2>Login</h2>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input class="input" type="text" 
            placeholder="Your username" v-model="username">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Password</label>
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <input class="input" type="password" 
            placeholder="Your password" v-model="password">
          </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
          <div class="control">
            <button class="button is-primary" v-on:click='login'>Login</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>