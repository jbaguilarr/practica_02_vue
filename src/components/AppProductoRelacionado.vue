<template>
    <div class="container ">
  
        <div class="row">
            <h4>Productos relacionados</h4>
        </div>
        <div class="row">
            <div class="col" v-for="producto in productosRelacionados">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{producto.nombre}}</h5>
                        <img :src="producto.imagen" alt="" width="100%">
                        <p class="card-text">{{producto.descripcion}}</p>
                            <div class="producto-relacionado-precio">Precio:{{producto.precio}} BOB</div>
                        <div>
                <div>
                    <div class="color-box" v-for="color in producto.colores" :style="`background: ${color}`"></div>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'appProductoRelacionado',
  components: {     
  },
  mounted() {
          this.getProductRelacionados();
      },
  data() {
     return {
            productosRelacionados :  [ ],
    }
  },
    methods: {
      getProductRelacionados() {
              axios({
                  method: "get",
                  url: process.env.VUE_APP_RUTA_API+"/productosRelacionados"
              })
                  .then(response => {
                      this.productosRelacionados = response.data;
                      console.log(response);
                  })
                  .catch(e => console.log(e));
           },
    },
    computed: {
          // ...mapGetters(['getPrecioEstilos'])
      },
}
</script>