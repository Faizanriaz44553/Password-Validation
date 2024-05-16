function checkPassword() {
    let user = document.querySelector("#user").value
let error = document.querySelector("#error")
let CapitalLetter = false
let SmallLetter = false
let hasNumber = false;
let hasSpecialChar = false;
let specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', ';', ':', '"', "'", '<', '>', ',', '.', '?', '/'];
    if (user.trim() === "") {
        console.log("input Empity");
        error.innerHTML = ("input Empity");
        error.className = "error";
    } else {
        if (user.length > 8) {
            for (let i = 0; i < user.length; i++) {
                if (user[i] >= "A" && user[i] <= "Z") {
                    CapitalLetter = true
                };
                if (user[i] >= "a" && user[i] <= "z") {
                    SmallLetter = true
                };
                if (user[i] >= "0" && user[i] <= "9") {
                    hasNumber = true;
                } 
                if (specialChars.includes(user[i])) { 
                    hasSpecialChar = true; }
            }

            if (CapitalLetter !== true) {
                console.log("Enter a password with at least one capital letter");
                error.innerHTML =("Enter a password with at least one capital letter");
                error.className = "error";
            }
            if (SmallLetter !== true ) {
                console.log("Enter a password with at least one small letter");
                error.innerHTML = ("Enter a password with at least one small letter");
                error.className = "error";
            }
            if (hasNumber !== true) {
                console.log("Enter a password with at least one number.");
                error.innerHTML = ("Enter a password with at least one number.");
                error.className = "error";
            }
            if (hasSpecialChar !== true) {
                console.log("Enter a password with at least one special charector.");
                error.innerHTML = ("Enter a password with at least one special charector.");
                error.className = "error";
            }
            if (CapitalLetter && SmallLetter && hasNumber && hasSpecialChar) {
                console.log("Correct Password");
                error.innerHTML = ("Correct Password");
                error.className = "succes";
            }
        }
        else {
            console.log("please atleast 8 charector valid");
            error.innerHTML = ("please atleast 8 charector valid");
            error.className = "error";
        }
    }
}


const Password = document.querySelector("#user");
const Checkbox = document.querySelector("#show");


Checkbox.addEventListener('click',function(){
  const type =Password.getAttribute("type")=== "password" ? "text" : "password";
  Password.setAttribute("type",type);
});