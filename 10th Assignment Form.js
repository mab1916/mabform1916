function SubMit() {
// UserId
    var userId = document.getElementById("userId").value;
    var userIdOutput = "";
    if (userId.length < 5 || userId.length > 12) {
        userIdOutput = userIdOutput + "Please Enter Character Between 5 to 12";
    }
    document.getElementById("userIdNote").innerHTML = userIdOutput;
// UserPassword
    var UserPassword = document.getElementById("UserPassword").value;
    var UserPasswordOutput = "";
    if (UserPassword.length < 7 || UserPassword.length > 12) {
        UserPasswordOutput = UserPasswordOutput + "Please Enter Character Between 7 to 12";
    }
    document.getElementById("userPasswordNote").innerHTML = UserPasswordOutput;
// UserGender
    var genderOutput = "";
    if ( document.getElementById("male").checked === true && document.getElementById("female").checked === true ) {
        genderOutput = genderOutput + "Please Select only one option";
    } else if (document.getElementById("male").checked === false && document.getElementById("female").checked === false){
        genderOutput = genderOutput + "Please Select a option";
    }
    document.getElementById("genderNote").innerHTML = genderOutput;
// UserLanguage
    var LanguageOutput = "";
    if ( document.getElementById("English").checked === true && document.getElementById("NonEnglish").checked === true ) {
        LanguageOutput = LanguageOutput + "Please Select only one Option";
    } else if (document.getElementById("English").checked === false && document.getElementById("NonEnglish").checked === false){
        LanguageOutput = LanguageOutput + "Please Select a Option";
    }
    document.getElementById("languageNote").innerHTML = LanguageOutput;
}