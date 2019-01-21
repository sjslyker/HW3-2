$(document).ready(function() {

    var score = 0;
    var wins = 0;
    var losses = 0;
    
    //Generate Number
    var targetNum = Math.floor(Math.random()*101+19);
    $('#setNumber').text(targetNum);
    
    //Crystals Numbers
    var crystal1 = Math.floor(Math.random()*11+1)
    var crystal2 = Math.floor(Math.random()*11+1)
    var crystal3 = Math.floor(Math.random()*11+1)
    var crystal4 = Math.floor(Math.random()*11+1)
    
    // Crystal Images
    var imgCrystal1 = $('<img>');     
        imgCrystal1.attr('data-num', crystal1);
        imgCrystal1.attr('src', 'assets/blue.jpeg');
        imgCrystal1.attr('alt', 'crystals');
        imgCrystal1.addClass('crystalImage col-md-3');
        $('#crystals').append(imgCrystal1);

    var imgCrystal2 = $('<img>');     
        imgCrystal2.attr('data-num', crystal2);
        imgCrystal2.attr('src', 'assets/green.jpeg');
        imgCrystal2.attr('alt', 'crystals');
        imgCrystal2.addClass('crystalImage col-md-3');
        $('#crystals').append(imgCrystal2);

    var imgCrystal3 = $('<img>');     
        imgCrystal3.attr('data-num', crystal3);
        imgCrystal3.attr('src', 'assets/red.jpeg');
        imgCrystal3.attr('alt', 'crystals');
        imgCrystal3.addClass('crystalImage col-md-3');
        $('#crystals').append(imgCrystal3);

    var imgCrystal4 = $('<img>');     
        imgCrystal4.attr('data-num', crystal4);
        imgCrystal4.attr('src', 'assets/yellow.jpeg');
        imgCrystal4.attr('alt', 'crystals');
        imgCrystal4.addClass('crystalImage col-md-3');
        $('#crystals').append(imgCrystal4);
    
    // Restart
    function restart() {
        targetNum = Math.floor(Math.random()*101+19);
        $('#setNumber').text(targetNum);    
        crystal1 = Math.floor(Math.random()*11+1);
        crystal2 = Math.floor(Math.random()*11+1);
        crystal3 = Math.floor(Math.random()*11+1);
        crystal4 = Math.floor(Math.random()*11+1);
        score = 0;
        $('#playerScore').text(score)    
    }
    
    // Win
    function win() {
        wins++;
        $('#wins').text(wins);
        restart();
    }
    
    // Lose
    function lose() {
        losses++;
        $('#losses').text(losses);
        restart();
    }
    
    // On Click
    $('.crystalImage').on('click', function(){
        score += parseInt($(this).data('num'));
        $('#playerScore').text(score) 
        if (score === targetNum) {
            win();
            alert("YOU WON!!!!!!!!")
        }
        else if (score > targetNum) {
            lose();
            alert("Better Luck Next Time")
        }
    })

});