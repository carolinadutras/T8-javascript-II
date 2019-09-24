const alunas= ['Carolina Salles','Talita Barbosa', 'Daiana Moraes',  'Lia Lobo', 'Angelica Zumbieta', 'Emanuelle', 'Cecilia'];
let lista= document.getElementById('lista-alunas')
for (i=0; i<alunas.length; i++){
    let nomeAlunas= document.createElement('li')
    lista.appendChild(nomeAlunas)
    nomeAlunas.textContent= alunas [i]
}

//let soma = 0;
const meuTitulo = document.querySelector('.titulo');

//meuTitulo.addEventListener('click', function logar(){
//    console.log (soma++)
//});

meuTitulo.addEventListener('click', function (){
    meuTitulo.classList.add('vermelho');
})
   // meuTitulo.style.color = 'red'})
    

//alunas.addEventListener('click', function logar() 


//for (i=0; i<alunas.length; i++){
//let lista= document.createElement ('li');
//lista.appendChild=

//}

//let alunas.forEach(function (aluna){
 //   let item= document.createElement('li');
//    item.textContent= aluna;
    //list.appendChild(item);
//})

//const alunas= ['Carolina Salles','Talita Barbosa', 'Daiana Moraes',  'Lia Lobo', 'Angelica Zumbieta', 'Emanuelle', 'Cecilia'];
//let lista= document.getElementById('lista-alunas')
//let nomeAlunas= document.createElement('li')
//for (i=0; i<alunas.length; i++){
  //  lista.appendChild(nomeAlunas)
   // nomeAlunas.textContent= alunas [i]
//}