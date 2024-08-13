const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

        // <div id="password-el-1"></div>
        // <div id="password-el-2"></div>

let passwordEl1 = document.getElementById("password-el-1")
let passwordEl2 = document.getElementById("password-el-2")

let buttonEl = document.getElementById("generate-button")

buttonEl.addEventListener("click", function(){
    randomPass1 = getRandomPassword()
    randomPass2 = getRandomPassword()
    
    passwordEl1.textContent = randomPass1
    passwordEl2.textContent = randomPass2
})

function getRandomChar() {
    random_i = Math.floor(Math.random()*characters.length)
    return characters[random_i]
}


function getRandomPassword(){
    let result = ""
    for (let i = 0; i < 15; i ++) {
        result += getRandomChar()
    }
    return result;
}

