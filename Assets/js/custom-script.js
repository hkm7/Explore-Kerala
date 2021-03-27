// login variables
var phoneLogin = document.getElementById("phone-login");
var passwordLogin = document.getElementById("password-login");

var phoneLoginMsg = document.getElementById("phone-login-msg");
var passwordLoginMsg = document.getElementById("password-login-msg");

// signup variables
var phoneSignUp = document.getElementById("phone-signup");
var emailSignUp = document.getElementById("email-signup");
var passwordSignUp = document.getElementById("password-signup");
var confirmPassword = document.getElementById("confirm-password-singup");

var phoneSignupMsg = document.getElementById("phone-signup-msg");
var emailSignupMsg = document.getElementById("email-signup-msg");
var passSignupMsg = document.getElementById("password-signup-msg");
var confPassSignupMsg = document.getElementById("confirm-password-signup-msg");

//Other global variables
var phoneLoginFlag = false;
var passwordLoginFlag = false;

var phoneSignupFlag = false;
var emailSignupFlag = false;
var passwordSignupFlag = false;
var confirmPasswordSignupFlag = false;

//Data Format variables
var phoneExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var emailExp = /^([\w\.-]+)@([\w\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var passExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$/;

//***************************Value check functions - SIGN UP*******************************

// Phone Number validation
function phonevalid() {
    if (phoneExp.test(phoneSignUp.value)) {
        phoneSignupMsg.innerHTML = "Valid Phone Number.";
        phoneSignupMsg.style.color = "green";
        phoneSignupFlag = true;
        // console.log("Phone ethi");
        return true;
    } 
    else {
        phoneSignupMsg.innerHTML = "Invalid Phone Number.";
        phoneSignupMsg.style.color = "red";
        phoneSignupFlag = false
        return false;
    }
}

// E-Mail validation
function emailvalid() {
    if (emailExp.test(emailSignUp.value)) {
        emailSignupMsg.innerHTML = "Valid Email."
        emailSignupMsg.style.color = "green";
        emailSignupFlag = true;
        return true;
    } else {
        emailSignupMsg.innerHTML = "Invalid Mail.";
        emailSignupMsg.style.color = "red";
        emailSignupFlag = false;
        return false;
    }
}

// Password Validation and confirmation
function passStrength() {
    var passStrength = 0;    

    var str1 = /^(?=.{8,})$/                                        //Atleast 8 characters check
    var str2 = /^(?=.*[a-z])(?=.*[A-Z])$/                           //lowercase and uppercase check
    var str3 = /^(?=.*[0-9])(?=.*[0-9])$/                           // Numeric character check
    var str4 = /^(?=.*[!@#$%^&*])$/                                 // special character check

    if (str4.test(passwordSignUp.value)) {
        passStrength = (passStrength + 1) % 3;
        passSignupMsg.innerHTML = str[passStrength];
        passSignupMsg.style.color = color[passStrength];
        passwordSignUp.style.color = color[passStrength];
        return true;
    } else if (str3.test(passwordSignUp.value)) {
        passStrength = (passStrength + 1) % 3;
        passSignupMsg.innerHTML = str[passStrength];
        passSignupMsg.style.color = color[passStrength];
        passwordSignUp.style.color = color[passStrength];
        return true;
    } else if (str2.test(passwordSignUp.value)) {
        passStrength = (passStrength + 1) % 3;
        passSignupMsg.innerHTML = str[passStrength];
        passSignupMsg.style.color = color[passStrength];
        passwordSignUp.style.color = color[passStrength];
        return true;
    } else if (passExp.test(passwordSignUp.value)) {
        passStrength = 2;
        passSignupMsg.innerHTML = str[passStrength];
        passSignupMsg.style.color = color[passStrength];
        passwordSignUp.style.color = color[passStrength];
        return true;
    } else {
        passwordSignupFlag = false;
        passSignupMsg.innerHTML = str[passStrength];
        passSignupMsg.style.color = color[passStrength];
        passwordSignUp.style.color = color[passStrength];
        return false;
    }
}

function checkpass() {
    if (passwordSignUp.value == confirmPassword.value) {
        confirmPassword.style.color = "green";
        confPassSignupMsg.innerHTML = "Passwords match";
        confPassSignupMsg.style.color = "green";
        confirmPasswordSignupFlag = true;
        return true;
    } else {
        pass2.style.color = "red";
        confPassSignupMsg.innerHTML = "Passwords doesn't match";
        confPassSignupMsg.style.color = "red";
        confirmPasswordSignupFlag = false;
        return true;
    }
}

// SIGN UP FINAL VALIDATION
function signupCheck() {
    if (phoneSignupFlag && emailSignupFlag) {
        if (passwordSignupFlag && confirmPasswordSignupFlag) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// *********************LOGIN***********************
function loginCheck() {
    if (phoneExp.test(phoneLogin.value)) {
        if (passExp.test(passwordLogin.value)) {
            return true
        } else {
            error.innerHTML = "Invalid Credentials.Try Again"
            error.style.color = "red";
            return false;
        }
    } else {
        error.innerHTML = "Invalid Credentials.Try Again"
        error.style.color = "red";
        return false;
    }
}