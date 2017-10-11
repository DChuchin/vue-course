<template>
  <div class="user">
    <div class="user__photo" v-if="user.picture">
      <img :src="user.picture">
    </div>
    <div class=""></div>
    <table class="table is-striped is-fullwidth">
      <tr>
        <td>First Name</td>
        <td>
          <editable-input
            v-model="user.firstName"
            type="text"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>
          <editable-input
            v-model="user.lastName"
            type="text"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Age</td>
        <td>
          <editable-input
            v-model="user.age"
            type="number"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Company</td>
        <td>
          <editable-input
            v-model="user.company"
            type="text"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Phone</td>
        <td>
          <editable-input
            v-model="user.phone"
            type="phone"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Address</td>
        <td>
          <editable-input
            v-model="user.address"
            type="text"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Email</td>
        <td>
          <editable-input
            v-model="user.email"
            type="text"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Registered</td>
        <td>
          <editable-input
            v-model="user.registered"
            type="text"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Balance</td>
        <td>
          <editable-input
            v-model="user.balance"
            type="text"
            :is-edit="editable"
          ></editable-input>
        </td>
      </tr>
      <tr>
        <td>Access Level</td>
        <td>
          <editable-select
            v-model="user.accessLevel"
            :is-edit="editable"
          >
            <option>guest</option>
            <option>user</option>
            <option>admin</option>
          </editable-select>
        </td>
      </tr>
      <tr>
        <td>About</td>
        <td>
          <editable-textarea
            v-model="user.about"
            :is-edit="editable"
            rows="10"
          ></editable-textarea>
        </td>
      </tr>

    </table>
    <footer class="footer">
      <button
        class="button is-primary"
        :disabled="editable"
        @click="editable = !editable"
      >
        EDIT
      </button>
      <button
        class="button is-primary"
        :class="{'is-loading': sending}"
        v-if="editable"
        @click="save"
      >
        SAVE
      </button>
    </footer>
  </div>
</template>

<script>
  import axios from 'axios';
  import EditableInput from '@/components/EditableForm/EditableInput';
  import EditableSelect from '@/components/EditableForm/EditableSelect';
  import EditableTextarea from '@/components/EditableForm/EditableTextarea';

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
        editable: false,
        sending: false,
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

      save() {
        this.sending = true;

        axios.patch(this.endpoint, this.user)
          .then((response) => {
            console.log(response.data);
            this.sending = false;
            this.editable = false;
          });
      },
    },

    created() {
      this.getUser();
    },

    components: {
      EditableInput,
      EditableSelect,
      EditableTextarea,
    },
  };
</script>

<style scoped>

</style>