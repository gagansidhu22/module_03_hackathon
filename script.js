let currentState = "beginning";
console.log(currentState);

function displayQuestion() {
    const getQuestion = document.getElementById("question-container");
    const getAnswer = document.getElementById("answers")

    while (getAnswer.firstChild) {
        getAnswer.removeChild(getAnswer.firstChild);
    }

    
    if(currentState == "beginning") {
        getQuestion.textContent = "Is the colour of snow white?";
        const button1 = document.createElement("button");
        button1.textContent = "Yes";
        button1.addEventListener("click", () => {
            currentState = "Q1-Correct";
            console.log(currentState);
        })
        getAnswer.appendChild(button1);

        const button2 = document.createElement("button");
        button2.textContent = "No";
        button2.addEventListener("click", () => {
            currentState = "Incorrect";
            console.log(currentState);
        })
        getAnswer.appendChild(button2);

    }
    else if (currentState == "Q1-Correct") {
        getQuestion.textContent = "Is the Red River College best college in the world?";
        const button1 = document.createElement("button");
        button1.textContent = "Yes";
        button1.addEventListener("click", () => {
            currentState = "Q2-Correct";
            console.log(currentState);
        })
        getAnswer.appendChild(button1);

        const button2 = document.createElement("button");
        button2.textContent = "No";
        button2.addEventListener("click", () => {
            currentState = "Incorrect";
            console.log(currentState);
        })
        getAnswer.appendChild(button2);
    }

    else if (currentState == "Q2-Correct"){
        getQuestion.textContent = "Is Winnipeg a province?";
        const button1 = document.createElement("button");
        button1.textContent = "Yes";
        button1.addEventListener("click", () => {
            currentState = "Incorrect";
            console.log(currentState);
        })
        getAnswer.appendChild(button1);

        const button2 = document.createElement("button");
        button2.textContent = "No";
        button2.addEventListener("click", () => {
            currentState = "Finish";
            console.log(currentState);
        })
        getAnswer.appendChild(button2);
    }

    // If the question is wrong, restart

    else if (currentState == "Incorrect"){
        getQuestion.textContent = "You got the question wrong. Time to restart!";
        currentState = "beginning";
    }

    else if (currentState == "Finish"){
        getQuestion.textContent = "Congartulations you answered all the answers correct!";
    }


}

function nextQuestion(){
    displayQuestion();
}