<template>
  <div class="select">
    <select
      :value="value"
      @input="changed"
    >
      <option
        v-for="item in list"
        :value="item"
        :key="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'RowsPerPage',

    props: {
      value: {
        type: Number,
        required: true,
      },
    },

    data() {
      return {
        list: [2, 5, 10, 50],
      };
    },

    methods: {
      changed(e) {
        this.$emit('input', e.target.value);
      },
    },
  };
</script>

<style scoped>

</style>