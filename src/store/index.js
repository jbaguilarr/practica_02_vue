import { createStore } from 'vuex'


export default createStore({
    state: {
        marca : 'MegaDron',
        menuColor: "lightblue",
        footerColor: "slategrey",
        precioEstilos: "background: orangered; color: white; font-weight: bold",
        menus : [
                {
                    etiqueta: "Inicio",
                    url: "#"
                },
                {
                    etiqueta: "Tienda",
                    url: "#"
                }
        ],
        pedido :
        {
            id:null,
            cantidad: 1,
            color:null
        },
        bloquear : true
    },
    getters: {
        getMarca(state) {
             return state.marca;
        },
        getMenuColor(state){
            return state.menuColor;
        },
        getMenu(state){
            return state.menus;
        },
        getFooterColor(state){
            return state.footerColor;
        },
        getPrecioEstilos(state){
            return state.precioEstilos;
        }
    },
    mutations: {
      
    },
    actions: {
     
    },
    modules: {
    }
  })
  