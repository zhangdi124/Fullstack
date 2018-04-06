document.addEventListener('DOMContentLoaded', () => {
    var minYear = new Date().getFullYear(),
        maxYear = minYear + 19, 
        select = document.getElementById('exp-year');
    
    for (var i = minYear; i <= maxYear; i++){
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }
    
    select.value = new Date().getFullYear();

    Array.prototype.forEach.call(document.querySelectorAll('#register input'), i => {
        i.addEventListener('blur', ev => {
            ev.target.classList.add('visited');
        });
    });
});

//subscribe button 
function subscribe(){
    let email = document.getElementById('subscribeInput').value.trim();

    if(isEmailAddress(email)){
        swal("Congrats!", " You have subscribed Full Stack Day!", "success");
    }else{
        swal ( "Oops" ,  "You have to enter a valid email address!" ,  "error" );
    }
}


 //register button in Register Modal 
 function register(){
     let value = document.getElementById("#cc-num");
     if(isCreditCardNum(value)){
        swal("Congrats!", " You have registered Full Stack Day!", "success");
     }else{
        swal ( "Oops" ,  "You have to enter a valid credit card number!" ,  "error" );
     }

 }

 function isEmailAddress(s){
    return s.search(/.+@.+\.[A-Za-z][A-Za-z][A-Za-z]/) >= 0;
 }

 function isCreditCardNum(){
    let creditCardNum = document.getElementById('cc-num').value.trim();
    let visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    let mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;
    let amexpRegEx = /^(?:3[47][0-9]{13})$/;
    let isValid = false;

    if(visaRegEx.test(creditCardNum)){
        isValid = true;
    }else if (mastercardRegEx.test(creditCardNum)){
        isValid = true;
    }else if(amexpRegEx.test(creditCardNum)){
        isValid = true;
    }
 }



