/* JavaScript for the wizard.html page */

// wizard's identity from robohash API
let identityURL = "https://robohash.org/";

// Harry Potter API: https://hp-api.herokuapp.com/
let potterURL = "http://hp-api.herokuapp.com/api/characters";

let searchButtonEl = document.querySelector("#search-username");       // search wizard directory button
let wizardNameInputEl = document.querySelector("#wizardName");         // user name input box
let errorMsgParaEl = document.querySelector("#error-message");   // error message for input box
let wizardInfo = document.querySelector('#wizard-info');                    // wizard-info div element
let welcomeMessage = document.querySelector("#welcome-wizard-message");     // welcome wizard message
let instructionsEl = document.querySelector("#instructions");          // give instructions to wizard
let studentBioTableEl = document.querySelector("#bio");                // wizard table
let storyEl = document.querySelector("#story");                        // wizard's story
let clickMeButtonEl = document.querySelector("#click-me");             // Click Me button
let acceptContractButtonEl = document.querySelector("#accept");        // Accept contract button

// hide the #wizard-info div element until name input is correctly processed
wizardInfo.style.visibility = "hidden";

// hide the #instructions para element until wizard needs directions
instructionsEl.style.visibility = "hidden";

// hide the click me button until table data is displayed
clickMeButtonEl.style.visibility = "hidden";

// hide the accept contract button until contract is displayed.
acceptContractButtonEl.style.visibility = "hidden";

// collect the wizard bio info & store in an object
let wizardBio = {
    "name": "",
    "house": "",
    "mentor": ""
};

// collect mentor's information from the Harry potter API
// and store in an object
let mentorBio = {
    "name": "",     // this value will be same as wizardBio.name 
    "house": "",
    "species": "",
    "ancestry": "",
    "isWizard": "",
}

// for creating the wizard identity image
// get the reference for the loader
let loadingWizardImageEl = document.querySelector("#loading-wizard-image");
let canvas = document.querySelector("#canvas"); // get the reference to the canvas
let context = canvas.getContext("2d");          // create a context
let objectImageURL;                             // student image url
let studentImage;                               // student wizard's image

// to get the hat image
let hatImageEl = document.querySelector("#hatImage");
let hatImage = null;

// to assign a house image
let houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];
let sortingHatImageEl = document.querySelector("#sorting-hat-group");
let groupFirstLetter;   // taken from wizardBio["house"][0]
let groupImage = null;

let contractText;

// after the wizard clicks the search button
searchButtonEl.addEventListener("click", function () {
    // get the wizard's name from the text input; store only 
    // the first 7 characters of the name in the wizardBio object name property
    wizardBio["name"] = wizardNameInputEl.value.trim().substring(0, 7).toUpperCase();

    // INPUT VALIDATION: make sure user enters at least 2 characters
    // if user enters only 1 character or does not enter anything
    if (wizardBio["name"].length < 2) {
        // prompt the wizard to enter at least 2 letters
        errorMsgParaEl.innerText = "Please enter at least TWO characters.";

        // stop processing
        return;
    }
    // if 2 or more than 2 characters are entered
    else {
        // if user enters only 2 full stops (periods/dots), '..'
        // robohash API does not have a character image for 2 periods
        // therefore this validation is required
        if (wizardBio["name"].length === 2 &&
            (wizardBio["name"][0] === "." && wizardBio["name"][1] === ".")) {
            // prompt the wizard to enter at least 2 letters
            errorMsgParaEl.innerText = "Cannot enter 2 consecutive periods/dots/fullstops. " +
                "Please reenter your name."

            // stop processing
            return;
        }

        wizardNameInputEl.remove();     // remove the inpue el
        searchButtonEl.remove();        // remove the search button el
        document.getElementById("name-help").remove();  // remove the small el note under input
        errorMsgParaEl.remove();        // remove the error para el

        // Make the wizard-info section visible
        wizardInfo.style.visibility = "visible";

        // Once the user enters a name, change the Welcome innerText & add the name to the page
        welcomeMessage.innerText = `Welcome, ${wizardBio.name} !`;

        // complete the API URL for the fetchingWizardImage function
        identityURL = identityURL + wizardBio.name + "?set=set5";
    }

    // callback function to get the wizard's image
    fetchingWizardImage();
})


// after the wizard clicks the hat
hatImageEl.addEventListener("click", function () {
    // remove the hat image element
    hatImageEl.remove();

    // get a random integer from 0 to 3 to go through the houses array
    let randomIndex = Math.floor(Math.random() * 4);

    // assign a group house to the wizard & set it in the wizardBio object
    wizardBio.house = houses[randomIndex];;

    // get the first character of the assigned group: r, s, g, or h
    groupFirstLetter = wizardBio.house[0].toLowerCase();

    // if there is no group house image
    if (groupImage === null) {
        // set up the house crest image
        groupImage = new Image();   // create a new image element
        groupImage.src = `images/houses/${groupFirstLetter}.png`;   // set image source
        groupImage.width = 200;     // set image width
        groupImage.height = 200;    // set image height
        sortingHatImageEl.appendChild(groupImage); // append image to the html page
    }

    instructionsEl.remove();   // remove the #instructions para element

    // callback function to fetch wizard's mentor & display table
    fetchMentor();
})


// after the user clicks the click me button to display contract
clickMeButtonEl.addEventListener("click", function () {
    // for typing effect
    let i = 0;
    let speed = 40;

    contractText = `Contracteth: I, ${wizardBio.mentor.toUpperCase()}, 
                    declare thee, ${wizardBio.name}, mine own mentee. `;

    // if the mentor is not a human
    if (mentorBio.species != "human") {
        contractText += `I desire thee to knoweth yond i am not a human, 
                         but a ${mentorBio.species}. `
    }
    // if the mentor is a muggle/human
    else if (mentorBio.ancestry === "muggle" || mentorBio.species === "human") {
        // if the muggle/human is not a wizard
        if (mentorBio.isWizard === false) {
            contractText += `What i signeth h're, i shalt f'rget the next minute. 
                         All actions has't consequences.  So, rememb'r thou art 
                         on thy owneth and thee, high-lone, art responsible f'r 
                         thy actions. `;
        }
        // if the muggle/human is a wizard
        else {
            contractText += `Despite being a human, i am still a wizard. 
                             Respect all and thee shalt riseth and learneth. `;
        }
    }

    // if the mentor and the wizard belong to the same house
    if (mentorBio.house === wizardBio.house) {
        contractText += `Hurray! we belongeth to the same house. 
                         We art going to has't so much excit'ment. `;
    }
    // if the mentor and the wizard belong to different houses
    else {
        // the there is no mentor house
        if (mentorBio.house === "") {
            contractText += `Trusteth me and i shalt guideth thee through heaven and hell. 
                             Doubteth me and thee shalt loseth thy way. `;

            // if the mentor is a human/muggle & is not a wizard
            if (mentorBio.species === "human" && mentorBio.isWizard === false) {
                contractText += `That is a Joke! Ha Ha Ha! `;
            }
        }
        // if there is a mentor house but is different from the wizard's house
        else {
            contractText += `I belongeth to house, ${mentorBio.house.toUpperCase()}, 
                             and thee belongeth to house, ${wizardBio.house.toUpperCase()}. 
                             Sweet w'rds shall not beest off'red, but intense training 
                             and practiceth thee shouldst adh're to. `;
        }
    }

    // for typing effects
    function typeWriter() {
        if (i < contractText.length) {
            storyEl.innerHTML += contractText.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
        else {
            // display the accept contract button, so that the wizard can click it.
            acceptContractButtonEl.style.visibility = "visible";
        }
    }

    typeWriter();   // callback function to write the student contract

    clickMeButtonEl.remove();   // remove the click me button element
})

// For contract terms & conditions
let textBlockInsideImageEl = document.querySelector("#text-block");

// initially hide the contract element
textBlockInsideImageEl.style.visibility = 'hidden';

// When the wizard accepts the contract
acceptContractButtonEl.addEventListener("click", function () {
    // now show the contract element
    textBlockInsideImageEl.style.visibility = 'visible';

    // set the contract in the wizard info section
    contractText += "<hr>Signed & Sealed: " + wizardBio.mentor + " & " + wizardBio.name;
    textBlockInsideImageEl.innerHTML = contractText;

    // remove the story element div and accept contract button from the html
    storyEl.innerHTML = "";
    acceptContractButtonEl.remove();

    // display final message after 2 seconds (2000 ms)
    setTimeout(function () {
        storyEl.innerHTML = `Your documents have been filed. 
                             Now enough of the greetings, and get to your classes!`;
    }, 2000);
})


// fetch the wizard's image from robohash API & displaying the wizard's hat
function fetchingWizardImage() {
    fetch(identityURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else {
                return response.blob();
            }
        })
        .then(myBlob => {
            loadingWizardImageEl.remove()  // remove the loader el

            // returns a URL pointing to the object.
            objectImageURL = URL.createObjectURL(myBlob);
            studentImage = new Image();            // Create a student image el
            studentImage.src = objectImageURL;     // set the image source attribute

            // listen for the event that the image is ready to load
            studentImage.addEventListener("load", function () {
                context.drawImage(studentImage, 25, 10, 200, 100);     // draw the image
            })
        })
        .catch(err => {
            alert("Error: " + err);
            console.log("ERROR: ", err);
        })
        .finally(() => {
            // if there is no hat image
            if (hatImage === null) {
                hatImage = new Image();                 // create a new image element
                hatImage.src = "images/hat.png";        // set the image source
                hatImage.width = 100;                   // set the image width
                hatImage.height = 100;                  // set the image height
                hatImage.style.cursor = "pointer";      // set the cursor style on the hat image
                hatImageEl.appendChild(hatImage);  // append the image to the html page
            }

            // display the #instructions para element
            instructionsEl.style.visibility = "visible";

            // instruct the wizard to click the hat
            instructionsEl.innerText = `${wizardBio.name}, if you see the hat, click the hat!`;
        })
}


// fetch the wizard's mentor from the Potter API, generate wizard's table, & show the click me button
function fetchMentor() {
    // returns a random integer from 0 to 406
    let randomIndex = Math.floor(Math.random() * 407);
    console.log(randomIndex);   // debug

    fetch(potterURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // allot the random mentor to the wizardBio object
            // set the wizardBio mentor property & mentorBio name property
            wizardBio.mentor = data[randomIndex].name;
            console.log("Wizard's mentor's name: " + wizardBio.mentor); // debug

            mentorBio.name = wizardBio.mentor;
            console.log("Mentor's name: " + mentorBio.name);            // debug

            // Get mentor's house if any
            mentorBio.house = data[randomIndex].house;
            console.log("Mentor House: " + mentorBio.house);        // debug

            // Get mentor's ancestry if any
            mentorBio.ancestry = data[randomIndex].ascestry;
            console.log("Mentor's Ancestry: " + mentorBio.ancestry);   // debug

            // Get mentor's species if any
            mentorBio.species = data[randomIndex].species;
            console.log("Mentor Species: " + mentorBio.species);    // debug

            // Get mentor's wizard status (true/false) if any
            mentorBio.isWizard = data[randomIndex].wizard;
            console.log("Mentor is a wizard: " + mentorBio.isWizard);    // debug
        })
        .catch(err => {
            alert("Error: " + err);
            console.log("ERROR: ", err);
        })
        .finally(() => {
            generate_table();   // callback function to generate the table

            // hide the click me button until table data is displayed
            clickMeButtonEl.style.visibility = "visible";
        })
}


// function to generate wizard's bio data
function generate_table() {
    // create a table and a table body element
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    // get the key values of the wizardBio
    let wizardBioKeys = Object.keys(wizardBio);
    let wizardBioValues = Object.values(wizardBio);

    // creating all cells
    for (let row = 0; row < 3; row++) {
        let tblRow = document.createElement("tr");  // create a table row

        for (let col = 0; col < 2; col++) {
            let cell;
            let cellText;

            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            if (col === 0) {
                cell = document.createElement("th");
                cellText = document.createTextNode(wizardBioKeys[row]);
                cell.appendChild(cellText);
            }
            else {
                cell = document.createElement("td");
                cellText = document.createTextNode(wizardBioValues[row]);
                cell.appendChild(cellText);
            }

            tblRow.appendChild(cell);
        }

        tblBody.appendChild(tblRow);    // add the row to the end of the table body
    }

    tbl.appendChild(tblBody);           // put the <tbody> in the <table>
    studentBioTableEl.appendChild(tbl); // appends <table> into studentBioTableEl
    tbl.setAttribute("border", "2");    // sets the border attribute of tbl to 2;
}


// enter key button function for the search button
document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        searchButtonEl.click();             // click the search button
        wizardNameInputEl.value = "";  // clear the input box
    }
})

// go back to welcome.html page when the wizard clicks 
// the return button at the bottom of the page
document.getElementById("go-back").onclick = function () {
    location.href = "welcome.html";
};

// when the page is reloaded/refreshed
window.onload = function () {
    wizardNameInputEl.value = "";     // clear the input text box
}