
$(document).ready(function() {
    
    //my variables
    var scoreChoices = [35, 56, 99, 19, 30, 47, 19, 120, 103, 67, 117, 21, 33, 45, 101];
    var targetScore = scoreChoices[Math.floor(Math.random() * scoreChoices.length)];
    $("#targetScore").html(targetScore);
    var wins = 0;
    var losses = 0;
    var score = 0;
    var clicks = 0;
    var valueOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var backgrounds = [
        "../assets/images/background2.jpg",
        "../assets/images/background6.jpg",
        "../assets/images/background5.jpg",
        "../assets/images/background1.jpg",
        "../assets/images/background7.jpg",
        "../assets/images/background4.jpg",
        "../assets/images/background8.jpg",
        "../assets/images/background3.jpg"
    ];
    
    //my code that shuffles value Options after each win or loss. 
    var shuffle = (all, one, i, orig) => {
        if (i !== 1) return all;
        for (let i = orig.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [orig[i - 1], orig[j]] = [orig[j], orig[i - 1]];
        }
        return orig;
    }

    var shuffledNums = valueOptions.reduce(shuffle);

    //my function that will reset the target score and the current score after each win or loss
    function reset() {
        targetScore = scoreChoices[Math.floor(Math.random() * scoreChoices.length)];
        $("#targetScore").html(targetScore);
        score = 0;
        $("#score").html(score);
        clicks = 0;
        $("#clicks").html(clicks);
    };

    //function that will change the background randomly after each win or loss.
    function changeBcg() {
        $("body").css({"background-image": "url(images/" + backgrounds[Math.floor(Math.random() * backgrounds.length)] + ")"});
    };

    //function that will check whether the scores match after each click event, will reset the game and change the background. 
    function checkScore() {
        if (score === targetScore) {
            alert("You clicked " + clicks + " times and collected the perfect amount of mushrooms!");
            wins++;
            $("#wins").html(wins);
            shuffledNums = valueOptions.reduce(shuffle);
            reset();
            changeBcg();
            
        } else if (score > targetScore) {
            alert("Oh no, you collected too many mushrooms. Try again!");
            losses++;
            $("#losses").html(losses);
            shuffledNums = valueOptions.reduce(shuffle);
            reset();
            changeBcg();
        }
    };

    //functions that start with click events
    $("#mushroom1").on("click", function() {
        score += shuffledNums[0];
        $("#score").html(score);
        clicks++;
        $("#clicks").html(clicks);
        checkScore();
    });

    $("#mushroom2").on("click", function() {
        score += shuffledNums[1];
        $("#score").html(score);
        clicks++;
        $("#clicks").html(clicks);
        checkScore();
    });

    $("#mushroom3").on("click", function() {
        score += shuffledNums[2];
        $("#score").html(score);
        clicks++;
        $("#clicks").html(clicks);
        checkScore();
    });

    $("#mushroom4").on("click", function() {
        score += shuffledNums[3];
        $("#score").html(score);
        clicks++;
        $("#clicks").html(clicks);
        checkScore();
    });
    
});
