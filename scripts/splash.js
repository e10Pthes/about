var width = window.innerWidth || document.body.clientWidth;
var height = window.innerHeight || document.body.clientHeight;
var sentences = [
    "La constitution est en cours d'écriture. Revenez plus tard en",
    "Je vous assure que nous mettons tout en oeuvre pour rédiger la constitution le plus vite possible. Revenez plus tard en",
    "Il n'y a pas de flag ici, si c'est ce que vous cherchez ! Mais vous êtes sur la bonne piste en",
    "- Toc toc ! - Qui est là ? [très loooooooooooooooongue pause] - Internet Explorer ! "
];
var i = 0;
var isPaysage = true;

//Check orientation of screen
if (height > width) {
    document.getElementById("body").innerHTML = "<h4>Tournez votre écran en format paysage s'il vous plait !</h4>";
    isPaysage = false;
}

//If width becomes larger than height, refresh
window.addEventListener('resize', reportWindowSize);
function reportWindowSize() {
    width = window.innerWidth || document.body.clientWidth;
    height = window.innerHeight || document.body.clientHeight;
    if (!isPaysage) {
        location.reload();
    } else {
        if (height > width) {
            document.getElementById("body").innerHTML = "<h4>Tournez votre écran en format paysage s'il vous plait !</h4>";
            isPaysage = false;
        }
    }
}

//First background for the [FLAG]
var optionsBackground, bsBackground;
optionsBackground = {
    queue: true,
    size: 250,
    padding: 0,
    overlap: 100,
    inkAmount: 20,
    frames: 100,
    frameAnimation: true,
    image: '../images/flag.svg',
    stretch: true,
    width: width,
    height: height
};

bsBackground = new Brushstroke(optionsBackground);

function flagReveal() {
    bsBackground.draw();
    setTimeout(function () {
        document.getElementById("message").innerText = sentences[i%sentences.length];
        i++ ;
        bsBackground.erase();
        setTimeout(function () {
            flagReveal();
        }, 8000);
    }, 5000);
}