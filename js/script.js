const generateLevelOne = () => {
    document.querySelector(".winning-message").innerText = "";
    level1 = true;
    level2 = false;
    level3 = false;
    level4 = false;
    clickCounter = 0;
    resetAllCounters();
    createPipesThenListen();
    predeterminedPipes1();
};
// sets the predetermined pipe locations, gives them colors, and an image
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
    document.querySelector("#pipe1").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe4").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe5").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe22").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe20").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe24").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe9").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe21").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe13").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe17").style.backgroundImage = "url('img/pipes.png')";
};

const generateLevelTwo = () => {
    document.querySelector(".winning-message").innerText = "";
    level1 = false;
    level2 = true;
    level3 = false;
    level4 = false;
    clickCounter = 0;
    resetAllCounters();
    createPipesThenListen();
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
    document.querySelector("#pipe1").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe17").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe2").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe9").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe3").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe18").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe16").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe23").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe19").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe24").style.backgroundImage = "url('img/pipes.png')";
};

const generateLevelThree = () => {
    document.querySelector(".winning-message").innerText = "";
    level1 = false;
    level2 = false;
    level3 = true;
    level4 = false;
    clickCounter = 0;
    resetAllCounters();
    createPipesThenListen();
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
    document.querySelector("#pipe1").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe6").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe5").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe13").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe12").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe23").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe9").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe17").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe10").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe24").style.backgroundImage = "url('img/pipes.png')";
};

const generateLevelFour = () => {
    document.querySelector(".winning-message").innerText = "";
    level1 = false;
    level2 = false;
    level3 = false;
    level4 = true;
    clickCounter = 0;
    resetAllCounters();
    createPipesThenListen();
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
    document.querySelector("#pipe1").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe13").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe2").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe14").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe4").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe24").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe11").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe17").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe19").style.backgroundImage = "url('img/pipes.png')";
    document.querySelector("#pipe21").style.backgroundImage = "url('img/pipes.png')";
};


// Function that resets the color counters and click counter
const resetAllCounters = () => {
    redCounter = 0;
    orangeCounter = 0;
    yellowCounter = 0;
    greenCounter = 0;
    blueCounter = 0;
    clickCounter = 0;
    document.querySelector("#click-count").innerText = clickCounter;
};


// This function creates the initial pipes for each level and then listens for mousedown
const createPipesThenListen = () => {
    const playingField = document.querySelector(".playing-field");
    playingField.innerText = ""; // this clears the field to make space for new pipes
    // this for loop creates each of the 25 pipes
    for (let i = 1; i < 26; i++) {
        pipeSpace = document.createElement("div");
        pipeSpace.classList.add("pipes");
        pipeSpace.setAttribute("id", "pipe" + i); // to give each pipe its own speicfic ID
        pipeSpace.setAttribute("draggable", true);
        pipeSpace.style.backgroundColor = "slategray";
        playingField.appendChild(pipeSpace);
        pipeSpace.addEventListener("mousedown", calculateClicksThenListen); // mousedown event needs to be inside this loop
    }
};


// This function calculates the number of clicks made on each color, then stores
// the clicked color into a variable, and uses that stored color to color the pipes
const calculateClicksThenListen = (event) => {
    clickCounter++;
    document.querySelector("#click-count").innerText = clickCounter;
    heldColor = event.target.style.backgroundColor; // mousedown event color stored here
    if (heldColor === "red") {
        redCounter++;
    } else if (heldColor === "orange") {
        orangeCounter++;
    } else if (heldColor === "yellow") {
        yellowCounter++;
    } else if (heldColor === "green") {
        greenCounter++;
    } else if (heldColor === "blue") {
        blueCounter++;
    }
    // console.log("click ", redCounter, orangeCounter, yellowCounter, greenCounter, blueCounter);
    if (redCounter >= 2 || orangeCounter >= 2 || yellowCounter >= 2 || greenCounter >= 2 || blueCounter >= 2) {
        // if the counter goes up to 2, all squares of that color you've clicked on will revert back to slategray
        const allPipes = document.querySelectorAll(".pipes"); // nodes list of all pipes
        const arrayOfAllPipes = Array.from(allPipes); // takes the node list and turns it into an array
        for (let i = 0; i < arrayOfAllPipes.length; i++) {
            if (arrayOfAllPipes[i].style.backgroundColor === heldColor) {
                arrayOfAllPipes[i].style.backgroundColor = "slategray";
                // this is needed to repaint the original pipes that were changed to slategray above
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
        // reset the counter of a specific color
        if (heldColor === "red") {
            redCounter = 0;
        } else if (heldColor === "orange") {
            orangeCounter = 0;
        } else if (heldColor === "yellow") {
            yellowCounter = 0;
        } else if (heldColor === "green") {
            greenCounter = 0;
        } else if (heldColor === "blue") {
            blueCounter = 0;
        }
        // this prevents you from painting any pipe because it is the second click
        heldColor = "slategray";
    }
    // when we drag our colored box/pipe into another div/pipe, fire the fillInColor function
    const allPipes = document.querySelectorAll(".pipes"); // nodes list of all pipes
    const arrayOfAllPipes = Array.from(allPipes); // takes the node list and turns it into an array
    for (let i = 0; i < arrayOfAllPipes.length; i++) {
        arrayOfAllPipes[i].addEventListener("dragenter", fillInColor);
    }
};


const fillInColor = (event) => {
    // this prevents us from painting gray everywhere
    if (heldColor === "slategray") {
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
        if (heldColor !== event.target.style.backgroundColor) {
            heldColor = "slategray";
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
        if (heldColor !== event.target.style.backgroundColor) {
            heldColor = "slategray";
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
        if (heldColor !== event.target.style.backgroundColor) {
            heldColor = "slategray";
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
        if (heldColor !== event.target.style.backgroundColor) {
            heldColor = "slategray";
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
                // without this next code, the first space you start coloring in will be gray before switching to the selected color
                event.target.style.backgroundColor = heldColor;
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
        event.target.style.backgroundColor = heldColor;
    }
    // checks win condition each time a pipe is colored in
    winCondition();
};

// Reset button that returns the gameboard to the original state
const resetBoard = () => {
    for (let i = 0; i < 25; i++) {
        // styles every spot to slategray
        document.querySelectorAll(".pipes")[i].style.backgroundColor = "slategray";
        // and then it changes the fixed pipe positions back to their original color depending on level
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
    resetAllCounters();
    document.querySelector(".winning-message").innerText = "";
};


// this function goes through the appropriate array, depending on the current level, 
// and then checks to see if the background colors match
const winCondition = () => {
    const allPipes = document.querySelectorAll(".pipes");
    const arrayOfAllPipes = Array.from(allPipes);
    let answerArray = [];
    if (level1 === true) {
        answerArray = [
            "red", "red", "red", "red", "orange",
            "green", "green", "green", "green", "orange",
            "green", "blue", "blue", "orange", "orange",
            "green", "blue", "orange", "orange", "yellow",
            "green", "orange", "orange", "yellow", "yellow"
        ];
    } else if (level2 === true) {
        answerArray = [
            "red", "orange", "yellow", "yellow", "yellow",
            "red", "orange", "orange", "orange", "yellow",
            "red", "red", "yellow", "yellow", "yellow", 
            "green", "red", "yellow", "blue", "blue",
            "green", "green", "green", "blue", "blue"
        ]
    } else if (level3 === true) {
        answerArray = [
            "red", "red", "blue", "blue", "blue",
            "red", "red", "blue", "orange", "yellow",
            "green", "green", "blue", "orange", "yellow",
            "green", "orange", "orange", "orange", "yellow",
            "green", "green", "green", "yellow", "yellow"
        ]
    } else if (level4 === true) {
        answerArray = [
            "red", "blue", "blue", "green", "green",
            "red", "red", "blue", "blue", "green",
            "orange", "red", "red", "blue", "green",
            "orange", "orange", "yellow", "yellow", "green",
            "yellow", "yellow", "yellow", "green", "green"
        ]
    }
    for (let i = 0; i < arrayOfAllPipes.length; i++) {
        if (arrayOfAllPipes[i].style.backgroundColor !== answerArray[i]) {
            return false;
        }
    }
    const randomNumber = Math.floor(Math.random() * 4);
    if (randomNumber === 0) {
        document.querySelector(".winning-message").innerText = "EASY PEASY LEMON SQUEEZY!";
    } else if (randomNumber === 1) {
        document.querySelector(".winning-message").innerText = "LIKE TAKING CANDY FROM A BABY!";
    } else if (randomNumber === 2) {
        document.querySelector(".winning-message").innerText = "AS EASY AS 123!";
    } else if (randomNumber === 3) {
        document.querySelector(".winning-message").innerText = "WELL... THAT WAS EASY!";
    }
    document.querySelector(".winning-message").style.color = "gold";
    heldColor = "slategray"; // prevents you from continuing to create/overwrite with the current held color once you win
};


document.addEventListener("DOMContentLoaded", () => {
    const pipeSpace = "divs/pipes to be made";
    const heldColor = "slategray"; // this will hold the click color

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

    document.querySelector(".btn-primary").addEventListener("click", generateLevelOne);
    document.querySelector(".btn-success").addEventListener("click", generateLevelTwo);
    document.querySelector(".btn-danger").addEventListener("click", generateLevelThree);
    document.querySelector(".btn-warning").addEventListener("click", generateLevelFour);

    document.querySelector(".btn-dark").addEventListener("click", resetBoard);
});