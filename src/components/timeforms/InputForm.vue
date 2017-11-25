<template lang="pug">
v-form(v-model="valid" ref="form" lazy-validation)
  v-layout(row)
    v-flex(xs11 sm5)
      v-menu(
        lazy
        :close-on-content-click="false"
        v-model="startDateMenu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      )
        v-text-field(
          slot="activator"
          label="Date"
          v-model="startDate"
          prepend-icon="event"
          :rules="dateRules"
          readonly
        )
        v-date-picker(
          v-model="startDate"
          no-title
          scrollable
          actions
        )
          template(
            slot-scope="{ save, cancel }"
          )
            v-card-actions
              v-spacer
                v-btn(
                  flat
                  color="primary"
                  @click="cancel"
                ) Cancel
                v-btn(
                  flat
                  color="primary"
                  @click="save"
                ) OK
    v-spacer
    v-flex(xs11 sm5)
      v-menu(
        lazy
        :close-on-content-click="false"
        v-model="startTimeMenu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      )
        v-text-field(
          slot="activator"
          label="Time"
          v-model="startTime"
          prepend-icon="access_time"
          :rules="timeRules"
          readonly
        )
        v-time-picker(
          v-model="startTime"
          format="24hr"
          autosave
        )
  v-layout(row)
    v-flex(xs11 sm5)
      v-menu(
        lazy
        :close-on-content-click="false"
        v-model="stopDateMenu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      )
        v-text-field(
          slot="activator"
          label="Date"
          v-model="stopDate"
          prepend-icon="event"
          :rules="dateRules"
          readonly
        )
        v-date-picker(
          v-model="stopDate"
          no-title
          scrollable
          actions
        )
          template(
            slot-scope="{ save, cancel }"
          )
            v-card-actions
              v-spacer
                v-btn(
                  flat
                  color="primary"
                  @click="cancel"
                ) Cancel
                v-btn(
                  flat
                  color="primary"
                  @click="save"
                ) OK
    v-spacer
    v-flex(xs11 sm5)
      v-menu(
        lazy
        :close-on-content-click="false"
        v-model="stopTimeMenu"
        transition="scale-transition"
        offset-y
        full-width
        :nudge-right="40"
        max-width="290px"
        min-width="290px"
      )
        v-text-field(
          slot="activator"
          label="Time"
          v-model="stopTime"
          prepend-icon="access_time"
          :rules="timeRules"
          readonly
        )
        v-time-picker(
          v-model="stopTime"
          format="24hr"
          autosave
        )
  v-text-field(
    label="Duration"
    v-model="formattedDuration"
    readonly
  )
  v-btn(
    @click="submit"
    :disabled="!valid"
  ) Submit
  v-btn(@click="clear") Clear
</template>

<script>
import { formatDate } from '../mixins/formatDate'

export default {
  name: 'InputForm',
  props: [
    'initialStartDate',
    'initialStartTime',
    'initialstopDate',
    'initialstopTime'
  ],
  data () {
    return {
      valid: false,
      dateRules: [
        (v) => !!v || 'Date is required'
      ],
      timeRules: [
        (v) => !!v || 'Time is required'
      ],
      startDate: this.initialStartDate || null,
      startDateMenu: false,
      startTime: this.initialStartTime || null,
      startTimeMenu: false,
      stopDate: this.initialstopDate || null,
      stopDateMenu: false,
      stopTime: this.initialstopTime || null,
      stopTimeMenu: false
    }
  },
  computed: {
    duration () {
      if (this.startDate && this.startTime && this.stopDate && this.stopTime) {
        let startDate = this.startDate + ' ' + this.startTime
        let stopDate = this.stopDate + ' ' + this.stopTime
        return (new Date(stopDate) - new Date(startDate)) / 1000
      }
      return '0'
    },
    formattedDuration () {
      return this.$options.filters.formatTime(this.duration)
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        const data = {
          start: new Date(this.startDate + ' ' + this.startTime).getTime(),
          stop: new Date(this.stopDate + ' ' + this.stopTime).getTime(),
          duration: this.duration
        }
        this.$emit('addItem', data)
      }
    },
    clear () {
      console.log('Resetting the form!')
      this.$refs.form.reset()
    }
  },
  mixins: [formatDate]
}
</script>
