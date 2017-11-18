<template lang="pug">
  v-app(light)
    v-navigation-drawer(fixed v-model="drawer" app)
      v-list(dense)
        v-list-tile(@click="")
          v-list-tile-action
            v-icon home
          v-list-tile-content
            v-list-tile-title Home
    v-toolbar(color="blue" dark fixed app)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title(v-text="title")
    v-content
      v-container(fluid fill-height)
        v-layout(column align-center)
          quick-actions
    v-footer(color="blue" app)
      span(class="white--text") {{footer}}
</template>

<script>
import QuickActions from './components/QuickActions'

export default {
  name: 'app',
  components: {
    QuickActions
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      title: 'VueJS playground',
      footer: 'That\'s it folks!'
    }
  }
}
</script>

<style>

</style>
