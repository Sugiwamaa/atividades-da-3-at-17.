function maior() {
    let n1 = Number(window.prompt('Digite um número: '))
    let n2 = Number(window.prompt('Digite outro número: '))
    
    let res = document.querySelector('section#saida')
    if (n1 > n2) {
        res.innerHTML = `<h3>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong></h3>`
    } else if (n1 < n2) {
        res.innerHTML = `<h3>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong></h3>`
    } else {
        res.innerHTML = `<h3>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <strong>IGUAIS</strong></h3>`
    }
}