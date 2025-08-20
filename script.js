let increasing = true

let dots = 0

setInterval(() => {

    if (increasing) {

        dots++

        if (dots === 2) {
            increasing = false
        }

    }

    else {
        dots--
        if (dots === 0) {
            increasing = true
        }
    }

    let pontos = ''

    for (let i = 0; i <= dots; i++) {
        pontos += "."
    }

    document.getElementById('learning').textContent = "Aprendendo" + pontos
    document.getElementById('embreve').textContent = "Em breve" + pontos

}, 1000);