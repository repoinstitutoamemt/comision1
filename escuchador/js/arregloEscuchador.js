'use strict';
let arregloBotones = document.querySelectorAll('.btn');
console.log(arregloBotones);

for(let i=0; i<arregloBotones.length;i++){
    arregloBotones[i].addEventListener('click',function(e){
        console.log(e.target.innerHTML);
        this.classList.toggle('btn');
    });
}