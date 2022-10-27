function media() {
    let nom = window.prompt('Qual é o nome do aluno?') 
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nom}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${nom}?`))
    med = (n1 + n2)/2 
    
    let msg 
    if (med >= 6) { 
        msg = 'Meus parabéns!'
    } else { 
        msg = 'Estude um pouco mais!'
    }
    

    let res = document.getElementById('situacao')
    res.innerHTML = `<h3>Calculando a média final de <mark>${nom}</mark>.</h3>`
    res.innerHTML += `<h3>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</h3>` 
    res.innerHTML += `<h3>A média final será <mark>${med}</mark>.</h3>`
    res.innerHTML += `<h3>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></h3>` 
}