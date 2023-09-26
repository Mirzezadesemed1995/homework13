document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
 
    inputField.addEventListener("keydown", function (event) {
       if (event.key === "Backspace") {
          event.preventDefault();
          inputField.value += " ";
       } else if (event.key === " ") {
          let lastStatusOnInput = [];
 
          function spaceButton() {
             lastStatusOnInput = inputField.value.split("");
             lastStatusOnInput.pop();
             inputField.value = lastStatusOnInput.join("");
          }
 
          if (
             inputField.value.split("")[inputField.value.split("").length - 1] ==
             " "
          ) {
             spaceButton();
          }
 
          spaceButton();
       }
 
       if (inputField.value == " ") {
          inputField.value = "";
       }
    });
 });