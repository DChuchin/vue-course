<template>
  <table class="table is-striped">
    <tr>
      <td>First Name</td>
      <td><span v-if="user.firstName">{{ user.firstName }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Last Name</td>
      <td><span v-if="user.lastName">{{ user.lastName }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Age</td>
      <td><span v-if="user.age">{{ user.age }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Company</td>
      <td><span v-if="user.company">{{ user.company }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Phone</td>
      <td><span v-if="user.phone">{{ user.phone }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Address</td>
      <td><span v-if="user.address">{{ user.address }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Email</td>
      <td><span v-if="user.email">{{ user.email }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Registered</td>
      <td><span v-if="user.registered">{{ user.registered }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Balance</td>
      <td><span v-if="user.balance">{{ user.balance }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>Access Level</td>
      <td><span v-if="user.accessLevel">{{ user.accessLevel }}</span><span v-else> - </span></td>
    </tr>
    <tr>
      <td>About</td>
      <td><span v-if="user.about">{{ user.about }}</span><span v-else> - </span></td>
    </tr>

  </table>
</template>

<script>
  import axios from 'axios';

  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },

    data() {
      return {
        isLoaded: false,
        user: {},
        url: 'http://localhost:3000/users',
        ediatable: false,
      };
    },

    computed: {
      endpoint() {
        return `${this.url}/${this.id}`;
      },
    },

    methods: {
      getUser() {
        this.isLoaded = false;

        axios.get(this.endpoint)
          .then((response) => {
            this.user = response.data;
            this.isLoaded = true;
          });
      },
    },

    created() {
      this.getUser();
    },
  };
</script>

<style scoped>

</style>