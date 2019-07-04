//////////////////////////COUNTER//////////////////

$(".true-false").addClass("invisible");
$("#end-button").addClass("invisible");


i = 60;
function onTimer() {
    document.getElementById('mycounter').innerHTML = i;
    i--;

    document.getElementById('question-headers-one').textContent = 'The acronym S.H.I.E.L.D. stands for Strategic Homicide Intervention, Entitlement and\
    Logistics Division';

    document.getElementById('question-headers-two').textContent = 'The wormhole that allowed Loki to reach the earth was in New York city';

    document.getElementById('question-headers-three').textContent = 'Spiderman began as an Avenger';

    document.getElementById('question-headers-four').textContent = 'Dr.Strange only saw one possible outcome for the Avengers to win';

    document.getElementById('question-headers-five').textContent = 'Hawkeye/Ronin special power was "hyper-focus vision"';

    $("#start-button").addClass("invisible");
    $(".true-false").removeClass("invisible");
    $("#end-button").removeClass("invisible");

    function disableLoop() {
        playAudio.loop;
        /* playAudio.play();*/
        console.log(playAudio);
    }
    disableLoop();

    if (i < 0) {
        loseAudio.play();
        alert('You lose!');
    }
    else {
        setTimeout(onTimer, 1000);
    }
}
//////////////////////////GAME//////////////////////////////
var score = 0;

loseAudio = new Audio(src = "assets/sounds/ant.mp3");
playAudio = new Audio(src = "assets/sounds/desperate.mp3");

console.log(playAudio);



$("#q1a").one("click", function () {
    score++;
    console.log(score);
})

$("#q2a").one("click", function () {
    score++;
    console.log(score);
})
$("#q3a").one("click", function () {
    score++;
    console.log(score);
})
$("#q4a").one("click", function () {
    score++;
    console.log(score);
})
$("#q5a").one("click", function () {
    score++;
    console.log(score);
})

/////////////END GAME/////////////////
function endGame() {
    document.getElementById('result').textContent = "YOU HAVE " + score + " ANSWERS CORRECT!!! Refresh page to start again.";

    $("#end-button").addClass("invisible");

    if (i != 0) {
        $("#mycounter").addClass("invisible");

    }

    i = 1000;
};
