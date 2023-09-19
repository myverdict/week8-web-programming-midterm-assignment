/* JavaScript for the muggle.html page */

let url = "https://favqs.com/api/qotd"; // Quotes API

let saveButtonElement = document.querySelector("#save-username");
let nameInputElement = document.querySelector("#username");
let welcomeMessage = document.querySelector("#welcome-message"); // a p tag
let quoteOfTheDay = document.querySelector("#quote-of-the-day"); // a p tag

// Add an event listener for the mouse click of the save button
saveButtonElement.addEventListener("click", function () {
  let name = nameInputElement.value; // get the user's name

  // Validate that the user enters at least 2 letters
  if (name.length < 2) {
    // clear any previous quotes that was displayed
    quoteOfTheDay.innerText = "";

    // If user does not enter at least 2 letters, display this message
    welcomeMessage.innerHTML = "Please enter at least 2 letters.";
  }
  // if user enters valid characters
  else {
    // clear the input box
    nameInputElement.value = "";

    // Create a welcomeMessage for the user
    welcomeMessage.innerText = `Welcome, ${name}!`;

    // callback function that fetches the quote from an API
    fetchingQuote();
  }
});

// function that fetches a quote from the Quotes API
function fetchingQuote() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((quoteData) => {
      // display the quote of the day
      quoteOfTheDay.innerHTML =
        "<label>Quote of the day</label><br>" + quoteData.quote.body;
    })
    .catch((err) => {
      alert("Error: " + err);
      console.log("Error", err);
    });
}

// go back to the welcome.html page when the user clicks the return button
document.getElementById("go-back").onclick = function () {
  location.href = "welcome.html";
};

// enter key button function for the save button
document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    saveButtonElement.click(); // click the save button
    nameInputElement.value = ""; // clear the input box
  }
});
