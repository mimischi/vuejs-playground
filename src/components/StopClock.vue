<template lang="pug">
  div  {{ hours | doubleDigits }}:{{ minutes | doubleDigits }}:{{ seconds | doubleDigits }}
</template>

<script>
export default {
  name: 'StopClock',
  data () {
    return {
      duration: 0,
      now: {
        type: Number,
        default: ''
      },
      startDate: {
        type: Number,
        default: ''
      }
    }
  },
  mounted: function () {
    this.startDate = Math.trunc((new Date().getTime() / 1000))
    this.createClock()
  },
  beforeDestroy: function () {
    this.destroyClock()
  },
  filters: {
    doubleDigits: function (value) {
      if (value.toString().length <= 1) {
        return `0${value.toString()}`
      }
      return value.toString()
    }
  },
  methods: {
    createClock: function () {
      this.clockInterval = window.setInterval(() => {
        this.duration = Math.trunc((new Date()).getTime() / 1000) - this.startDate
      }, 1000)
    },
    destroyClock: function () {
      clearInterval(this.clockInterval)
    }
  },
  computed: {
    hours: function () {
      return Math.trunc((this.duration / 3600) % 24)
    },
    minutes: function () {
      return Math.trunc((this.duration / 60) % 60)
    },
    seconds: function () {
      return Math.trunc(this.duration % 60)
    }
  }
}
</script>
