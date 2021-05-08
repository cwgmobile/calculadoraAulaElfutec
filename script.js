var valor;
var resultado;


function botao(num){
     valor = document.calc.visor.value += num; /* recebe o numero a ser calculado*/
}
function reseta() {
    document.calc.visor.value = '';  /*limpa os numeros calculados reseta*/ 
}
function calcula() {
   resultado = eval(valor);
   document.calc.visor.value = resultado; /* exibe o valor total nao esqucer*/
} 
/*
function play(som) {
    
}  */
