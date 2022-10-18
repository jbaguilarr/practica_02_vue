<template>
    <div class="container">        
       <div class="row">
           <h3>{{producto.nombre}}</h3>
       </div>
       <div class="row">
           <div class="col-12 col-sm-6 col-md-4 ">
               <img :src="producto.imagen"
                   alt="" style="width: 100%">
           </div>
           <div class="col-12 col-sm-6  col-md-8">
               <h6>{{producto.descripcion}}</h6>
               <div class="p-3 mb-2 text-white" :style="getPrecioEstilos">
                   Precio: {{producto.precio}} BOB
               </div>
               <h5>Color</h5>
               <div>
                   <div v-for="(value,key,index) of producto.colores" :key="index" class="color-box clic" :style="`background: ${value}`"  @click="seleccionarColor(value,producto.id)"></div>
               </div>               
           </div>
       </div>
       </div>
</template>
<script>
   import { mapGetters } from 'vuex'
   export default {
       name: 'DetalleProductoView',
       components : {

       },
       mounted() {
           this.getProduct(this.$route.params.id);
       },
       data(){
            return {
               producto : {},
               wImagen : '350px'
            }
       },
       methods: {
            getProduct(id) {
               console.log(process.env);
               axios({
                   method: "get",
                   url: `${process.env.VUE_APP_RUTA_API }/productos/${id}` 
               })
                   .then(response => {
                       this.producto = response.data;
                       console.log(response);
                   })
                   .catch(e => console.log(e));
            },
       },
       computed: {
           ...mapGetters(['getPrecioEstilos']),
       },
   }
</script>