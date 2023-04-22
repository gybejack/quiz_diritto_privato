
function addQ(question) {
    const wr = document.getElementById("qList");
    let cardNode = document.createElement("div");
    cardNode.setAttribute("class", "card");
    cardNode.innerHTML = `
    <div class="question">
                <p class="qText">${question["DOMANDA"]}</p>
                <ol class="qList" type="a">
                    <li class="qAnswer">${question["RISPOSTA_A"]}</li>
                    <li class="qAnswer">${question["RISPOSTA_B"]}</li>
                    <li class="qAnswer">${question["RISPOSTA_C"]}</li>
                </ol>
            </div>
    `
    wr.appendChild(cardNode);
}
var questions
fetch("csvjson.json")
.then((r) => r.json())
.then((j) => questions = j).then(() => {
console.log(questions);
for (let index = 0; index < 30; index++) {
    
    var q = (questions[Math.floor(Math.random()*questions.length)]);
    console.log(q["RISPOSTA_A"])
    addQ(q);
}
});

