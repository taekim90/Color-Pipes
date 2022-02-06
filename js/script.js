let redCounter = 0
let orangeCounter = 0
let yellowCounter = 0
let greenCounter = 0
let blueCounter = 0

const generateLevelOne = () => {
    // if (document.querySelector('.btn-primary').addEventListener('click', ())) {

    const playingField = document.querySelector('.playing-field')
    // this for loop creates each of the 25 pipes
    for (let i = 1; i < 26; i++) {
        pipeSpace = document.createElement('div')
        pipeSpace.classList.add('pipes')
        pipeSpace.setAttribute('id', 'pipe' + i) // to give each pipe its own speicfic ID
        pipeSpace.setAttribute('draggable', true)
        pipeSpace.style.backgroundColor = 'slategray'
        playingField.appendChild(pipeSpace)

        pipeSpace.addEventListener('mousedown', selectColor)
        // when the click is held down, run the selectColor function
    }
    // sets the pre-determined pipe colors
    predeterminedPipes1()
}

const predeterminedPipes1 = () => {
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

// Function that selects the color of click and hold
const selectColor = (event) => {
    // the color of the click event is stored here
    color = event.target.style.backgroundColor

    // we need to add a color pick counter and limit the count to just 1
    // or else we can just click and color multiple pipes of the same color and make winning easy
    if (color === 'red') {
        redCounter++
    } else if (color === 'orange') {
        orangeCounter++
    } else if (color === 'yellow') {
        yellowCounter++
    } else if (color === 'green') {
        greenCounter++
    } else if (color === 'blue') {
        blueCounter++
    }

    if (redCounter >= 2 || orangeCounter >= 2 || yellowCounter >= 2 || greenCounter >= 2 || blueCounter >= 2) {
        // for loop to go through all squares with that color and change them back to slategray
        const allPipes = document.querySelectorAll('.pipes')
        const arrayOfAllPipes = Array.from(allPipes)
        for (let i = 0; i < arrayOfAllPipes.length; i++) {
            if (arrayOfAllPipes[i].style.backgroundColor === color) {
                arrayOfAllPipes[i].style.backgroundColor = 'slategray'
                predeterminedPipes1()
            }

        }

        if (color === 'red') {
            redCounter = 0
        } else if (color === 'orange') {
            orangeCounter = 0
        } else if (color === 'yellow') {
            yellowCounter = 0
        } else if (color === 'green') {
            greenCounter = 0
        } else if (color === 'blue') {
            blueCounter = 0
        }
    }

    // make code for when you touch another color, it stops using the held color

    const allPipes = document.querySelectorAll('.pipes') // nodes list of all pipes
    const arrayOfAllPipes = Array.from(allPipes) // takes the node list and turns it into an array
    for (let i = 0; i < arrayOfAllPipes.length; i++) {
        arrayOfAllPipes[i].addEventListener('dragenter', fillInColor)
    }
}


const fillInColor = (event) => {
    // this if prevents the origial predetermined pipes from being colored over
    if (event.target.id === 'pipe1' || event.target.id === 'pipe4' || event.target.id === 'pipe5' || event.target.id === 'pipe22' || event.target.id === 'pipe20' || event.target.id === 'pipe24' || event.target.id === 'pipe9' || event.target.id === 'pipe21' || event.target.id === 'pipe13' || event.target.id === 'pipe17') {
        return
        // if a pipe is gray, we are allowed to paint in the selected color
    } else if (event.target.style.backgroundColor === 'slategray') {
        event.target.style.backgroundColor = color
        // this if condition checks to see if we are overwriting a pipe that already has a color
    } else if (event.target.style.backgroundColor !== 'slategray') {
        // check what color that target pipe has and store it in a variable
        const overwrittenColor = event.target.style.backgroundColor
        // for loop to go through all pipes with that same color and change them back to slategray
        const allPipes = document.querySelectorAll('.pipes')
        const arrayOfAllPipes = Array.from(allPipes)
        for (let i = 0; i < arrayOfAllPipes.length; i++) {
            if (arrayOfAllPipes[i].style.backgroundColor === overwrittenColor) {
                arrayOfAllPipes[i].style.backgroundColor = 'slategray'
                predeterminedPipes1()
            }
        }
    }
}


// Reset button that returns the gameboard to the original state
const resetBoard = () => {
    for (let i = 0; i < 25; i++) {
        // styles every spot to slategray
        document.querySelectorAll('.pipes')[i].style.backgroundColor = 'slategray'
        // and then it changes the fixed pipe positions back to their original color
        predeterminedPipes1()
    }
    resetCounter()
}


const resetCounter = () => {
    redCounter = 0
    orangeCounter = 0
    yellowCounter = 0
    greenCounter = 0
    blueCounter = 0
}


const winCondition = () => {
    // if all spaces are colored, check to see if the color counter = 1 for each color.
    // if these conditions are met, then you win!
    for (let i = 0; i < 25; i++) {
        if (document.querySelectorAll('.pipes')[i].style.backgroundColor !== 'slategray') {
            console.log('no more gray')
            // need to fix!! only checking if one box is not gray. need to make sure all boxes
            if (redCounter === 1 || orangeCounter === 1 || yellowCounter === 1 || greenCounter === 1 || blueCounter === 1) {
                console.log('YOU WIN!!!')
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // defining pipeSpace and color for use in all scope levels
    const pipeSpace = 'div'
    const color = 'slategray'

    // definint colorCounter
    // let redCounter = 0
    // let orangeCounter = 0
    // let yellowCounter = 0
    // let greenCounter = 0
    // let blueCounter = 0

    document.querySelector('.reset').addEventListener('click', resetBoard) // reset button
    generateLevelOne()
    winCondition()
})



// need to work on resetting counter back down to 0 and win condition