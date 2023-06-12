var displayBox = document.getElementsByClassName("pwDisplay")[0];

var checkboxes = document.querySelectorAll("input[type=checkbox]");

var strings = [];

var generatePasswordButton = document.querySelectorAll(".generateBtn")[0];



generatePasswordButton.addEventListener("click", function(){
    // check the password length input
    var passwordLength = document.getElementById("Password");
    passwordLength = parseInt(passwordLength.value);
    console.log(passwordLength);
    if(passwordLength <= 0 || isNaN(passwordLength)){
        displayBox.innerHTML = "Please enter a number larger than 0!";
        return;
    }
    // see if any checkbox is checked
    if(strings.length === 0){
        displayBox.innerHTML = "Please check at least one box!";
        return;
    }
    // output the result password
    var resultPassword = "";
    for(var i = 0; i < passwordLength; i++){
        resultPassword += letterGenerator(); 
    }
    displayBox.innerHTML = resultPassword;

});

// for gererating the random string
for(var i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("change", function(){
        if(this.checked){
            strings.push(this.value);
        }
        else{
            const index = strings.indexOf(this.value);
            if (index > -1) { // only splice array when item is found
            strings.splice(index, 1); // 2nd parameter means remove one item only
            }
        }
    });
}

function letterGenerator(){

    const selectedIndex = Math.floor(Math.random()*strings.length);   
    
    const selectedElement = Math.floor(Math.random()*strings[selectedIndex].length); 
    return strings[selectedIndex][selectedElement];
}

