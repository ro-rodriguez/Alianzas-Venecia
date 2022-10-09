var data = {
  ver: true,
  selected: 'todos',
  cesta: [],
  joyas: [
    {
      "id": 1,
      "name": "Alianza Venezia",
      "imagen": "https://www.paogi.com/uploads/picture/image/3704/Venezia_Rojo_2mm-0.jpg",
      "desc": "Alianza Venezia Oro Rojo",
      "precio": 450,
      'all': 'todos'
    },
    {
      "id": 2,
      "name": "Alianza Mapa Mundi",
      "imagen": "https://www.paogi.com/uploads/picture/image/1964/ALIMAPADIGITROSHA04035XXXXX_1.jpg",
      "desc": "Alianza Mapa Mundi Oro Rojo",
      "precio": 250,
      'all': 'todos'
    } ,
    {
      "id": 3,
      "name": "Alianza Clasica",
      "imagen": "https://www.paogi.com/uploads/picture/image/1996/ALISKYNYCXXROJMX04035XXXXX_1.jpg",
      "desc": "Alianza Clasica Oro",
      "precio": 450,
      'all': 'todos'
    },
    {
      "id": 4,
      "name": "Anillo Acilia",
      "imagen": "https://www.paogi.com/uploads/picture/image/1919/ACILIA-FRENTE.jpeg",
      "desc": "Alianza Acilia Diamante Oro Blanco",
      "precio": 250,
      'all': 'todos'
    } ,
    {
      "id": 5,
      "name": "Anillo Atenea",
      "imagen": "https://www.paogi.com/uploads/picture/image/4148/Atenea-Cubic-Rojo.jpeg",
      "desc": "Alianza Atenea Diamante Oro rosa",
      "precio": 450,
      'all': 'todos'
    },
    {
      "id": 6,
      "name": "Anillo Olympia",
      "imagen": "https://www.paogi.com/uploads/picture/image/2309/OLYMPIA-FRENTE.jpg",
      "desc": "Alianza Olympia Diamante Oro rosa",
      "precio": 250,
      'all': 'todos'
    } 
  ]
}


var app = new Vue({
      el: '#app',
      data: data,
      filters: {
        moneda: function(valor){
          return Number.parseFloat(valor).toFixed() + '$Usd';
            }
        },
      computed: {
        cestaTotal: function(){
          let suma = 0;
          for (key in this.cesta){
            suma = suma+(this.cesta[key].joya.precio * this.cesta[key].cant);
          }
          return suma
        },
        cantTotal: function(){
          let cant = 0;
          for (key in this.cesta){
            cant = cant+ this.cesta[key].cant;
          }
          return cant
        }
       
      },
      methods: {
        agregarCesta: function(joya){
         var prodExistente;
         var exitente = this.cesta.filter(function(item, index){
           if (item.joya.id == Number(joya.id)){
             prodExistente = index;
             return true;
           }else{
             return false;
           }
         });
          
          if(exitente.length){
            this.cesta[prodExistente].cant++
          }else{
            this.cesta.push({joya: joya, cant:1})
          }
        },
        quitarCesta: function(joya){
          if(this.cesta[joya].cant>1){
            this.cesta[joya].cant--;
          }else{
            this.cesta.splice(joya, 1)
          }
        }
      },
})


const appGaleria = new Vue({
      el: '#galeriaApp',
      data: {
          fotos: [], // {nombre: '', url: '', categoria: '', seleccionado: true}
          nombre: '',
          categoria: '',
          url: '',
          filtro: '',
      },
      computed: {
          listaFiltrada: function(){
              let lista = this.fotos.filter(  foto =>  foto.nombre.includes(this.filtro ) );
              return lista;
          }
      },
      methods:{
          agregar: function(){
              this.fotos.push({
                  nombre: this.nombre,
                  url: this.url,
                  categoria: this.categoria, 
                  seleccionado: false
              });
  
              this.nombre = '';
              this.categoria = '';
              this.url = '';
          },
          seleccionar: function(index){
              this.fotos[index].seleccionado = !this.fotos[index].seleccionado;  
          },
          editar: function(index){
              this.nombre = this.fotos[index].nombre;
              this.url = this.fotos[index].url;
          }
      }
})