const app = Vue.createApp({
    data() {
        return {
            colortable: 'danger',
            nombrecurso: '',
            descripcion: '',
            precio: '',
            cantidadcomprados: '',
            url: '',
            curso: '',
            productos: []
        }
    },
    methods: {
        agregar() {
            const curso = {
                nombrecurso: this.nombrecurso,
                descripcion: this.descripcion,
                precio: this.precio,
                cantidadcomprados: this.cantidadcomprados,
                url:this.url
            }
            this.productos.push(curso);
        }
    }
}).mount('#app')

