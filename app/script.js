const targetNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        message.textContent = `Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`;
        disableInputAndButton();
    } else {
        message.textContent = userGuess < targetNumber ? 'Too low. Try again!' : 'Too high. Try again!';
    }
}

function disableInputAndButton() {
    const guessInput = document.getElementById('guessInput');
    const submitButton = document.querySelector('button');

    guessInput.disabled = true;
    submitButton.disabled = true;
}
