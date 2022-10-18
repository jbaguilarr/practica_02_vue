<template>
    <div class="container ">
  
        <div class="row">
            <h4>Productos relacionados</h4>
        </div>
        <div class="row">
            <div class="col" v-for="producto in productosRelacionados" @click="url(producto.id)" style="cursor:pointer">
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">{{producto.nombre}}</h5>
                        <img :src="producto.imagen" alt="" style="width: 100%">
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
import { router } from '@/router';
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
           url : (id) => {
               window.location.href = `/producto/detalle/${id}`;
           }
    },
    computed: {
          // ...mapGetters(['getPrecioEstilos'])
      },
}
</script>