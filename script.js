/*Typing Effect*/
const content = "Hello, I'm won yeong."
const text = document.querySelector(".text");
let i = 0;

function typing(){
    text.textContent +=content[i++];
    if(i > content.length){
        text.textContent = "";
        i = 0;
    }
}

setInterval(typing, 300);   //typing함수를 0.3초마다 호출

/*Music*/
const sounds = document.querySelectorAll("audio");
const pads = document.querySelectorAll(".pads div");
pads.forEach((pad, index) => {
    pad.addEventListener('click', function(){
        //기존에 재생되는 음악을 중지 시켜야 한다.
        sounds.forEach(sound => {
            console.log(sound);
            sound.pause();
        });
        // 선택된 음악 재생
        if(sounds[index].getAttribute('class') == "paused"){
            sounds[index].currentTime = 0;
            sounds[index].play();
            sounds[index].setAttribute('class',"played");
        } else {    //다시 click시 음악 멈춤
            sounds[index].pause();
            sounds[index].setAttribute('class',"paused");
        }
    });
});
$('button:submit').click(function(e){
    e.preventDefault();
});
