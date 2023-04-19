function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'img/amanhecer.png'
        document.body.style.background = '#fbc7a1'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'img/tarde.png'
        document.body.style.background = '#eca474'
    } else {
        //BOA NOITE
        img.src = 'img/noite.png'
        document.body.style.background = '#397eb5'
    }
}