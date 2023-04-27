function contar(){
    var inic = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    var inicv = Number(inic.value)
    var fimv = Number(fim.value)
    var passv = Number (pass.value)

    res.innerHTML = '<p>Contando:</p>'

    for(i = inicv ; i <= fimv ; i+=passv){
        if(passv == 0){
            window.alert ("[ERRO] Número de passos deve ser maior que 0. Considerando 1 passo")
            passv += 1
        }
        res.innerHTML += `${i} &#x1F449; `
    }

    res.innerHTML += '&#x1F3C1;'

    if(inicv > fimv || fimv == 0){
        res.innerHTML = 'IMPOSSIVEL CONTAR!'
    }
}