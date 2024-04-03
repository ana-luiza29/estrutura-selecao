/*
Questão 6: Como você pode usar uma declaração if, else if, else para 
determinar a estação do ano com base no mês em JavaScript? 
 
 */
resposta: var mes = 8; // Exemplo: agosto

if (mes >= 1 && mes <= 3) {
    console.log("Estamos no verão.");
} else if (mes >= 4 && mes <= 6) {
    console.log("Estamos no outono.");
} else if (mes >= 7 && mes <= 9) {
    console.log("Estamos no inverno.");
} else if (mes >= 10 && mes <= 12) {
    console.log("Estamos na primavera.");
} else {
    console.log("Mês inválido.");
}