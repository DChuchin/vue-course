<template>
  <div>
    <div class="container is-widescreen">
      <header>
        <rows-picker v-model.number="RowsPerPage"></rows-picker>
      </header>
      <user-list :RowsPerPage="RowsPerPage"></user-list>
    </div>
  </div>
</template>

<script>
  import UserList from '@/components/UserList';
  import RowsPicker from '@/components/RowsPerPage';

  export default {
    components: {
      UserList,
      RowsPicker,
    },

    data() {
      return {
        RowsPerPage: 5,
      };
    },
  };
</script>

<style scoped>

</style>