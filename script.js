let increasing = true

let dots = 0
let contador = 0

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

function menuFunc() {
    if (contador %2 == 0) {
        abrirMenu()
    } else {
        fecharMenu()
    }
    contador++
}

function abrirMenu() {
    document.querySelector(".menuDiv").style.display = "flex"
}

function fecharMenu() {
    document.querySelector(".menuDiv").style.display = "none"
}