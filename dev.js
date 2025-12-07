// get values from form
const Name = document.getElementById('input-name').value.trim();
const email = document.getElementById('inout-email').value.trim();
const password = document.getElementById('input-password').value.trim();
const confirmPassword = document.getElementById('confirm-password').value.trim();

if(password !== confirmPassword){
    console.log('password do not match!');
    return;
}

if(password.length < 8){
    console.log('password must be at least 8 character');
    return;
}

// create a user object 
const newUser = {
    id: Date.now(),
    name: Name,
    email: email,
    password: password,
    signupDate: new Date().toLocaleString()
};

//get existing data from local string 
let user = [];
const storeData = localStorage.getItem('userData');
