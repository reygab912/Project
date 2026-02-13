showSignup();

function showSignup(){
    document.getElementById("signupPage").style.display="flex";
    document.getElementById("loginPage").style.display="none";
    document.getElementById("successPage").style.display="none";
}

function showLogin(){
    document.getElementById("signupPage").style.display="none";
    document.getElementById("loginPage").style.display="flex";
    document.getElementById("successPage").style.display="none";
}

function showSuccess(){
    document.getElementById("signupPage").style.display="none";
    document.getElementById("loginPage").style.display="none";
    document.getElementById("successPage").style.display="flex";
}

document.getElementById("signupForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = document.getElementById("signupUser").value;
    const email = document.getElementById("signupEmail").value;
    const pass = document.getElementById("signupPass").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);
    localStorage.setItem("username", user);

    showSuccess();
});

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;

    const savedEmail = localStorage.getItem("email");
    const savedPass = localStorage.getItem("password");

    if(email === savedEmail && pass === savedPass){
        alert("Login Successful! Welcome to Campus Cart 🎉");
    }else{
        alert("Invalid Email or Password");
    }
});