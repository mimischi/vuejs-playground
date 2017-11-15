<template lang="pug">
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
      if (this.name === 'Pause' || this.name === 'Unpause') {
        this.$emit('pauseClock')
      } else {
        this.$emit('toggleClock')
      }
    }
  }
}
</script>
