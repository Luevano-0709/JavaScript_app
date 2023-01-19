{/* <h1>Contador:{{contador}}</h1>
        <button v-on:click="incrementar()">incrementar</button>
        <button v-on:click="limpiar()">limpiar</button>
        <button v-on:click="decrementar()">Descrementar</button> */}

ue.createApp({
    data() {
        return {
            contador: 0,
        }
    }, 
    methods: {
        incrementar(){
            this.contador++;
        },
        limpiar(){
            this.contador=0;
        },
        decrementar(){
            this.contador--;
            if (this.contador<0){
                this.contador=0;
            }
            
        },
}
}).mount(`#app`);