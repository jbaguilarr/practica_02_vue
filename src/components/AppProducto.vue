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
                <h5>Cantidad</h5>
                <div class="quantity">
                    <button @click="disminuir()">-</button> <div>{{this.$store.state.pedido.cantidad}}</div> <button @click="aumentar()">+</button>
                </div>
                <div class="buy-box">
                    <button type="button" class="btn btn-primary" :disabled="this.$store.state.bloquear">Comprar</button>
                </div>
                
            </div>
        </div>
        </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import store from '@/store';
    export default {
        name: 'AppProducto',
        components : {

        },
        mounted() {
            this.getFirstProduct();
        },
        data(){
             return {
                producto : {},
                wImagen : '350px'
             }
        },
        methods: {
             getFirstProduct() {
                console.log(process.env);
                axios({
                    method: "get",
                    url: process.env.VUE_APP_RUTA_API+"/productos/1"
                })
                    .then(response => {
                        this.producto = response.data;
                        console.log(response);
                    })
                    .catch(e => console.log(e));
             },
             aumentar : () =>{
               store.state.pedido.cantidad += 1;
               var valido = false;
                
                if(store.state.pedido.cantidad < 1 ) valido = true;
                if(store.state.pedido.id == null) valido = true;
                if(store.state.pedido.color == null) valido = true;
                
                store.state.bloquear = valido;
            },
            disminuir : ()=> {
                store.state.pedido.cantidad -= 1;
                var valido = false;
                
                if(store.state.pedido.cantidad < 1 ) valido = true;
                if(store.state.pedido.id == null) valido = true;
                if(store.state.pedido.color == null) valido = true;
                
                store.state.bloquear = valido;
            },
            seleccionarColor : (value,codigo)=> {
                store.state.pedido.color = value;
                store.state.pedido.id = codigo;
                var valido = false;
                
                if(store.state.pedido.cantidad < 1 ) valido = true;
                if(store.state.pedido.id == null) valido = true;
                if(store.state.pedido.color == null) valido = true;
                
                store.state.bloquear = valido;
            },
           
        },
        computed: {
            ...mapGetters(['getPrecioEstilos']),
        },
    }
</script>