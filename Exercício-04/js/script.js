let pinguim = {'nome':'Pingu', 'idade':3, 'origem': 'Antartida'};
pinguim.andar= function (){console.log ('andou')};

pinguim.podeVoar = false;

pinguim.voar = function(){
     if (this.podeVoar== true){
         console.log('Voou!!.... mas caiu');
     }
     else {
         console.log('Não voa Ainda!');
        }
    };
