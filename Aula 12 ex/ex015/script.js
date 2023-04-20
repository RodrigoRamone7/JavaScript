function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formAno.value.length == 0 || formAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gen = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/bebe-h.png')
            } else if(idade < 20){
                //jovem
                img.setAttribute('src', 'img/jovem-h.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'img/adulto-h.png')
            } else{
                //idoso
                img.setAttribute('src', 'img/idoso-h.png')
            }
        }else if (fsex[1].checked){
            gen = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/bebe-m.png')
            } else if(idade < 20){
                //jovem
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'img/adulto-m.png')
            } else{
                //idoso
                img.setAttribute('src', 'img/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }

}