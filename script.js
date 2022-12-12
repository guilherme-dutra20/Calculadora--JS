function insert(numero){
// numero é o numero/simbolo que está sendo inserido

 // tela é igual ao id resultado onde vai ser mostrado os calculos
 // tela tambem corresponde ao primeiro numero
let tela = document.getElementById('resultado').innerHTML;

// mostrando o numero digitado (numero) na tela de resultado (tela)
document.getElementById('resultado').innerHTML = tela + numero;
 
}


function clean(){
 // limpando a tela de resultado
    let tela = document.getElementById('resultado').innerHTML = "";
}

function back(){
    //apagando o ultimo digito
    let resultado = document.getElementById('resultado').innerHTML;

     // listando todos os itens do resultado e apagando o ultimo digito, atualizando o começo (0), ao length-1
    document.getElementById('resultado').innerHTML= resultado.substring(0, resultado.length -1);
}

function calcular(){

     let resultado = document.getElementById('resultado').innerHTML;

     /*if( tela == '√' || numero == '√'){
        document.getElementById('resultado').innerHTML= Math.sqrt(numero);

     }*/
   
     //verificando se o numero digitado é válido
     if(resultado){
    
         if (resultado ==''){
            document.getElementById('resultado').innerHTML='';
         } else if (resultado != ''){

        // eval faz o cálculo de forma geral
        document.getElementById('resultado').innerHTML= eval(resultado);
    } else {

        document.getElementById('resultado').innerHTML = 'error';
    
     }
} }
