<template>
  <nav class="pagination" v-if="pagesCount > 1">
    <a class="pagination-previous" @click="prevPage" :disabled="currentPage === 1">Previous</a>
    <a class="pagination-next" @click="nextPage" :disabled="currentPage === pagesCount">Next page</a>
    <ul class="pagination-list">
      <li v-for="page in pagesCount">
        <a 
          :class="{ 'pagination-link': true, 'is-current': page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'Pager',

    props: {
      itemsPerPage: {
        type: Number,
        required: true,
      },

      itemsCount: {
        type: Number,
        required: true,
      },

      currentPage: {
        type: Number,
        required: true,
      },
    },

    computed: {
      pagesCount() {
        return Math.ceil(this.itemsCount / this.itemsPerPage);
      },
    },

    methods: {
      goToPage(page) {
        if (page !== this.currentPage) {
          this.$emit('goToPage', page);
        }
      },

      nextPage() {
        if (this.currentPage < this.pagesCount) {
          this.goToPage(this.currentPage + 1);
        }
      },

      prevPage() {
        if (this.currentPage > 1) {
          this.goToPage(this.currentPage - 1);
        }
      },
    },
  };
</script>

<style scoped>

</style>