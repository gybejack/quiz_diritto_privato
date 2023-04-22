

function addQ(question) {
    const wr = document.getElementById("qList");
    let cardNode = document.createElement("div");
    cardNode.setAttribute("class", "card");
    cardNode.innerHTML = `
    <div class="question">
                <p class="qText">${question["DOMANDA"]}</p>
                <ol class="qList" type="a" id=${question["Numero"]}>
                    <li class="qAnswer">${question["RISPOSTA_A"]}</li>
                    <li class="qAnswer">${question["RISPOSTA_B"]}</li>
                    <li class="qAnswer">${question["RISPOSTA_C"]}</li>
                </ol>
            </div>
    `
    wr.appendChild(cardNode);
}

function clickedPlay() {
    startTimerAndMove();
    startQuiz();
}

function startTimerAndMove() {
    const clock = document.getElementById("clock");
    clock.style.fontSize = "30px";
    const timer = document.getElementById("timer");
    timer.style.margin = "0";
    timer.style.right="0";
    timer.style.bottom="0";
    timer.style.position= "fixed";
    const btn = document.getElementById("play");
    btn.remove();
    let duration = 60*45;
    setInterval(()=>{
        if (duration<0) {
            return 0;
        }
        const clock = document.getElementById("clock");
        clock.innerText = `${String( Math.floor((duration /60))).padStart(2, '0')}:${String(Math.floor((duration % 60))).padStart(2,'0') }`;
        duration--;
    }, 1000);


}
function startQuiz() {
    var questions
    fetch("csvjson.json")
        .then((r) => r.json())
        .then((j) => questions = j).then(() => {
            console.log(questions);
            for (let index = 0; index < 30; index++) {

                var q = (questions[Math.floor(Math.random() * questions.length)]);
                console.log(q["RISPOSTA_A"])
                addQ(q);
            }
        });


}
