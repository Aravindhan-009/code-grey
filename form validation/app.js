const form =document.querySelector('#form');
const username =document.querySelector('#username');
const email =document.querySelector('#email');
const password =document.querySelector('#password');
const confirmpassword =document.querySelector('#confirmpassword');
form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})
function validateInputs(){
    const usernameVal= username.value.trim()
    const emailVal= email.value.trim();
    const passwordVal= password.value.trim();
    const confirmpasswordVal= confirmpassword.value.trim();
    let success = true

    if(usernameVal===''){
        success= false;
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }
    if(emailVal==='')
    {
        success =false;
        setError(email,'email is required')
    }
    else if(!validateEmail(emailVal)){
        success= false;
        setError(email,'please enter a valid email id' )
    }
    else{
        setSuccess(email)
    }
    if (passwordVal==''){
        success= false;
        setError(password,'password id required')
    }
    else if(passwordVal.length<8){
        success=false;
        setError(password,'password must be atleast 8 character')
    }
    else{
        setSuccess(password)
    }
    if(confirmpasswordVal===''){
        success=false;
        setError(confirmpassword,'confirm password is required')
    }
    else if (confirmpasswordVal!==passwordVal){
        success=false;
        setError(confirmpassword,'password does not match')
    }
    else{
        setSuccess(confirmpassword)
    }
    return success;
}
// functions for displaying error
function setError(element,message){
const set =element.parentElement;
const errorElement= set.querySelector('.error')

errorElement.innerText=message;
set.classList.add('error')
set.classList.remove('success')
}

function setSuccess(element,message){
    const set =element.parentElement;
    const errorElement= set.querySelector('.error')

    errorElement.innerText='';
    set.classList.add('success')
    set.classList.remove('error')
    }

const validateEmail =(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

};

