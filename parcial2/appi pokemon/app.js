Vue.createApp({
    data(){
        return{
            pokemon: null

        }
    },
    methods: {
        async getPokemon(){
            //Get    : Para obtener informacion
            //Post   : crear recursos
            //Put    : modificar recursos
            //Delete : eliminar recursos
            const random = Math.floor(Math.random() * 630);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+random, {
                method: 'GET'
            });
            const data = await response.json();
            this.pokemon = data;
        }
    }
}).mount('#app')