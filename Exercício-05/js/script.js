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


for(let arquivos in livros){

let biblioteca = document.getElementById('lista-do-catalogo');
let titulo = document.createElement('h3');
biblioteca.appendChild(titulo);
titulo.textContent = livros[arquivos]['titulo'];
let autor = document.createElement('p');
biblioteca.appendChild(autor);
autor.textContent = livros[arquivos]['quemEscreveu'];
let link = document.createElement('a');
biblioteca.appendChild(link);
link.setAttribute('href', livros[arquivos]['link']);
link.setAttribute('target', '_blank');
link.textContent = 'Vem me ler nenem! <3';
}






// let escritor = document.getElementById('li');
// biblioteca.appendChild(escritor);
// escritor.textContent = livros[1]['quemEscreveu']
// }

