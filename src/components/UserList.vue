<template>
  <div
    class="loader is-loading"
    v-if="!isLoaded"
  >
    Loading ...
  </div>
  <table class="table is-striped" v-else>
    <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Активен</th>
        <th>Баланс</th>
        <th>Email</th>
        <th>Телефон</th>
        <th>Зарегистрирован</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in filteredUsers"
        :key="user.id"
      >
        <router-link tag="td" :to="`/user/${user.id}`">
          <a>
            {{ user.id }}
          </a>
        </router-link>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.isActive }}</td>
        <td>{{ user.balance }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.registered }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'user-list',

    props: {
      RowsPerPage: {
        type: Number,
      },
    },

    data() {
      return {
        users: [],
        endpoint: 'http://localhost:3000/users',
        isLoaded: false,
      };
    },

    computed: {
      rowsCount() {
        return this.users.length;
      },

      filteredUsers() {
        return this.users.slice(0, this.RowsPerPage);
      },
    },

    methods: {
      getUsers() {
        axios.get(this.endpoint)
          .then((response) => {
            this.users = response.data;
            this.isLoaded = true;
          });
      },
    },

    created() {
      this.getUsers();
    },
  };
</script>

<style scoped>

</style>