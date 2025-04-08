function tabuada() {
    let num = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('[ERRO]! Este não é um número válido!')
    }

    let number = Number(num.value)

    tab.innerHTML = ''

    for (let contador = 1; contador <= 10; contador++) {
        let item = document.createElement('option')
        item.text += `${number} x ${contador} = ${contador * number}`
        tab.appendChild(item) // função que adiciona um elemento filho ao DOM
    }
}