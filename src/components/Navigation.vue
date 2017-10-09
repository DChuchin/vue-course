<template>
  <nav class="navbar has-shadow">
    <ul class="navbar-tabs">
      <router-link 
        v-for="link, index in links" 
        :to="link.path"
        tag="li"
        :key="index"
        class="navbar-item is-tab"
        active-class="is-active"
        exact
      >
        <a>
          {{ link.name }}
        </a> 
      </router-link>
    </ul>
  </nav>
</template>

<script>
  import 'bulma/css/bulma.css';

  export default {
    props: {
      links: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped>

</style>