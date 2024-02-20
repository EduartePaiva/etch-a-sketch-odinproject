const container = document.querySelector('#container')
const btnChange = document.querySelector("#btn-change")
const h1 = document.querySelector('h1')

function generateSquares(widthAndHeigh = 16) {
    h1.textContent = `Number of squares: ${widthAndHeigh}x${widthAndHeigh}`
    const numOfSquares = widthAndHeigh * widthAndHeigh
    const squareWidth = `${100 / widthAndHeigh}%`

    for (let i = 0; i < numOfSquares; i++) {
        const div = document.createElement('div')
        div.style.width = squareWidth
        div.style.opacity = "1"
        div.setAttribute('class', 'square')
        div.addEventListener('mouseenter', hover)
        container.appendChild(div)
    }
}
generateSquares()

function clearSquares() {
    container.textContent = ''
}

function randomRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}

function hover(e) {
    const opacity = e.target.style.opacity
    const floatOpacity = parseFloat(opacity)
    if (floatOpacity > 0) {
        e.target.style.backgroundColor = randomRgb()
        e.target.style.opacity = `${floatOpacity - 0.1}`
    }
}

btnChange.addEventListener('click', () => {
    const userInput = prompt("Insert a new number of squares for the grid! It can't be greater than 100")
    if (userInput == null) return
    const numUserInput = parseInt(userInput)
    if (isNaN(userInput) || userInput > 100 || userInput < 1) return
    clearSquares()
    generateSquares(numUserInput)

})
