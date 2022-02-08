const generateLevelOne = () => {
    document.querySelector(".winning-message").innerText = "";
    level1 = true;
    level2 = false;
    level3 = false;
    level4 = false;
    clickCounter = 0;
    resetCounter();
    // if level 1 is clicked again, need to reset/clear the divs or else new squares keep being created
    const playingField = document.querySelector(".playing-field");
    playingField.innerText = "";
    // this for loop creates each of the 25 pipes
    for (let i = 1; i < 26; i++) {
        pipeSpace = document.createElement("div");
        pipeSpace.classList.add("pipes");
        pipeSpace.setAttribute("id", "pipe" + i); // to give each pipe its own speicfic ID
        pipeSpace.setAttribute("draggable", true);
        pipeSpace.style.backgroundColor = "slategray";
        playingField.appendChild(pipeSpace); // adding the newly created divs into the parent div
        pipeSpace.addEventListener("mousedown", selectColor);
    }
    // sets the pre-determined pipe layout
    predeterminedPipes1();
};

const predeterminedPipes1 = () => {
    document.querySelector("#pipe1").style.backgroundColor = "red";
    document.querySelector("#pipe4").style.backgroundColor = "red";
    document.querySelector("#pipe5").style.backgroundColor = "orange";
    document.querySelector("#pipe22").style.backgroundColor = "orange";
    document.querySelector("#pipe20").style.backgroundColor = "yellow";
    document.querySelector("#pipe24").style.backgroundColor = "yellow";
    document.querySelector("#pipe9").style.backgroundColor = "green";
    document.querySelector("#pipe21").style.backgroundColor = "green";
    document.querySelector("#pipe13").style.backgroundColor = "blue";
    document.querySelector("#pipe17").style.backgroundColor = "blue";
};

const generateLevelTwo = () => {
    document.querySelector(".winning-message").innerText = "";
    level1 = false;
    level2 = true;
    level3 = false;
    level4 = false;
    clickCounter = 0;
    resetCounter();
    const playingField = document.querySelector(".playing-field");
    playingField.innerText = "";
    for (let i = 1; i < 26; i++) {
        pipeSpace = document.createElement("div");
        pipeSpace.classList.add("pipes");
        pipeSpace.setAttribute("id", "pipe" + i);
        pipeSpace.setAttribute("draggable", true);
        pipeSpace.style.backgroundColor = "slategray";
        playingField.appendChild(pipeSpace);

        pipeSpace.addEventListener("mousedown", selectColor);
    }
    predeterminedPipes2();
};

const predeterminedPipes2 = () => {
    document.querySelector("#pipe1").style.backgroundColor = "red";
    document.querySelector("#pipe17").style.backgroundColor = "red";
    document.querySelector("#pipe2").style.backgroundColor = "orange";
    document.querySelector("#pipe9").style.backgroundColor = "orange";
    document.querySelector("#pipe3").style.backgroundColor = "yellow";
    document.querySelector("#pipe18").style.backgroundColor = "yellow";
    document.querySelector("#pipe16").style.backgroundColor = "green";
    document.querySelector("#pipe23").style.backgroundColor = "green";
    document.querySelector("#pipe19").style.backgroundColor = "blue";
    document.querySelector("#pipe24").style.backgroundColor = "blue";
};

const generateLevelThree = () => {
    document.querySelector(".winning-message").innerText = "";
    level1 = false;
    level2 = false;
    level3 = true;
    level4 = false;
    clickCounter = 0;
    resetCounter();
    const playingField = document.querySelector(".playing-field");
    playingField.innerText = "";
    for (let i = 1; i < 26; i++) {
        pipeSpace = document.createElement("div");
        pipeSpace.classList.add("pipes");
        pipeSpace.setAttribute("id", "pipe" + i);
        pipeSpace.setAttribute("draggable", true);
        pipeSpace.style.backgroundColor = "slategray";
        playingField.appendChild(pipeSpace);

        pipeSpace.addEventListener("mousedown", selectColor);
    }
    predeterminedPipes3();
};

const predeterminedPipes3 = () => {
    document.querySelector("#pipe1").style.backgroundColor = "red";
    document.querySelector("#pipe6").style.backgroundColor = "red";
    document.querySelector("#pipe5").style.backgroundColor = "blue";
    document.querySelector("#pipe13").style.backgroundColor = "blue";
    document.querySelector("#pipe12").style.backgroundColor = "green";
    document.querySelector("#pipe23").style.backgroundColor = "green";
    document.querySelector("#pipe9").style.backgroundColor = "orange";
    document.querySelector("#pipe17").style.backgroundColor = "orange";
    document.querySelector("#pipe10").style.backgroundColor = "yellow";
    document.querySelector("#pipe24").style.backgroundColor = "yellow";
};

const generateLevelFour = () => {
    document.querySelector(".winning-message").innerText = "";
    level1 = false;
    level2 = false;
    level3 = false;
    level4 = true;
    clickCounter = 0;
    resetCounter();
    const playingField = document.querySelector(".playing-field");
    playingField.innerText = "";
    for (let i = 1; i < 26; i++) {
        pipeSpace = document.createElement("div");
        pipeSpace.classList.add("pipes");
        pipeSpace.setAttribute("id", "pipe" + i);
        pipeSpace.setAttribute("draggable", true);
        pipeSpace.style.backgroundColor = "slategray";
        playingField.appendChild(pipeSpace);

        pipeSpace.addEventListener("mousedown", selectColor);
    }
    predeterminedPipes4();
};

const predeterminedPipes4 = () => {
    document.querySelector("#pipe1").style.backgroundColor = "red";
    document.querySelector("#pipe13").style.backgroundColor = "red";
    document.querySelector("#pipe2").style.backgroundColor = "blue";
    document.querySelector("#pipe14").style.backgroundColor = "blue";
    document.querySelector("#pipe4").style.backgroundColor = "green";
    document.querySelector("#pipe24").style.backgroundColor = "green";
    document.querySelector("#pipe11").style.backgroundColor = "orange";
    document.querySelector("#pipe17").style.backgroundColor = "orange";
    document.querySelector("#pipe19").style.backgroundColor = "yellow";
    document.querySelector("#pipe21").style.backgroundColor = "yellow";
};



// Function that selects the color of click and hold
const selectColor = (event) => {
    clickCounter++;
    document.querySelector("#click-count").innerText = clickCounter;

    // the color of the click event is stored here
    color = event.target.style.backgroundColor;
    console.log(color);
    // we need to add a color pick counter and limit the count to just 1
    // or else we can just click and color multiple pipes of the same color and make winning easy
    if (color === "red") {
        redCounter++;
    } else if (color === "orange") {
        orangeCounter++;
    } else if (color === "yellow") {
        yellowCounter++;
    } else if (color === "green") {
        greenCounter++;
    } else if (color === "blue") {
        blueCounter++;
    }
    console.log(
        redCounter,
        orangeCounter,
        yellowCounter,
        greenCounter,
        blueCounter
    );

    if (
        redCounter >= 2 ||
        orangeCounter >= 2 ||
        yellowCounter >= 2 ||
        greenCounter >= 2 ||
        blueCounter >= 2
    ) {
        // for loop to go through all squares with that color you've clicked and change them back to slategray
        const allPipes = document.querySelectorAll(".pipes");
        const arrayOfAllPipes = Array.from(allPipes);
        for (let i = 0; i < arrayOfAllPipes.length; i++) {
            if (arrayOfAllPipes[i].style.backgroundColor === color) {
                arrayOfAllPipes[i].style.backgroundColor = "slategray";
                if (level1 === true) {
                    predeterminedPipes1();
                } else if (level2 === true) {
                    predeterminedPipes2();
                } else if (level3 === true) {
                    predeterminedPipes3();
                } else if (level4 === true) {
                    predeterminedPipes4();
                }
            }
        }
        if (color === "red") {
            redCounter = 0;
        } else if (color === "orange") {
            orangeCounter = 0;
        } else if (color === "yellow") {
            yellowCounter = 0;
        } else if (color === "green") {
            greenCounter = 0;
        } else if (color === "blue") {
            blueCounter = 0;
        }
    }

    console.log(
        redCounter,
        orangeCounter,
        yellowCounter,
        greenCounter,
        blueCounter
    );

    const allPipes = document.querySelectorAll(".pipes"); // nodes list of all pipes
    const arrayOfAllPipes = Array.from(allPipes); // takes the node list and turns it into an array
    for (let i = 0; i < arrayOfAllPipes.length; i++) {
        arrayOfAllPipes[i].addEventListener("dragenter", fillInColor);
    }
};

const fillInColor = (event) => {
    if (color === "slategray") {
        return;
    }
    // this prevents the original predetermined pipes from being colored over
    // it first checks for which level you are on and checks if the pipe you are trying to overwrite is a preset pipe
    if (
        level1 === true &&
        (event.target.id === "pipe1" ||
            event.target.id === "pipe4" ||
            event.target.id === "pipe5" ||
            event.target.id === "pipe22" ||
            event.target.id === "pipe20" ||
            event.target.id === "pipe24" ||
            event.target.id === "pipe9" ||
            event.target.id === "pipe21" ||
            event.target.id === "pipe13" ||
            event.target.id === "pipe17")
    ) {
        if (color !== event.target.style.backgroundColor) {
            if (color === "red") {
                redCounter = 0;
            } else if (color === "orange") {
                orangeCounter = 0;
            } else if (color === "yellow") {
                yellowCounter = 0;
            } else if (color === "green") {
                greenCounter = 0;
            } else if (color === "blue") {
                blueCounter = 0;
            }
            color = "slategray";
        }
        return;
    } else if (
        level2 === true &&
        (event.target.id === "pipe1" ||
            event.target.id === "pipe17" ||
            event.target.id === "pipe2" ||
            event.target.id === "pipe9" ||
            event.target.id === "pipe3" ||
            event.target.id === "pipe18" ||
            event.target.id === "pipe16" ||
            event.target.id === "pipe23" ||
            event.target.id === "pipe19" ||
            event.target.id === "pipe24")
    ) {
        if (color !== event.target.style.backgroundColor) {
            if (color === "red") {
                redCounter = 0;
            } else if (color === "orange") {
                orangeCounter = 0;
            } else if (color === "yellow") {
                yellowCounter = 0;
            } else if (color === "green") {
                greenCounter = 0;
            } else if (color === "blue") {
                blueCounter = 0;
            }
            color = "slategray";
        }
        return;
    } else if (
        level3 === true &&
        (event.target.id === "pipe1" ||
            event.target.id === "pipe6" ||
            event.target.id === "pipe5" ||
            event.target.id === "pipe13" ||
            event.target.id === "pipe12" ||
            event.target.id === "pipe23" ||
            event.target.id === "pipe9" ||
            event.target.id === "pipe17" ||
            event.target.id === "pipe10" ||
            event.target.id === "pipe24")
    ) {
        if (color !== event.target.style.backgroundColor) {
            if (color === "red") {
                redCounter = 0;
            } else if (color === "orange") {
                orangeCounter = 0;
            } else if (color === "yellow") {
                yellowCounter = 0;
            } else if (color === "green") {
                greenCounter = 0;
            } else if (color === "blue") {
                blueCounter = 0;
            }
            color = "slategray";
        }
        return;
    } else if (
        level4 === true &&
        (event.target.id === "pipe1" ||
            event.target.id === "pipe2" ||
            event.target.id === "pipe4" ||
            event.target.id === "pipe11" ||
            event.target.id === "pipe13" ||
            event.target.id === "pipe14" ||
            event.target.id === "pipe17" ||
            event.target.id === "pipe19" ||
            event.target.id === "pipe21" ||
            event.target.id === "pipe24")
    ) {
        if (color !== event.target.style.backgroundColor) {
            if (color === "red") {
                redCounter = 0;
            } else if (color === "orange") {
                orangeCounter = 0;
            } else if (color === "yellow") {
                yellowCounter = 0;
            } else if (color === "green") {
                greenCounter = 0;
            } else if (color === "blue") {
                blueCounter = 0;
            }
            color = "slategray";
        }
        return;
        // this if condition checks to see if we are overwriting a pipe that already has a color
    } else if (event.target.style.backgroundColor !== "slategray") {
        // check what color that target pipe has and store it in a variable
        const overwrittenColor = event.target.style.backgroundColor;
        // for loop to go through all pipes with that same color and change them back to slategray
        const allPipes = document.querySelectorAll(".pipes");
        const arrayOfAllPipes = Array.from(allPipes);
        for (let i = 0; i < arrayOfAllPipes.length; i++) {
            if (overwrittenColor === "red") {
                redCounter = 0;
            } else if (overwrittenColor === "orange") {
                orangeCounter = 0;
            } else if (overwrittenColor === "yellow") {
                yellowCounter = 0;
            } else if (overwrittenColor === "green") {
                greenCounter = 0;
            } else if (overwrittenColor === "blue") {
                blueCounter = 0;
            }
            if (arrayOfAllPipes[i].style.backgroundColor === overwrittenColor) {
                arrayOfAllPipes[i].style.backgroundColor = "slategray";
                // without this next code, you start by coloring in a gray space before the selected color
                event.target.style.backgroundColor = color;
                if (level1 === true) {
                    predeterminedPipes1();
                } else if (level2 === true) {
                    predeterminedPipes2();
                } else if (level3 === true) {
                    predeterminedPipes3();
                } else if (level4 === true) {
                    predeterminedPipes4();
                }
            }
        }
        // if a pipe is gray, we are allowed to paint in the selected color
    } else if (event.target.style.backgroundColor === "slategray") {
        event.target.style.backgroundColor = color;
    }
    // checks win condition each time a box is colored in
    winCondition();
};

// Reset button that returns the gameboard to the original state
const resetBoard = () => {
    for (let i = 0; i < 25; i++) {
        // styles every spot to slategray
        document.querySelectorAll(".pipes")[i].style.backgroundColor =
            "slategray";
        // and then it changes the fixed pipe positions back to their original color
        if (level1 === true) {
            predeterminedPipes1();
        } else if (level2 === true) {
            predeterminedPipes2();
        } else if (level3 === true) {
            predeterminedPipes3();
        } else if (level4 === true) {
            predeterminedPipes4();
        }
    }
    resetCounter();
    document.querySelector(".winning-message").innerText = "";
};

const resetCounter = () => {
    redCounter = 0;
    orangeCounter = 0;
    yellowCounter = 0;
    greenCounter = 0;
    blueCounter = 0;
    clickCounter = 0;
    document.querySelector("#click-count").innerText = clickCounter;
};

const winCondition = () => {
    // if all spaces are colored, then check to see if the color counter = 1 for each color.
    // if these conditions are met, then you win!
    const allPipes = document.querySelectorAll(".pipes");
    const arrayOfAllPipes = Array.from(allPipes);
    let isGray = false;
    for (let i = 0; i < arrayOfAllPipes.length; i++) {
        if (arrayOfAllPipes[i].style.backgroundColor === "slategray") {
            isGray = true;
            break;
        }
    }
    if (
        !isGray &&
        redCounter === 1 &&
        orangeCounter === 1 &&
        yellowCounter === 1 &&
        greenCounter === 1 &&
        blueCounter === 1
    ) {
        const randomNumber = Math.floor(Math.random() * 4)
        if (randomNumber === 0) {
            document.querySelector(".winning-message").innerText = "EASY PEASY LEMON SQUEEZY!";
        } else if (randomNumber === 1) {
            document.querySelector(".winning-message").innerText = "LIKE STEALING CANDY FROM A BABY!";
        } else if (randomNumber === 2) {
            document.querySelector(".winning-message").innerText = "AS EASY AS 123!";
        } else if (randomNumber === 3) {
            document.querySelector(".winning-message").innerText = "WELL... THAT WAS EASY!";
        }
        document.querySelector(".winning-message").style.color = "gold";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // defining pipeSpace and color for use in all scope levels
    const pipeSpace = "";
    const color = "slategray";

    const clickCounter = 0;
    const redCounter = 0;
    const orangeCounter = 0;
    const yellowCounter = 0;
    const greenCounter = 0;
    const blueCounter = 0;

    const level1 = false;
    const level2 = false;
    const level3 = false;
    const level4 = false;

    document
        .querySelector(".btn-primary")
        .addEventListener("click", generateLevelOne);
    document
        .querySelector(".btn-success")
        .addEventListener("click", generateLevelTwo);
    document
        .querySelector(".btn-danger")
        .addEventListener("click", generateLevelThree);
    document
        .querySelector(".btn-warning")
        .addEventListener("click", generateLevelFour);

    document.querySelector(".btn-dark").addEventListener("click", resetBoard);
});



// add code to add functionality for smaller screens

// make code more dry
// implement stretch goals

// or turn a click counter into turns left counter
