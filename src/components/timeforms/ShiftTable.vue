<template lang="pug">
  v-data-table(:headers="headers", :items="items", class="elevation-1")
    template(slot="items" slot-scope="props")
      td(class="text-cs-right") {{ props.item.start }}
      td(class="text-cs-right") {{ props.item.stop }}
      td(class="text-cs-right") {{ props.item.contract }}
</template>

<script>
export default {
  name: 'ShiftTable',
  data () {
    return {
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
          start: "10 Nov 2017 08:30:15 GMT",
          stop: "10 Nov 2017 12:15:00 GMT",
          contract: "Uni"
        },
        {
          id: 1,
          start: "11 Nov 2017 12:00:00 GMT",
          stop: "11 Nov 2017 16:15:12 GMT",
          contract: ""
        }
      ]
    }
  }
}
</script>
