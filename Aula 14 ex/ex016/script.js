function contar(){
    var inic = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    var inicv = Number(inic.value)
    var fimv = Number(fim.value)
    var passv = Number (pass.value)

    res.innerHTML = ''

    for(i = inicv ; i <= fimv ; i++){
        res.innerHTML += `${i}`
    }
}