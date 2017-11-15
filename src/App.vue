<template lang="pug">
  section(class='section')
    div(class='container')
      div(class='level')
        div(class='level-left')
          div(class='level-item' v-if='!runningShift')
            quick-button(name='Start', :disabled='runningShift', classNames='button', v-on:toggleClock='toggleClock')
          div(class='level-item' v-if='runningShift')
            quick-button(name='Pause', v-if='!shiftPaused', classNames='button', v-on:pauseClock='toggleClockPause')
            quick-button(name='Unpause', v-if='shiftPaused', classNames='button', v-on:pauseClock='toggleClockPause')
            quick-button(name='Stop', :disabled='!runningShift', classNames='button', v-on:toggleClock='toggleClock')
      stop-clock(v-if='runningShift')
</template>

<script>
import StopClock from './components/StopClock'
import QuickButton from './components/QuickButton'

export default {
  name: 'app',
  data () {
    return {
      runningShift: false,
      shiftPaused: false
    }
  },
  components: {
    StopClock,
    QuickButton
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

<style>

</style>
