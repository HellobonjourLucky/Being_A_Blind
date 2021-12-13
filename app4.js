function lastDisplay(){
    body.style.cssText = `
        transition: 2s;
        background-color: #000;
    `;
    conversation.style.cssText = `
        transition: 2s;
        display: none;
    `;
}

function lastText(){
    lastTextBox.innerHTML= `<p class="fromB">
    My friend told me that blue is like.. <br/>
    <strong>${choose_01}</strong>,<br /> 
    <strong>${choose_02}</strong> <br />
    and <br /> 
    <strong>${choose_03}</strong>.<br />
    <br />
    But I still don't get what blue is.
    </p>`; 
}

function lastDialogue(){
    setTimeout(lastDisplay, 2000);
    setTimeout(lastText, 4000);
}

