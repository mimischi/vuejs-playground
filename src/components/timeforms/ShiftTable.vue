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
      td(class='text-cs-right') {{ props.item.start }}
      td(class='text-cs-right') {{ props.item.stop }}
      td(class='text-cs-right') {{ props.item.contract | filterValue }}
</template>

<script>
export default {
  name: 'ShiftTable',
  props: [
    'headers',
    'items',
    'selected'
  ],
  filters: {
    filterValue: function (value) {
      return value || '-'
    }
  }
}
</script>
