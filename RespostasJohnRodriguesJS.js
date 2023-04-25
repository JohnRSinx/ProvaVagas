1- 
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
//O valor da variável SOMA ao final do processamento será 91.

2- 
function verificaFibonacci(numero) {
  let anterior = 0;
  let atual = 1;

  while (atual < numero) {
    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual === numero;
}

console.log(verificaFibonacci(5)); // true
console.log(verificaFibonacci(7)); // false

3- a 9 b 128 c 49 d 100 e 13 f 20

4- 

/*
Tempo do caminhão = (100 km / 80 km/h) + (2 x 5 min) = 1,25 h
Tempo do carro = 100 km / 110 km/h = 0,91 h
Tempo total = 1,25 h + 0,91 h = 2,16 h
Distância percorrida pelo caminhão = 80 km/hx 1,25 h = 100 km
Distância percorrida pelo carro = 110 km/hx 0,91 h = 100 km
Portanto, os veículos se encontram exatamente no meio do trajeto, que é a 
distância de 50 km a partir de cada cidade. Como o carro está mais próximo de 
Ribeirão Preto, ele será o mais próximo da cidade.
O carro será mais próximo da cidade de Ribeirão Preto.
*/
5-
function reverseString(string) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += string[i];
  }
  return reversedStr;
}

// Exemplo de uso
const string = 'Exemplo';
console.log(reverseString(string)); // Output: "olpmexE"
