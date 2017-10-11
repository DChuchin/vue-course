<template>
  <nav class="navbar has-shadow">
    <div class="container is-widescreen">
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
    </div>
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