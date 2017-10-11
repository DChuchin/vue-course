<template>
  <div>
    <input
      class="input"

      v-if="isEdit"

      :type="type"
      :value="value"
      :required="required"
      :placeholder="placeholder"

      @input="changeValue"
    >
    <span v-else-if="value">
      {{ value }}
    </span>
    <span v-else> - </span>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text',
      },

      value: {
        type: [String, Number],
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
    },

    methods: {
      changeValue(e) {
        this.$emit('input', e.target.value);
      },
    },
  };
</script>