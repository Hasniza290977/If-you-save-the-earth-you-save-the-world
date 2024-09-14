function checkAnswer(answer, questionId) {
    let resultMessage;
    if (answer === 'correct') {
        resultMessage = "Correct! Great job!";
    } else {
        resultMessage = "Incorrect. Try again!";
    }

    // Show the result as an alert
    alert(resultMessage);

    // Disable buttons after answering
    const buttons = document.querySelectorAll(`#${questionId} button`);
    buttons.forEach(button => {
        button.disabled = true;
    });
}


