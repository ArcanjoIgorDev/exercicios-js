const escola = "Cod3r"

console.log(escola.charAt(3)) // função "charAt" serve para pegar um caracter da string pelo indice 
console.log(escola.charCodeAt(4)) // função "charCodeAt" serve para ver qual o indice da string na tabela unicode
console.log(escola.indexOf("o")) // função "indexOf" serve para descobrir o indice da string pelo caracter

console.log(escola.substring(1, 4)) // exibe a string começando pelo indice que for definido entre parenteses e terminando também 

console.log("o igor é um ".concat(escola).concat('!')) //função "concat" serve para concatenar strings

console.log(escola.replace('r', 'y')) // função "replace" serve para trocar um caracter da string


console.log('Ana, Maria, Pedro'.split(','))


          //literal é um valor definido diretamente, sem usar uma variavel