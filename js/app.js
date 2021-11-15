var app = new Vue({
    el: '#app',
    data: {
      nombre:0,
      message: 'Vue.js!',
      mensaje1: 'hola mundo',
      mensaje2:10,
      valorInput:"",
      imagen:"fotos",
      html:`<h1>leonardo</h1><p>Esquivel</p>`,
      valor2:"https://p325k7wa.twic.pics/high/dragon-ball/dragonball-project-z/00-page-setup/dbzk_banner_final.jpg?twic=v1/cover=1920/step=10/quality=80",
      valor3:"https://www.hola.com/imagenes/estar-bien/20190313138702/expliacion-cientifica-nos-encantan-videos-gatitos-cs/0-656-814/gatitos-t.jpg?filter=w600",
      valor1:"https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg?v=1630420628&width=1024",
      valorfinal:"https://cdn.shopify.com/s/files/1/0229/0839/files/bancos_de_imagenes_gratis.jpg?v=1630420628&width=1024",
      mensaje:"",
      clicks:0
      
    
    },
    methods: {
        imprimirenconsola(){
           let numero=5;
            return numero;
        },
        alert(){
            alert( this.valorInput)
                 },
                 mostrarIamgen(){
                     if(this.valorfinal==this.valor1){
                        this.valorfinal=this.valor2 
                     }else if(this.valorfinal==this.valor2){
                        this.valorfinal=this.valor3  
                     }else if(this.valorfinal==this.valor3){
                        this.valorfinal=this.valor1
                     }
                    
                     return this.valorfinal
                 },
                 mostrarmensaje2(mensaje){
                 alert("el parametro es"+ mensaje)
                 },
                 sumar(){

                    this.clicks=this.clicks+1;
 
                   this.nombre=this.nombre+1;
                    return this.nombre
                 },
                 restar(){
                    this.clicks=this.clicks+1;
                      if(this.nombre!=0)this.nombre=this.nombre-1;
                       
                     return this.nombre
                  },
                  reiniciar(){
                    
                     this.clicks=0
                   return this.nombre=0
                }
                
    },
    computed:{
        duplicar(){
             
            return this.valorInput * 2;
        },
        potenciar(){
             
            return this.nombre * this.nombre;
        }
    }
  })