Vue.createApp({
    data(){
        return{
            nombre:'',
            precio:'',
            cantidad:'',
            fecha:'',
            sabor:'',
            tipo:'',
            productos: []
/*             carrito: [],
            producto: '' */
        }
    },
    methods: {
        agregar(){
            const producto = {
                nombre:this.nombre,
                precio:this.precio,
                cantidad:this.cantidad,
                fecha:this.fecha,
                sabor:this.sabor,
                tipo:this.tipo

            }
            this.productos.push(producto);
        }
    }
    /* methods: {
        agregarProducto() {
        this.carrito.push(this.producto);   
        this.producto=''; 
        },

    } */
}).mount('#app')