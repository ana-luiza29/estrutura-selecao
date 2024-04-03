/*

 
Questão 8: Como você pode usar uma declaração if, else if, else para 
determinar se uma idade corresponde a bebê, criança, adolescente, adulto ou 
idoso em JavaScript? 
 
 
 */
resposta: let idade = 30;

if (idade >= 0 && idade <= 2) {
    console.log("Bebê");
} else if (idade >= 3 && idade <= 12) {
    console.log("Criança");
} else if (idade >= 13 && idade <= 19) {
    console.log("Adolescente");
} else if (idade >= 20 && idade <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}