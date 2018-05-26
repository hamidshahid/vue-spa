<template>  
  <div>
    <app-header></app-header>
    <section class="main-section section">
      <div class="container content">
        <categroy></categroy>
      </div>
    </section>
    <app-footer></app-footer>
  </div>  
</template>
<script>
  import Category from './Category.vue'
  import AppHeader from './AppHeader.vue'
  import AppFooter from './AppFooter.vue'
  export default {
    components: {
      'categroy': Category,
      'app-header': AppHeader,
      'app-footer': AppFooter
    }
  }
</script>
<style lang="scss">
  $primary: #287ab1;
  @import '~bulma';

  .columns {
    flex-wrap: wrap
  }
</style>
