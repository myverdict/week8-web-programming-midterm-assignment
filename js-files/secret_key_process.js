/* JS file for secret_key.html page */

// get the reference to the unordered list element from the secret.key.html page
let unorderedListElementSpells = document.querySelector("#cast-spell");

// get the muggle error message element from the secret.html page
let muggleMessageElement = document.querySelector("#muggle-message");

let wrongLiElements;    // list of wrong spells
let rightLiElement;     // list of right spells
let numberOfSpells;     // total spells

let spells = [];        // an empty array of spells with the keyword "Opens"

console.log(listOfSpells.length);   // debug

for(let i = 0; i < listOfSpells.length; i++) {
    if(listOfSpells[i].effect.includes("Opens")) {
        spells.push(listOfSpells[i].name);
    }
}

console.log(spells);    // debug

displaySpells();    // callback function to display the list of spells
liListens();        // callback function to display muggle error messages

// function that displays the opening spells
function displaySpells() {
    unorderedListElementSpells.innerHTML = spells.map(eachSpell => {
        if (eachSpell === "Alohomora") {
            // create an anchor tag for the right spell directing the wizard to the wizard.html page
            return `<a href="./wizard.html"><li id="enter-hogwarts">${eachSpell}</li></a>`;
        }
        else {
            return `<li class="not-permitted">${eachSpell}</li>`;
        }
    }).join("")
}


// function for each wrong li element with addEventListener
function liListens() {
    // get the reference to all the wrong li elements
    wrongLiElements = document.querySelectorAll(".not-permitted");

    wrongLiElements.forEach(function (wrongLi) {
        // add an event listener for each wrong li element
        wrongLi.addEventListener("click", function () {
            // display a message for te wrong li element that was clicked
            muggleMessageElement.innerHTML = `You are an imposter !<br>
                                          Worse than Frankenstein, the Monster !<br>
                                          Get out of here !`;

            // error message disappears after 3 seconds (3000 milliseconds)
            setTimeout(function () { muggleMessageElement.innerHTML = "" }, 3000);
        })
    })
}


// go back to welcome.html page when user clicks return button
document.getElementById("go-back").onclick = function () {
    location.href = "welcome.html";
};