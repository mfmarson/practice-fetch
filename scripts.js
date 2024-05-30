"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const formContainer = document.getElementById("formContainer");
});

//setAtt. is a method with two params name and value
const form = document.createElement("form");
form.setAttribute("id", "github_username_form");

const label = document.createElement("label");
label.setAttribute("for", "username");

const input = document.createElement("input"); //user input section
input.setAttribute("type", "text"); //the type of input is text
input.setAttribute("id", "username"); // user is entering username
input.setAttribute("name", "username"); //the input name is username??
input.setAttribute("placeholder", "GitHub Username"); //what shows in the box prior to input
input.setAttribute("required", true); //input must be filled in

const button = document.createElement("button");
button.setAttribute("type", "submit"); //it is a submit button
button.textContent = "Submit"; //the text on button says submit

//append child elements to form to allow for dynamic enablement
form.appendChild(label);
form.appendChild(input);
form.appendChild(button);

//append the form, which is not child compared to formContainer- to the entire container to run program
formContainer.appendChild(form);

//add event handler because we are creating the event to listen for submit form
form.addEventListener("submit", function (event) {
  event.preventDefault();
}); //why do we want this again???

//grab the username from the input field
const username = input.value;

//now that we have the user id/name we want to fetch the GH data
fetch(`https://api.github.com/users/${username}`) //${used for what will be replaced when promise comes back}
  .then((response) => response.json()) // => is function saying when we get the info we want a response in json
  .then((data) => {
    //once we get that json we want to pull that data and display it
    userInfo(data);
    input.value = ""; //once we display fetched data, we want to clear input for next submission
  })
  .catch((error) => {
    console.error("Error fetching GitHub user:", error); //if during this fetch there is any type of error, console back error and error number(?)
  });
