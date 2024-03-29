let btns = document.querySelectorAll("button");
for (i of btns) {
    i.addEventListener("click", handleClick);
}

function handleClick() {
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();
    // this.style.color = "white";
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML)
    switch (buttonInnerHTML) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            break;
    }
}

document.addEventListener("keypress", function(event){
    // if(event.key === "w"){
    //     var audio = new Audio('sounds/tom-1.mp3');
    //     audio.play();
    // }
    buttonAnimation(event.key);
    switch (event.key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            break;
    }
});

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}