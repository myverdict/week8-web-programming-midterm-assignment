/* JavaScript for the secret_key.html page */

// get the reference to the unordered list element from the secret_key.html page
let unorderedListElementSpells = document.querySelector("#cast-spell");

// get the muggle error message element from the secret_key.html page
let muggleMessageElement = document.querySelector("#muggle-message");

let wrongLiElements; // list of wrong spells
let rightLiElement; // list of right spells; will have only 1 spell
let numberOfSpells; // total spells

// an empty array of spell names
let spells = [];

// get the list of spell names where the effect includes the word "Opens"
for (let i = 0; i < listOfSpells.length; i++) {
  if (listOfSpells[i].effect.includes("Opens")) {
    // push the spell name on the spells array
    spells.push(listOfSpells[i].name);
  }
}

displaySpells(); // callback function to display the list of spells
liListens(); // callback function to display muggle error messages

// function that displays the opening spells
function displaySpells() {
  unorderedListElementSpells.innerHTML = spells
    .map((eachSpellListEl) => {
      // if the correct li element/spell with "Alohomora" is clicked
      if (eachSpellListEl === "Alohomora") {
        // direct the wizard to the wizard.html page
        // create an anchor tag on the list element
        // add an id attribute, with value "enter-hogwarts", to the list element
        return `<a href="./wizard.html"><li id="enter-hogwarts">${eachSpellListEl}</li></a>`;
      }
      // if other incorrect li elements/spells are clicked
      else {
        // add a class attribute, with value "not-permitted", to the list element
        return `<li class="not-permitted">${eachSpellListEl}</li>`;
      }
    })
    .join(""); // join all the list items
}

// function for each wrong li element with addEventListener
function liListens() {
  // get the reference to all the wrong li elements with class ".not-permitted"
  wrongLiElements = document.querySelectorAll(".not-permitted");

  // loop through each wrong li element
  wrongLiElements.forEach(function (wrongLi) {
    // add a click event listener for each wrong li element
    wrongLi.addEventListener("click", function () {
      // display a message for te wrong li element that was clicked
      muggleMessageElement.innerHTML = `You are an imposter !<br>
                                              Worse than Frankenstein, the Monster !<br>
                                              Get out of here !`;

      // error message disappears after 3 seconds (3000 milliseconds)
      setTimeout(function () {
        muggleMessageElement.innerHTML = "";
      }, 3000);
    });
  });
}

// go back to welcome.html page when user clicks return button
document.getElementById("go-back").onclick = function () {
  location.href = "welcome.html";
};
