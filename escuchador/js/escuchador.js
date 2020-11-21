'use strict';
let boton = document.getElementById('identificador');
boton.addEventListener('click', function(e){
    if(this.classList.contains('azul')) {
        this.classList.remove('azul');
        this.classList.add('rojo');
    }else {
        this.classList.remove('rojo');
        this.classList.add('azul');  
    }
/*     this.classList.toggle('azul');  agrega o quita la clase*/
});