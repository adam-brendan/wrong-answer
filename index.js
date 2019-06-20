const wrongAnswer = (num1, operator, num2) => {
    let answer = 0;
    let wrongAnswer = Math.floor(Math.random() * Math.floor(1000));
    if (operator === "+") {
        answer = num1 + num2;
    } else if (operator === "-") {
        answer = num1 - num2;
    } else if (operator === "*") {
        answer = num1 * num2;
    } else if (operator === "/") {
        answer = num1 / num2;
    }

    if (answer === wrongAnswer) {
        wrongAnswer = Math.floor(Math.random() * Math.floor(1000))
    }
    return wrongAnswer;
}

export default wrongAnswer;