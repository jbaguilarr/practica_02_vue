<template>
 <AppMenu></AppMenu>
 <router-view />
</template>

<script>
import AppMenu from '@/components/AppMenu.vue';

export default {
  name: 'App',
  components: {
    AppMenu,
  },
  data() {
     return {
      }
  },
    methods: {
    },
}
</script>

<style>
</style>
