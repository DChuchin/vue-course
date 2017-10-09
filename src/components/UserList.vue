<template>
  <div
    class="loader is-loading"
    v-if="!isLoaded"
  >
    Loading ...
  </div>
  <div v-else>
    <table class="table is-striped">
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
          <router-link tag="td" :to="`/users/${user.id}`">
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
    <pager
      :itemsPerPage.number="RowsPerPage"
      :currentPage.number="currentPage"
      :itemsCount.number="rowsCount"
      @goToPage="goToPage"
    >
    </pager>
  </div>
</template>

<script>
  import axios from 'axios';
  import Pager from '@/components/Pager';

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
        currentPage: 1,
      };
    },

    computed: {
      rowsCount() {
        return this.users.length;
      },

      filteredUsers() {
        const lastNumber = this.currentPage * this.RowsPerPage;
        const firstNumber = lastNumber - this.RowsPerPage;

        return this.users.slice(firstNumber, lastNumber);
      },
    },

    methods: {
      getUsers() {
        this.isLoaded = false;

        axios.get(this.endpoint)
          .then((response) => {
            this.users = response.data;
            this.isLoaded = true;
          });
      },

      goToPage(page) {
        this.currentPage = page;
      },
    },

    watch: {
      RowsPerPage() {
        this.goToPage(1);
      },
    },

    created() {
      this.getUsers();
    },

    components: {
      Pager,
    },
  };
</script>

<style scoped>

</style>

