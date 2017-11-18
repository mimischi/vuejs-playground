<template lang="pug">
    v-btn(block dark :class='computedClass' @click='toggleButton' :disabled='disabled') {{name}}
      v-icon(dark right) {{icon}}
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
    icon: {
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
