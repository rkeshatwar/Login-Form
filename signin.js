var Name = document.getElementById("Name");
var UserName = document.getElementById("UserName");
var Email = document.getElementById("Email");
var Pw = document.getElementById("Pw")

function store(){
    localStorage.setItem("Name", Name.value);
    localStorage.setItem("UserName", UserName.value);
    localStorage.setItem("Email", Email.value);
    localStorage.setItem("Pw", Pw.value);
    alert("You are Successfully Registered!!")
}

function check() {
    var SI_UserName = document.getElementById("SI_UserName").value;
    var SI_Email = document.getElementById("SI_UserName").value
    var SI_Pw = document.getElementById("SI_Pw").value;

    var storedUsername = localStorage.getItem("UserName");
    var storedEmail = localStorage.getItem("Email")
    var storedPw = localStorage.getItem("Pw");

    if (SI_UserName.length==0 || SI_Pw.length==0) {
        alert("UserName or Password shouldn't be empty")
    } else {
        if (SI_UserName !== storedUsername && SI_Email !== storedEmail || SI_Pw !== storedPw) {
            alert("Error!!! Incorrect UserName, Email Or Password")
        } else {
            alert("Logged in successfully")
            window.open("https://www.youtube.com/")
        }
    }    
}