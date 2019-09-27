const mae = document.getElementById('sou-a-mae');

const eu = {
    nome: 'Carolina',
    idade: 25,
    profissao: 'Desenvolvedora Front-End',
    personalidade: 'Maravilhosa',
    signo: 'Arianja',
    site: 'https://www.linkedin.com/in/carolina-dutra-salles-b5867a83/?originalSubdomain=br',
    'conta-bancaria': 'Milionaria',
    'foto-fofa': 'https://media.giphy.com/media/tMiHhTLvQcavm/giphy.gif'
}


// nome no titulo

 let titulo = document.createElement('h1')
 mae.appendChild(titulo);
 titulo.textContent = eu.nome;
 titulo.classList.add("class")

// idade

 let tempoVida = document.createElement('p')
 mae.appendChild(tempoVida);
 tempoVida.textContent = eu.idade;


// sobre

 let ulLista = document.createElement('ul')
 mae.appendChild(ulLista);
 let lista = document.createElement('li')
 ulLista.appendChild(lista);
 let coisas= [eu.profissao, 
      eu.personalidade, 
      eu.signo,  
      eu['conta-bancaria']];
 lista.textContent = coisas;


// site 

 let meuLink = document.createElement ('a')
 mae.appendChild(meuLink);
 meuLink.textContent = 'Acessar meu Site'
 meuLink.setAttribute('href', eu.site);
 meuLink.setAttribute ('target', '_blank')



// foto gatinho

 const gato = document.createElement ('img');
 mae.appendChild(gato);
 gato.setAttribute('src', eu['foto-fofa']);
 gato.classList.add('img')



//ouuuu

//for (let propriedade in eu) {   
//    let titulo= document.createElement('p');
//    mae.appendChild(titulo);
//    titulo.textContent=eu[propriedade]

//}


///para postar o link
// for (let propriedade in eu) {   
//    if (eu[propriedade]=== 'site'){
//        document.createElement('a')
//    }
// }
