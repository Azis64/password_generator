var generatePasswordButton = document.querySelectorAll(".button")[0];
var passwordLength = document.getElementById("Password");

var displayBox = document.getElementsByClassName("box")[0];
var checkboxes = document.querySelectorAll("input[type=checkbox]");
var strings = [];



generatePasswordButton.addEventListener("click", function(){
    passwordLength = Number(passwordLength.value);

    if(passwordLength==0){
        displayBox.innerHTML = "Please input the password length!"
    }
    displayBox.innerHTML = passwordLength;
    console.log(passwordLength);

})

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

function randomGenerator(){
    const selectedIndex = Math.floor(Math.random()*strings.length);   
    const selectedElement = Math.floor(Math.random()*strings[selectedIndex].length); 
    return strings[selectedIndex][selectedElement];
}

for(var i = 0; i < 10; i++){
    console.log(randomGenerator);
}