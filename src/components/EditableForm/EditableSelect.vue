<template>
  <div>
    <div
      class="select"
      v-if="isEdit"
    >
      <select

        :value="value"
        :required="required"

        @input="changeValue"
      >
        <slot></slot>
      </select>
    </div>
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
    },

    methods: {
      changeValue(e) {
        this.$emit('input', e.target.value);
      },
    },
  };
</script>