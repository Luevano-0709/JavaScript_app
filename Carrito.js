Vue.createApp({
    data(){
        return{
            colorTable:'danger',
            nombre:'',
            precio:'',
            cantidad:'',
            fecha:'',
            sabor:'',
            tipo:'',
            url:'',
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
                tipo:this.tipo,
                url:this.url
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