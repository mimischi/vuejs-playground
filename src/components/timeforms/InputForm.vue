<template lang="pug">
  v-layout(row)
    v-flex(xs4)
      v-subheader Start
    v-flex(xs8)
      v-text-field(name="Start", label="Start", id="start")
  //- v-layout(row)
  //-   v-flex(xs4)
  //-     v-subheader Stop
  //-   v-flex(xs8)
  //-     v-text-field(name="Stop", label="Stop", id="stop")
</template>

<script>
export default {
  name: 'InputForm'
}
</script>
