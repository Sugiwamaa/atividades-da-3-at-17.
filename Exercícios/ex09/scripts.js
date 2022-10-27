let contador = 0 
let res = document.querySelector('section#result')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

function contar() {
    contador ++ // É a mesma coisa que contador = contador + 1
    res.innerHTML = `<h2>O contador está com <mark>${contador}</mark> cliques.</h2>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}