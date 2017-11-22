<template lang="pug">
  div
    shift-table(:selected="selected", :headers="headers", :items="items")
    input-form
</template>

<script>
import InputForm from './InputForm'
import ShiftTable from './ShiftTable'

export default {
  name: 'InputBody',
  data () {
    return {
      date: '2017-11-10',
      selected: [],
      headers: [
        {
          text: 'Start time',
          align: 'left',
          value: 'start'
        },
        {
          text: 'Stop time',
          align: 'left',
          value: 'stop'
        },
        {
          text: 'Contract',
          align: 'left',
          value: 'contract'
        }
      ],
      items: [
        {
          id: 1,
          start: '10 Nov 2017 08:30:15 GMT',
          stop: '10 Nov 2017 12:15:00 GMT',
          contract: 'Uni'
        },
        {
          id: 2,
          start: '11 Nov 2017 12:00:00 GMT',
          stop: '11 Nov 2017 16:15:12 GMT',
          contract: ''
        }
      ]
    }
  },
  components: {
    InputForm,
    ShiftTable
  }
}
</script>
