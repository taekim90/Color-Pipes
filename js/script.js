
const generateLevelOne = () => {
    // if (document.querySelector('.btn-primary').addEventListener('click', ())) {
        
        const playingField = document.querySelector('.playing-field')
        // creates the pipes
        for (let i = 1; i < 26; i++) {
            pipeSpace = document.createElement('div')
            pipeSpace.classList.add('pipes')
            pipeSpace.setAttribute('id', 'pipe' + i) // to give each specific pipe an ID
            pipeSpace.setAttribute('draggable', true)
            playingField.appendChild(pipeSpace)

            pipeSpace.addEventListener('mousedown', selectColor)
            
        }
        // sets the pre-determined pipe colors
        document.querySelector('#pipe1').style.backgroundColor = 'red'
        document.querySelector('#pipe4').style.backgroundColor = 'red'
        document.querySelector('#pipe5').style.backgroundColor = 'blue'
        document.querySelector('#pipe22').style.backgroundColor = 'blue'
        document.querySelector('#pipe20').style.backgroundColor = 'green'
        document.querySelector('#pipe24').style.backgroundColor = 'green'
        document.querySelector('#pipe9').style.backgroundColor = 'orange'
        document.querySelector('#pipe21').style.backgroundColor = 'orange'
        document.querySelector('#pipe13').style.backgroundColor = 'yellow'
        document.querySelector('#pipe17').style.backgroundColor = 'yellow'

    // }
}

// Function that selects the color of click and hold
const selectColor = (event) => {
    color = event.target.style.backgroundColor
    console.log(color)
    const allPipes = document.querySelectorAll('.pipes')
    const arrayOfAllPipes = Array.from(allPipes) // takes the node list and turns it into an array

    for (let i = 0; i < arrayOfAllPipes.length; i++) {
        arrayOfAllPipes[i].addEventListener('dragenter', fillInColor)
    }
}

// Function that colors in the gray spaces
const fillInColor = (event) => {
    if (event.target.id === 'pipe1' || event.target.id === 'pipe4' || event.target.id === 'pipe5' || event.target.id === 'pipe22' || event.target.id === 'pipe20' || event.target.id === 'pipe24' || event.target.id === 'pipe9' || event.target.id === 'pipe21' || event.target.id === 'pipe13' || event.target.id === 'pipe17') {
        return
    } else {
        event.target.style.backgroundColor = color
    }
}

// Reset button that returns the gameboard to the original state
const reset = () => {
    for (let i = 0; i < 25; i++) {
        // styles every spot to slategray
        document.querySelectorAll('.pipes')[i].style.backgroundColor = 'slategray'
        // and then it changes the fixed positions back to their original color
        document.querySelector('#pipe1').style.backgroundColor = 'red'
        document.querySelector('#pipe4').style.backgroundColor = 'red'
        document.querySelector('#pipe5').style.backgroundColor = 'blue'
        document.querySelector('#pipe22').style.backgroundColor = 'blue'
        document.querySelector('#pipe20').style.backgroundColor = 'green'
        document.querySelector('#pipe24').style.backgroundColor = 'green'
        document.querySelector('#pipe9').style.backgroundColor = 'orange'
        document.querySelector('#pipe21').style.backgroundColor = 'orange'
        document.querySelector('#pipe13').style.backgroundColor = 'yellow'
        document.querySelector('#pipe17').style.backgroundColor = 'yellow'
    }
}

// The Win Condition
const winCondition = () => {
    for (let i = 0; i < 25; i++) {
        if (document.querySelectorAll('.pipes')[i].style.backgroundColor !== 'slategray') {
            console.log('YOU WIN')
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // defininig pipeSpace and color for use in all scope levels
    let pipeSpace = 'div'
    let color = 'slategray'

    document.querySelector('.reset').addEventListener('click', reset) // reset button
    generateLevelOne()
    winCondition()
})






// const generateLevelTWo = () => {
//     const playingField = document.querySelector('.playing-field')
//     for (let i = 1; i < 26; i++) {
//         let pipeSpace = document.createElement('div')
//         pipeSpace.classList.add('pipes')
//         pipeSpace.setAttribute('id', 'pipe' + i)
//         playingField.appendChild(pipeSpace)

//         pipeSpace.addEventListener('mousedown', selectColor)
//     }
//     document.querySelector('#pipe1').style.backgroundColor = 'red'
//     document.querySelector('#pipe17').style.backgroundColor = 'red'
//     document.querySelector('#pipe2').style.backgroundColor = 'blue'
//     document.querySelector('#pipe9').style.backgroundColor = 'blue'
//     document.querySelector('#pipe3').style.backgroundColor = 'green'
//     document.querySelector('#pipe18').style.backgroundColor = 'green'
//     document.querySelector('#pipe16').style.backgroundColor = 'orange'
//     document.querySelector('#pipe23').style.backgroundColor = 'orange'
//     document.querySelector('#pipe19').style.backgroundColor = 'yellow'
//     document.querySelector('#pipe24').style.backgroundColor = 'yellow'
// }