<template lang="pug">
  v-app(light)
    v-navigation-drawer(fixed v-model="drawer" app)
      nav-list
    v-toolbar(color="blue" dark fixed app)
      v-toolbar-side-icon(@click.stop="drawer = !drawer")
      v-toolbar-title(v-text="title")
    v-content
      v-container(fluid fill-height)
        v-fade-transition(mode="out-in")
          router-view
    v-footer(color="blue" app)
      span(class="white--text") {{footer}}
</template>

<script>
import NavList from './components/shell/NavList'

export default {
  name: 'app',
  components: {
    NavList
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
