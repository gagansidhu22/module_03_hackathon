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
        button2.textContent = "Yes";
        button2.addEventListener("click", () => {
            currentState = "Incorrect";
            console.log(currentState);
        })
        getAnswer.appendChild(button2);
        
    }
}

function nextQuestion(){
    displayQuestion();
}