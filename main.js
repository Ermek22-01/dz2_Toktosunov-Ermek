const block = document.querySelector('.inner__block')
const timer = document.querySelector('.timer')

function moveBlock (x, y) {
    setInterval(() => {
        if(x < 1120 && y <= 0) {
            x++
        } else if(x >= 1115 && y <= 65) {
            y++
        } else if(x > 0 && y >= 65) {
            x--
        } else if(x <= 0 && y > 0) {
            y--
        }
        block.style.left = `${x}px`
        block.style.top = `${y}px`
    }, 1)
}
moveBlock(0, 0)

let timerInterval = setInterval(() => {
    if(timer.innerHTML < 60) {
        timer.innerHTML++
    } else {
        clearInterval(timerInterval)
    }
}, 1000)