const app = Vue.createApp({
    dara() {
        return {
            amiibos: [],
            nintendo: ''
        }
    },
    methods: {
        async obtener() {
            const data = await fetch('https://amiiboapi.com/api/amiibo/', {
                method: 'GET'
            });
            const amiibos = await data.json();
            this.amiibos = amiibos.amiibo;
            console.log(this.amiibos);
        }
    },

})