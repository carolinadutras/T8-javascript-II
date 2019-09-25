const formulario = document.getElementById('formulario-de-comentarios');
const todosOsComentarios = document.getElementById('todos-os-comentarios');
const erro = document.getElementById('erro');


formulario.addEventListener('submit', function(evento){
        evento.preventDefault(); 
        let caixaDoComentario = document.querySelector('.input-de-texto'); // ou  document.getElementById('comentario-usuario')
        let mensagem = caixaDoComentario.value;

        if  (mensagem.trim() ===''){
                erro.textContent = 'Escreva algo, senhora!';
                erro.classList.add('erro');

            // ouuuuu- metodo que dá bug   let mensagemErrada = document.createElement('p');
            
           // erro.appendChild(mensagemErrada);
           // mensagemErrada.textContent='Digite um texto válido!';
           // mensagemErrada.classList.add('erro');
           
        }
         else {
        let mensagemAnterior = document.createElement('p');
        erro.textContent='';
        todosOsComentarios.appendChild(mensagemAnterior);

        mensagemAnterior.textContent= mensagem;
        mensagemAnterior.classList.add('comentario')
        formulario.reset(); // interessante usar em formularios maiores com mais campos...
        erro.classList.remove('erro');
        //ou caixaDoComentario.value=""
        }
});



