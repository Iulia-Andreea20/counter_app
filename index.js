let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let errorDecrementation = document.getElementById("error-dec")

function increment() {

    count += 1
    countEl.innerHTML = count
}
function decrement() {
    if (count > 0) {
        count -= 1
        countEl.innerHTML = count
    }
    else if (count == 0) {
        errorDecrementation.textContent = "You can't decrement below 0 the counter!"
    }
}
function save() {
    if (saveEl.textContent == "Previous entires: ") {
        saveEl.textContent += count
    }
    else {
        saveEl.textContent += " - " + count
    }
    //It works fine with innerHTML, but not with in innerText

    countEl.innerHTML = 0
    count = 0
}
// *? Implemet the hello user in the app
// *?let welcomeEL = document.getElementById("welcome-el")
// *?let username = "Andreea"
// *?let greeting = "Welcome back,"

//print text without a function, you can just use the innerHTML property
// *?welcomeEL.innerHTML = greeting + " " + username + "!"

// *?welcomeEL.innerHTML += "👋🏻"


