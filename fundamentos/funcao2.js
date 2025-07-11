// Armazenando uma função em uma variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 5))

// Retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(8, 4))