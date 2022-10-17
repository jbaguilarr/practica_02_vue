<template>
     <footer :style="`background-color: ${getFooterColor};`">&nbsp;</footer>     
</template>

<script>
   import { mapGetters } from 'vuex'
   export default {
      name: 'appFooter',
      computed: {
            ...mapGetters(['getFooterColor'])
        },
   }
</script>