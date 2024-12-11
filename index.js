const emailfield = document.getElementById("email");
const passwordField = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", ()=>{

    const emailInput = "anik.1998@gmail.com";
    const passwordInput = "banking";

    if(emailfield.value === emailInput && passwordField.value === passwordInput){
        alert("Login successful")

        window.location.href ="home.html"
    }else{
        alert("Invalid credentials");
    }
})