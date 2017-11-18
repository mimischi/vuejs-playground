<template lang="pug">
  div
    v-list
      v-list-tile(:to="{name: 'Home'}")
        v-list-tile-action
          v-icon home
        v-list-tile-content
          v-list-tile-title Home
      v-list-tile(:to="{name: 'Input'}")
        v-list-tile-action
          v-icon home
        v-list-tile-content
          v-list-tile-title Add
</template>

<script>
export default {
  name: 'NavList'
}
</script>
