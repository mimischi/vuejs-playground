<template lang="pug">
  div
    button(:class='computedClass' @click='toggleButton' :disabled='disabled') {{name}}
</template>

<script>
export default {
  name: 'QuickButton',
  props: {
    name: {
      type: String,
      default: ''
    },
    classNames: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    computedClass: function () {
      return this.classNames ? this.classNames.split(' ') : []
    }
  },
  methods: {
    toggleButton: function (event) {
      this.$emit('toggleClock')
    }
  }
}
</script>
