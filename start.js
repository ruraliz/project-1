instructions= "You will be shown a flag representing a specific coutry, each flag will apear for 10 second!<br/><br/>You have 10 seconds to select the correct answer" + 
"If your selected answer if correct you get " + '+50 '.bold() + "If your selected answer is wrong, you get " + "-50 ".bold() + "<br/><br/>You also have a timer to keep you on track. In those 10 seconds you can make multiple guesses"
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('help').addEventListener('click', function() {
        document.getElementById('helpScreen').classList.toggle('hide');
        document.getElementById('startScreen').classList.toggle('hide');
        document.getElementById('instructions').innerHTML = instructions;
    })
})