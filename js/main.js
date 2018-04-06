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

 function isEmailAddress(s){
    return s.search(/.+@.+\.[A-Za-z][A-Za-z][A-Za-z]/) >= 0;
 }

 //register button in Register Modal 
 function register(){
    if(Array.prototype.every.call(document.querySelectorAll('#register input'), input => input.validity.valid)){
       swal("Congrats!", " You have registered Full Stack Day!", "success");
    }else{
       swal ( "Oops" ,  "Please fill in required fields!" ,  "error" );
    }

}

