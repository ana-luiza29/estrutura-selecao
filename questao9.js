/*
Questão 9: Como você pode usar uma declaração if, else if, else para 
classificar um triângulo em equilátero, isósceles ou escaleno com base em 
seus lados em JavaScript? 
 */
resposta: function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("Triângulo equilátero");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("Triângulo isósceles");
    } else {
        console.log("Triângulo escaleno");
    }
}

// Exemplo de uso:
classificarTriangulo(5, 5, 5); // Triângulo equilátero
classificarTriangulo(3, 4, 4); // Triângulo isósceles
classificarTriangulo(6, 8, 10); // Triângulo escaleno