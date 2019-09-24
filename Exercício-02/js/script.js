const muitosGatos = document.querySelectorAll('.item__imagem');

  
        for (let i = 0; i < muitosGatos.length; i++)
        {
          muitosGatos[i].addEventListener ('click', function(){
            if (muitosGatos[i].classList.contains('invisivel') === true ){
              muitosGatos[i].classList.remove('invisivel');
            } else { 
              muitosGatos[i].classList.add('invisivel');
                    }
        })
          }
        

          //muitosGatos.forEach(function (gato){
//  gato.addEventListener('click', function(evento){
//    evento.target.classList.add('invisivel');

//  })
//})





//muitosGatos.includes('invisivel') 


//muitosGatos.forEach(function (gato){
//  gato.addEventListener('click', function(evento){
//    evento.target.classList.add('invisivel');

//  })
//})

  
//for (let i = 0; i < muitosGatos.length; i++){
//  muitosGatos[i].addEventListener('click', function() {
//    muitosGatos[i].classList.add('invisivel') })
//}





