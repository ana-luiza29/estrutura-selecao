/*
 
Questão 5: Como você pode usar uma declaração if, else if, else para verificar 
se um número é par, ímpar ou zero em JavaScript? 
 
 */
resposta:var numero = 10;

if (numero === 0) {
    console.log("O número é zero.");
} else if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}