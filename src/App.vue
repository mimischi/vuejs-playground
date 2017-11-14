<template lang="pug">
  section(class='section')
    div(class='container')
      quick-button(name='Start', :disabled='runningShift', classNames='button', v-on:toggleClock='toggleClock')
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
      runningShift: false
    }
  },
  components: {
    StopClock,
    QuickButton
  },
  methods: {
    toggleClock: function () {
      this.runningShift = !this.runningShift
    }
  }
}
</script>

<style>

</style>
