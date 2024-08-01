document.getElementById('pswdInputBox').addEventListener('keyup', checkPswd);

document.getElementById('pswdInputBox').addEventListener('keyup', showMsgArea);
document.getElementById('pswdInputBox').addEventListener('blur', hideMsgArea);

//make msgArea visible while focusing/typing in pswdInputBox
function showMsgArea () {
    document.getElementById('msgArea').style.visibility = 'visible';
}
// make msgArea hidden while blurring/not typing in pswdInputBox
function hideMsgArea() {
    document.getElementById('msgArea').style.visibility = 'hidden';
}
// check password with regex for length, number, lowercase, uppercase, special character
function checkPswd () {
    var pswd = document.getElementById('pswdInputBox').value;

    // Check if password has a special character
    var msgAreaPswdSC = document.getElementById('msgAreaPswdSC');
    var requiredSC = /[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?]/;
    if (pswd.match(requiredSC)) {
        msgAreaPswdSC.innerHTML = 'Your password has a special character';
        msgAreaPswdSC.className = 'text-green-300 font-bold'
    } else {
        msgAreaPswdSC.innerHTML = 'Your password does not have a special character';
        msgAreaPswdSC.className = 'text-red-500 font-bold';
    }
    // Check if password has a lowercase letter
    var msgAreaPswdLC = document.getElementById('msgAreaPswdLC');
    var requiredLC = /[a-z]/;
    if (pswd.match(requiredLC)) {
        msgAreaPswdLC.innerHTML = 'Your password has a lowercase character'
        msgAreaPswdLC.className = 'text-green-300 font-bold'
    } else {
        msgAreaPswdLC.innerHTML = 'Your password does not have a lowercase character'
        msgAreaPswdLC.className = 'text-red-500 font-bold';
    }
    // Check if password has a uppercase letter
    var msgAreaPswdUC = document.getElementById('msgAreaPswdUC');
    var requiredUC = /[A-Z]/;
    if (pswd.match(requiredUC)) {
        msgAreaPswdUC.innerHTML = 'Your password has an uppercase character'
        msgAreaPswdUC.className = 'text-green-300 font-bold'
        
    } else {
        msgAreaPswdUC.innerHTML = 'Your password does not have an uppercase character'
        msgAreaPswdUC.className = 'text-red-500 font-bold';
    }
    // Check if password has a number character
    var msgAreaPswdNC = document.getElementById('msgAreaPswdNC');
    var requiredNC = /[0-9]/;
    if (pswd.match(requiredNC)) {
        msgAreaPswdNC.innerHTML = 'Your password has a number';
        msgAreaPswdNC.className = 'text-green-300 font-bold'
    } else {
        msgAreaPswdNC.innerHTML = 'Your password does not have a number';
        msgAreaPswdNC.className = 'text-red-500 font-bold';
    }
    // Check if password is long enough
    var msgAreaPswdLen = document.getElementById('msgAreaPswdLen');
    var requiredLength = 8;
    if (pswd.length >= requiredLength) {
        msgAreaPswdLen.innerHTML = 'Your password is long enough';
        msgAreaPswdLen.className = 'text-green-300 font-bold'
    } else {
        msgAreaPswdLen.innerHTML = 'Your password is too short';
        msgAreaPswdLen.className = 'text-red-500 font-bold';
    }
}


document.getElementById('emailInputBox').addEventListener('keyup', checkEmail);

document.getElementById('emailInputBox').addEventListener('keyup', showMsgArea);
document.getElementById('emailInputBox').addEventListener('blur', hideMsgArea);

// check email with regex for AT, DOT, Lenght, Format, Public
function checkEmail() {

            // check to see if there is a @ in the email input box
            // grab the text from the email input box
                var email = document.getElementById('emailInputBox').value;
            // declare the message area for the @
                var msgAreaEmailAT = document.getElementById('msgAreaEmailAT')
            // declare a variable for the @
                var requieredAT = /@/;
            // check to see if the email has the requiered variable
            if (email.match(requieredAT)) {
                    // if there is a @, print YES
                msgAreaEmailAT.innerHTML = 'Email Valid';
                msgAreaEmailAT.className = 'text-green-500 font-bold';
            } else {
                    // if there is not a @, print NO
                 msgAreaEmailAT.innerHTML = 'Email Invalid';
                 msgAreaEmailAT.className = 'text-red-500 font-bold'
                    
                }
                                        
            // check to see if there is is a . in the email input box (TLD: there is a dot = Top Level Domain)
            // declare the message area for the .
                var msgAreaEmailDot = document.getElementById('msgAreaEmailDot')
            // declare a variable for the .
                var requiredDot = /\./;
            // check to see if the email has the required variable
            if (email.match(requiredDot)) {
                    //if there is a ., print YES
                msgAreaEmailDot.innerHTML = 'Email Valid';
                msgAreaEmailDot.className = 'text-green-500 font-bold'
            } else {
                    //if there is not a ., print NO
                msgAreaEmailDot.innerHTML = 'Email Invalid';
                msgAreaEmailDot.className = 'text-red-500 font-bold';
            }
                    
            // check to see if there is a length
            // declare the message area for the length
                var msgAreaEmailLength = document.getElementById('msgAreaEmailLength')
            // declare a variable for the length
                var requiredLength = 6;
            // check to see if the email has the required variable
            if (email.length >= requiredLength) {
                    //if it is >= 6, print YES
                    msgAreaEmailLength.innerHTML = 'Email Valid';
                    msgAreaEmailLength.className = 'text-green-500 font-bold'
            } else {
                    //if it is no >= 6, print NO
                    msgAreaEmailLength.innerHTML = ' Email Invalid';
                    msgAreaEmailLength.className = 'text-red-500 font-bold';
                }
           
            // check to see if there isn't a gmail, yahoo, hotmail, outlook
            // declare the message area for Public email
                var msgAreaEmailPublic = document.getElementById('msgAreaEmailPublic')
            // declare a variable being Public
                var publicEmail = /gmail|yahoo|hotmail|outlook/;
            // check to see if the email has the required variable
               if (email.match(publicEmail)) {
                       //if it is Public, go to the m print NO
                       msgAreaEmailPublic.innerHTML = 'Email Invalid';
                       msgAreaEmailPublic.className = 'text-red-500 font-bold'
               } else {
                        //if it is not Public, print YES
                        msgAreaEmailPublic.innerHTML = 'Email Valid';
                        msgAreaEmailPublic.className = 'text-green-500 font-bold';
                   } 
   

        }
