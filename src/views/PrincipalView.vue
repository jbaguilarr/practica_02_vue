<template>
    <div>
  
      <AppProducto></AppProducto>
  
      <AppProductoRelacionado></AppProductoRelacionado>
  
  
      <AppFooter></AppFooter>
    </div>
          
  </template>
  
  <script>
  
  import AppFooter from '@/components/AppFooter.vue';
  import AppProducto from '@/components/AppProducto.vue';
  import AppProductoRelacionado from '@/components/AppProductoRelacionado.vue';
 

  export default {
    name: 'PrincipalView',
    components: {      
      AppFooter,
      AppProducto,
      AppProductoRelacionado
    },
    mounted() {
            
        },
    data() {
       return {
            
      }
    },
      methods: {
      },
      computed: {
            // ...mapGetters(['getPrecioEstilos'])
        },
  }
  </script>
  
  <style>
  </style>
  