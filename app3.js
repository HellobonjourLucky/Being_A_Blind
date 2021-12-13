options_03 = ["cold", "fresh", "light", "gloomy"];
let choose_03 = [];
let coldBtn, freshBtn, lightBtn, gloomyBtn;

function reaction01(){
    imessage.innerHTML= `<li class="fromB">But...it doesn't make any sense.</li>`;
}
function reaction02(){
    imessage.innerHTML+= `<li class="fromB">How do <strong>${choose_01_array}</strong> and <strong>${choose_02_array}</strong> have the same color?</li>`;
}
function reaction03(){
    imessage.innerHTML+= `<li class="fromA">Well then let's say... </li>`;
}

var once = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            setTimeout(reaction01, 1000);
            setTimeout(reaction02, 2500);
            setTimeout(reaction03, 4000);
        }
    };
})();

function myVideoPlay(array){
    videoLocation.innerHTML = "";
    array.forEach(item => {  
        videoLocation.innerHTML += `
            <video autoplay muted loop class=" movie" id="myVideo">
            <source src="assets/movies/${item.trim()}.mp4" type="video/mp4">
            </video>
        `
        imessage.classList.add('modify');
        answer.classList.add('modify');
        realAnswer.classList.add('modify');
        title.classList.add('modify');
    })
}

function thirdDialogue(){
    once();

    optionsDiv.innerHTML = '';
    answer.innerHTML = 'Blue feels like... ';

    options_03.forEach(option => {
        optionsDiv.innerHTML += `
            <input type="button" id= "${option}" value=" ${option}" class="thrid_options ${option}">
        `;
    });

    

    const third_options = Array.from(document.getElementsByClassName('thrid_options'));

    third_options.forEach(option => {
        option.addEventListener('click', function(e){
            e.target.classList.toggle("clicked");
            if(e.target.classList.contains("clicked")){
                if(!choose_03.includes(e.target.value)){
                    choose_03.push(e.target.value); 
                    choose_03_array = choose_03;
                    testMePlease();
                } 
            }else{
                var clickedOption = e.target.value;
                choose_03 = choose_03.filter(function(i){
                    return i != clickedOption;
                })
                choose_03_array = choose_03;
                testMePlease();
            }
            myVideoPlay(choose_03);
            answer.innerHTML = `Blue feels like...  ${choose_03}.`
        });
    });
}


sendBtn.addEventListener('click', function(e){
    if(choose_03.length){
        lastDialogue();
        lastTextBox.classList.remove('hidden');
    }  
})