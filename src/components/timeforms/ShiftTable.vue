<template lang='pug'>
  v-data-table(
    :headers='headers'
    :items='items'
    v-model='selected'
    item-key='id'
    select-all
    class='elevation-1'
    )
    template(slot='items' slot-scope='props')
      td
        v-checkbox(primary hide-details v-model='props.selected')
      td(class='text-cs-right') {{ props.item.start | formatDateTimeLocale }}
      td(class='text-cs-right') {{ props.item.stop | formatDateTimeLocale }}
      td(class='text-cs-right') {{ props.item.duration | formatTime }}
      td(class='text-cs-right') {{ props.item.contract | formatValue }}
</template>

<script>
import { formatDate } from '../mixins/formatDate'

export default {
  name: 'ShiftTable',
  props: [
    'headers',
    'items',
    'selected'
  ],
  filters: {
    formatValue (value) {
      return value || '-'
    }
  },
  mixins: [formatDate]
}
</script>
