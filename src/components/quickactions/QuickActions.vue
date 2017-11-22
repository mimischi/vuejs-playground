<template lang="pug">
  v-layout(column align-center)
    v-card(color='grey lighten-4' flat)
      v-container(fluid)
        v-layout(row wrap)
          v-flex(xs12 v-if="!runningShift") HELLO
          v-flex(xs12 v-if="runningShift")
            stop-clock
          v-flex(xs12)
            div(v-if='!runningShift')
              quick-button(name='Start', icon='play_arrow', :disabled='runningShift', classNames='primary', v-on:toggleClock='toggleClock')
            div(v-if='runningShift')
              quick-button(name='Stop', icon='stop', :disabled='!runningShift', classNames='primary', v-on:toggleClock='toggleClock')
</template>

<script>
import StopClock from './StopClock'
import QuickButton from './QuickButton'
import ShiftTable from '../timeforms/ShiftTable'

export default {
  name: 'QuickActions',
  data () {
    return {
      runningShift: false,
      shiftPaused: false
    }
  },
  components: {
    StopClock,
    QuickButton,
    ShiftTable
  },
  methods: {
    toggleClock: function () {
      this.runningShift = !this.runningShift
    },
    toggleClockPause: function () {
      this.shiftPaused = !this.shiftPaused
    }
  }
}
</script>
