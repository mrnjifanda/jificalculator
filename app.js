var resultat
var signe = []
var allOperators = ['+', '-', '*', '/']

const addScreen = (content, operator = false) => {
    let screen = document.getElementById("screen-content")

    if (screen.innerHTML === ".0") {
        let exeption = ['0', '+', '-', '*', '/']

        for (let i = 0; i < exeption.length; i++) {
            if (exeption[i] == content) return false;
        }

        screen.innerHTML = content
    } else {
        let lenght = screen.innerHTML.length
        let last = screen.innerHTML.slice((lenght - 1), lenght)

        if (operator) {
            for (let i = 0; i < allOperators.length; i++) {
                if (allOperators[i] == last) return false
            }

            signe.push(content)
        }

        screen.innerHTML += content

    }
}

const clean = (content) => {
    let screen = document.getElementById("screen-content")
    let lenght = screen.innerHTML.length

    if (screen.innerHTML === ".0") return false

    if (lenght === 1) {
        screen.innerHTML = ".0"
    } else {
        let last = screen.innerHTML.slice((lenght - 1), lenght)

        for (let i = 0; i < allOperators.length; i++) {
            if (allOperators[i] == last) signe.pop()
        }

        screen.innerHTML = screen.innerHTML.slice(0, -1);
    }
}

const reset = () => {
    document.getElementById("screen-content").innerHTML = ".0"
    document.getElementById("screen-resultat").innerHTML = ""
    signe = []
}

const calcul = () => {

    let screen = document.getElementById("screen-content")
    let screenResultat = document.getElementById("screen-resultat")

    let calcul = screen.innerHTML

    if (calcul === ".0") return false

    let numberCalcul = signe.length

    if (numberCalcul === 0) {
        screenResultat.innerHTML = calcul
        return false
    }


}

document.querySelector('.button').addEventListener('click', (e) => {

    e.preventDefault()

    let a = e.target

    if (!a.hasAttribute('data-type') || !a.getAttribute('data-content')) return false

    let type = a.getAttribute('data-type')
    let content = a.getAttribute('data-content')

    if (type === "number") addScreen(content)

    if (type === "opperator") addScreen(content, true)

    if (type === "clean") clean()

    if (type === "reset") reset()

    if (type === "equal") calcul()
})