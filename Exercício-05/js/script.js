const livros = {
    1: {
        "titulo": "Javascript Eloquente",
        "quemEscreveu": "Marijn Haverbeke",
        "link": "https://github.com/braziljs/eloquente-javascript"
    },
    2: {
        "titulo": "Você não sabe JS",
        "quemEscreveu": "Kyle Simpson",
        "link": "https://github.com/cezaraugusto/You-Dont-Know-JS"
    },
    3: {
        "titulo": "Calibã e a Bruxa: mulheres, corpo e acumulação primitiva",
        "quemEscreveu": "Silvia Federici",
        "link": "http://coletivosycorax.org/wp-content/uploads/2019/09/CALIBA_E_A_BRUXA_WEB-1.pdf"
    }
}

let biblioteca = document.getElementById('lista-do-catalogo');

for(let arquivos in livros){

let meuLivro = document.createElement('li')
biblioteca.appendChild(meuLivro)

    
let titulo = document.createElement('h3');
biblioteca.appendChild(titulo);
titulo.textContent = livros[arquivos]['titulo'];
titulo.classList.add('livro__titulo')

let autor = document.createElement('p');
biblioteca.appendChild(autor);
autor.textContent = livros[arquivos]['quemEscreveu'];
autor.classList.add('livro__autoria')

let link = document.createElement('a');
biblioteca.appendChild(link);
link.setAttribute('href', livros[arquivos]['link']);
link.setAttribute('target', '_blank');
link.textContent = 'Vem me ler nenem! <3';
link.classList.add('livro__link')

let botaoJaLi = document.createElement('button');
biblioteca.appendChild(botaoJaLi);
botaoJaLi.textContent = 'Marcar como lido';
botaoJaLi.classList.add('botao-lido');


// let botaoDesfazer = document.createElement('button');
// biblioteca.appendChild(botaoDesfazer);
// botaoDesfazer.textContent = 'Desfazer';
// botaoDesfazer.classList.add('botao-desfazer');

 
botaoJaLi.addEventListener('click', function(evento)
 /// criando um toggle
     { if( titulo.classList.contains('livro__titulo--lido')){
        titulo.classList.remove('livro__titulo--lido');
        botaoJaLi.classList.remove('botao-nao-li');
        botaoJaLi.classList.add('botao-lido');
        botaoJaLi.textContent = 'Marcar como lido';

     } else {
        titulo.classList.add('livro__titulo--lido');
        botaoJaLi.classList.add('botao-nao-li');        
        botaoJaLi.textContent = 'Marcar como não lido';

     }
     })
    
    }



    /// outra forma- criando um toggle
// botaoJaLi.addEventListener('click', function(evento){
// if ( titulo.classList.contains('livro__titulo--lido') ){
//     titulo.classList.remove('livro__titulo--lido');
// } else{
//     titulo.classList.add('livro__titulo--lido');
// };
// })


//outra forma sem o if- a primeira maneira que fiz- botões separados


// botaoDesfazer.addEventListener('click', function(evento)
//  { 
//      titulo.classList.add('livro__titulo--nao-lido')  
//      titulo.classList.remove('livro__titulo--lido')  


//      botaoJaLi.add(botaoJaLi);
//      botaoDesfazer.remove(botaoDesfazer)
//  })

// let botaoDesfazer = document.createElement('button');
// biblioteca.appendChild(botaoDesfazer);
// botaoDesfazer.textContent = 'Desfazer';
// botaoDesfazer.classList.add('botao-desfazer');

 
// botaoJaLi.addEventListener('click', function(evento)
//      { 
//      titulo.classList.add('livro__titulo--lido')  
//      titulo.classList.remove('livro__titulo--nao-lido')  

//      botaoJaLi.classList.add('botao-nao-li');
    
//      })






