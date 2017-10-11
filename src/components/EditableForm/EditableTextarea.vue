<template>
  <div>
    <textarea
      class="textarea"

      v-if="isEdit"

      :value="value"
      :required="required"
      :placeholder="placeholder"
      :rows="rows"
      :cols="cols"

      @input="changeValue"
    ></textarea>
    <span v-else-if="value">
      {{ value }}
    </span>
    <span v-else> - </span>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
      },

      isEdit: {
        type: Boolean,
        required: true,
      },

      required: {
        type: Boolean,
      },

      placeholder: {
        type: String,
      },

      rows: {
        type: Number,
      },

      cols: {
        type: Number,
      },
    },

    methods: {
      changeValue(e) {
        this.$emit('input', e.target.value);
      },
    },
  };
</script>