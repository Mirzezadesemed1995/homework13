document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById("inputField");

    inputField.addEventListener("keydown", function(event) {
        if (event.key === "Backspace") {
            event.preventDefault();
            inputField.value += " ";
        } else if(event.key === " ") {
            let sonveziyyet = inputField.value.split('');
            sonveziyyet.pop();
            inputField.value = sonveziyyet.join('');
        }
    });
});
