const app = Vue.createApp({
    data() {
        return {
            edad: 0,
            frutas:'',

        }
    },
    computed: {
        calcularedad() {
            if (this.edad == '') {
                return 'error'
            } else if (this.edad > 18) {
                return 'Eres mayor de edad'
            } else {
                return 'Eres menor de edad'
            }
        },
        mostrarfrutas(){
            if (this.frutas == 'manzana') {
                return "https://th.bing.com/th/id/OIP.LHv1uCUvxMFd_9XqpeGtoAHaHd?w=177&h=180&c=7&r=0&o=5&pid=1.7"
            } else if (this.frutas == 'naranja') {
                return 'https://th.bing.com/th/id/OIP.BVYIaA5KtY5osrqAaPxv7QHaIT?pid=ImgDet&rs=1'
            } else if (this.frutas == 'limon') {
                return 'https://cicoindex.com/wp-content/uploads/2019/02/Lim%C3%B3n.jpg'
            } else if (this.frutas == 'papaya') {
                return 'https://th.bing.com/th/id/OIP.TnaLe7n_n9_e8Jo-2fjmrgHaE8?pid=ImgDet&rs=1'
            } else if (this.frutas == 'uva') { 
                return 'https://th.bing.com/th/id/OIP.eJY1DBezp2ptp_64KSZvBQHaDt?pid=ImgDet&rs=1'
            }
        }
    }
})