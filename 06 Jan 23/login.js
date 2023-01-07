let form = document.querySelector('form');
form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log('Submitted');

    let fText = document.querySelector('#fName');
    console.log(fText.value);
    if(fText.value.length < 2){
    let fMessage = document.querySelector('#firstNameError');
    fMessage.style.display = 'block';
    fMessage.innerText = '*Invalid first name';
}
else{
    let fMessage = document.querySelector('#firstNameError');
    fMessage.style.display = 'none';
}

    let fText2 = document.querySelector('#lName');
    console.log(fText2.value);
    if(fText2.value.length < 2){
    let lMessage = document.querySelector('#lastNameError');
    lMessage.style.display = 'block';
    lMessage.innerText = '*Invalid last name';
}
else{
    let lMessage = document.querySelector('#lastNameError');
    lMessage.style.display = 'none';
}

    let passwordValue = document.querySelector('#passwordId');
    console.log(passwordValue.value);
    if(passwordValue.value.length < 6){
    let pMessage = document.querySelector('#passwordError');
    pMessage.style.display = 'block';
    pMessage.innerText = '*Invalid password';
}
else{
    let pMessage = document.querySelector('#passwordError');
    pMessage.style.display = 'none';
}

    let cpasswordValue = document.querySelector('#passwordConfirm');
    console.log(cpasswordValue.value);
    if(cpasswordValue.value != passwordValue.value){
    let cpMessage = document.querySelector('#passwordConfirmError');
    cpMessage.style.display = 'block';
    cpMessage.innerText = '*Password does not match';
}
else{
    let cpMessage = document.querySelector('#passwordConfirmError');
    cpMessage.style.display = 'none';
}
});

