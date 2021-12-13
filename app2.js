const options_02 = ["trust", "depression"];
let options_03 = [];
let choose_02 = [];



function secondDialogue(){
    optionsDiv.innerHTML = '';
    answer.innerHTML = 'And also blue is like...  ';

    options_02.forEach(option => {
        optionsDiv.innerHTML += `
            <input type="button" value=" ${option}" class="second_options ${option}">
        `;
    });

    const second_options = Array.from(document.getElementsByClassName('second_options'));

    second_options.forEach(option => {
        option.addEventListener('click', function(e){
            e.target.classList.toggle("clicked");
            if(e.target.classList.contains("clicked")){
                if(!choose_02.includes(e.target.value)){
                    choose_02.push(e.target.value); 
                    choose_02_array = choose_02;
                    testMePlease();
                } 
                // changeNoiseAmount(1500);
                
            }else{
                var clickedOption = e.target.value;
                choose_02 = choose_02.filter(function(i){
                    return i != clickedOption;
                })
                choose_02_array = choose_02;
                testMePlease();
            }
            
           

            answer.innerHTML = `And also blue is like...  ${choose_02}.`;
        });
    });

    
    const btnTrust = document.querySelector('.trust');
    btnTrust.addEventListener('click', function(e){
        if(btnTrust.classList.contains('clicked')){
            showTrust = true;
        }else{
            showTrust = false;  
        }
    })
    
    const btnDepression = document.querySelector('.depression');
    btnDepression.addEventListener('click', function(e){
        if(btnDepression.classList.contains('clicked')){
            changeNoiseAmount(1500);
        }else{
            changeNoiseAmount(0);
        }
    })
}



sendBtn.addEventListener('click', function(e){
    if(choose_02.length){
        thirdDialogue();
    }  
})