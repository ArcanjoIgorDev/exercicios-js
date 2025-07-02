const valores = [7.7, 6.6, 8.9, 10.1, 9.2]



valores.push(3.3) // "push" coloca algo novo no array

valores.pop() // "pop" tira o último elemento do array

valores[0] = 3.1 // troca um valor por outro no array

console.log(valores)

delete valores[3]

console.log(valores)

console.log(valores.length) // função "length" mostra quantos elementos tem no array