/* 
DESAFIO 1: Construir uma FUNÇÃO pra calcular o IMC
IMC = peso / altura²
Deve retornar um único número
Deve gerar um ERRO se receber um parâmetro NÃO numérico
Deve retornar ERRO caso NÃO receba os dois parâmetros

DESAFIO 2: Construir uma FUNÇÃO pra classificar IMC
Deve receber um número (o IMC)
Deve retornar uma "string"
Deve gerar um ERRO se receber um parâmetro NÃO numérico
Deve retornar um ERRO caso NÃO receba nenhum parâmetro

CLASSIFICAÇÃO IMC:
muito abaixo peso: 16 a 16,9kg/m2
abaixo do peso: 17 a 18,4kg/m2
peso normal: 18,5 a 24,9kg/m2
acima do peso: 25 a 29,9kg/m2
obesidade grau I: 30 a 34,9kg/m2
obesidade grau II: 35 a 40kg/m2
obesidade grau III: maior que 40kg/m2
*/

function calcularIMC(peso, altura){ //IMC: peso / altura²
    if(peso === undefined || altura === undefined) //retornar um único número
        throw Error("need two parameters: weight and height") //ERRO se retornar parâmetro NÃO numérico
    return peso / (altura * altura) //(parênteses) pra executar a altura ANTES e o resultado dela ser dividido pelo peso
}

function classificaIMC(imc){ //recebe um número: o IMC
    //NÃO utilizar SWITCH, pois os números NÃO são exatos, há intervalos entre eles (ex.: 16 a 16,9)
    if(imc <= 16.9){
        return 'muito abaixo do peso'; //retorna uma 'string'
    } else if(imc <= 18.4){ //NÃO precisa colocar >= 17 && imc < 18.4, pois >= 17 && significa que o programa já vai entender q é prair cair na opção 16.9, pois é menor q 17
        return 'abaixo do peso';
    } else if(imc <= 24.9){
        return 'normal';
    } else if(imc <= 29.9){
        return 'acima do peso';
    } else if(imc <= 34.9){
        return 'obesidade grau I';
    } else if(imc <= 40){
        return 'obesidade grau II';
    } else {
        return 'obesidade grau III';
    }
}

let imc = calcularIMC(80, 1.65) //1º valor peso, 2º valor altura (altura em Metros, pois IMC é em metros²)
console.log(imc)
console.log(classificaIMC(imc))




