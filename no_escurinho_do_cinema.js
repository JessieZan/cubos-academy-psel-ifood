function solucao(obj) {
    if(obj.temIngresso === true && obj.idade>= 18){
           if (obj.temCarteirinha === true){
               console.log('MEIA')
           } else {
               console.log('INTEIRA')
           }
       } else if (obj.temIngresso === true && obj.idade<18){
           if (obj.estaComPais === true || obj.idade>=obj.censura){
               console.log('MEIA')
           } else {
               console.log('ACESSO NEGADO')
           }
       } else {
           console.log('ACESSO NEGADO')
       } 
   }