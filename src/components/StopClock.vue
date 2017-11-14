<template lang="pug">
  div(class='tile is-ancestor')
    div(class='tile is-parent')
      article(class='tile is-child is-2 has-text-centered notification is-info box')
        p(class='title') {{ hours | doubleDigits }}
        p(class='subtitle') hours
      article(class='tile is-child is-2 has-text-centered notification is-info box')
        p(class='title') {{ minutes | doubleDigits }}
        p(class='subtitle') minutes
      article(class='tile is-child is-2 has-text-centered notification is-info box')
        p(class='title') {{ seconds | doubleDigits }}
        p(class='subtitle') seconds
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
    this.clockInterval = window.setInterval(() => {
      this.duration = Math.trunc((new Date()).getTime() / 1000) - this.startDate
    }, 1000)
  },
  beforeDestroy: function () {
    clearInterval(this.clockInterval)
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
    formatTime: function (number) {
      number = Math.trunc(number)
      return number <= 9 ? '0' + number : number
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
