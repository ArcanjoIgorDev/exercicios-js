// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)



// Função com retorno

function soma(a, b = 5) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(1))


