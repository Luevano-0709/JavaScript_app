Vue.createApp({
    data() {
        return {
            nombre:'',
            carrera:'',
            verificaredad:'',
            resultado:''
        }
    },
    methods: {
        calcularedad(){
            if (this.verificaredad>=18){
                this.resultado='Eres mayor de edad'
            }else{
                this.resultado='Eres menor de edad'
            }
        }
    }
}).mount('#app')