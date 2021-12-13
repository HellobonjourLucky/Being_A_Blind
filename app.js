const title = document.querySelector('.title');
const imessage = document.querySelector('.imessage');
const realAnswer = document.querySelector('.answer');
const answer = document.querySelector('.answer p');
const optionsDiv = document.querySelector('.options');
const sendBtn = document.querySelector('.sendBtn');
const body = document.querySelector('body');
const videoLocation = document.querySelector('.videoLocation');
const conversation = document.querySelector('.conversation');
const lastTextBox = document.querySelector('.lastTextBox');


const options_01 = ["water", "sky", "ocean"];
let choose_01 = [];
let noiseNum = 0;

options_01.forEach(option => {
    optionsDiv.innerHTML += `
        <input type="button" value=" ${option}" class="first_options">
    `;
});

const first_options = Array.from(document.getElementsByClassName('first_options'));

first_options.forEach(option => {
    option.addEventListener('click', function(e){
        e.target.classList.toggle("clicked");
        if(e.target.classList.contains("clicked")){
            if(!choose_01.includes(e.target.value)){
                choose_01.push(e.target.value); 
                choose_01_array = choose_01;
                testMePlease();
            } 
            changeBubbleAmount(50);

        }else{
            var clickedOption = e.target.value;
            choose_01 = choose_01.filter(function(i){
                return i != clickedOption;
            })
            choose_01_array = choose_01;
            testMePlease();
            // console.log(choose_01);
        }
        answer.innerHTML = `Blue is like...  ${choose_01}.`;
    });
});


sendBtn.addEventListener('click', function(e){
    imessage.innerHTML+= `<li class="fromA">${answer.innerText}</li>`; 

    if(choose_01.length){
        secondDialogue();
    }

    msgArray = Array.from(imessage.children);
    if(msgArray.length > 6){
        imessage.removeChild(msgArray[0]);
    }
})

