<template lang="pug">
  div
    shift-table(:selected="selected", :headers="headers", :items="items")
    input-form(v-on:addItem="addNewItem")
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
          text: 'Duration',
          align: 'left',
          value: 'duration'
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
          start: '1511627921806',
          stop: '1511627921806',
          duration: '600',
          contract: 'Uni'
        },
        {
          id: 2,
          start: '1511627921806',
          stop: '1511627921806',
          duration: '300',
          contract: ''
        }
      ]
    }
  },
  components: {
    InputForm,
    ShiftTable
  },
  methods: {
    addNewItem (data) {
      data['id'] = this.items[this.items.length - 1].id + 1
      this.items.push(data)
    }
  }
}
</script>
