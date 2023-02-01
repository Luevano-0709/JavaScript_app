Vue.createApp({
    data() {
        return {
            edad: 0,
            url:'',

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
        url(){
            if (select = 1) {
                return 'https://th.bing.com/th/id/OIP.nPSqskecel99r1jVjp2wYQHaEo?pid=ImgDet&rs=1'
            } else if (select = 2) {
                return 'https://th.bing.com/th/id/OIP.LK2aMEs0idWWvult_VskBwHaFj?pid=ImgDet&w=684&h=513&rs=1'
            } else if (select = 3) {
                return 'https://3.bp.blogspot.com/-iXTIn78lFzU/UofcWIf0JBI/AAAAAAAACJ0/poc_WiZT8OY/w1200-h630-p-k-no-nu/imagenes+en+HD+(32).jpg'
            } else if (select = 4) {
                return 'https://1.bp.blogspot.com/-F3CtPzX-hmc/T108l69sg0I/AAAAAAAAWOo/QuZFbyl0QXM/s1600/Imagenes-de-Carros-Deportivos_09.jpg'
            } else if (select = 5) { 
                return 'https://k44.kn3.net/taringa/1/3/5/6/7/2/78/technical02/2F5.jpg?939'
            }
        }
    }
}).mount(`#app`);