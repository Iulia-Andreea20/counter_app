let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
function increment() {

    count += 1
    countEl.innerHTML = count
}
function decrement() {
    if (count > 0) {
        count -= 1
        countEl.innerHTML = count
    }
    else {
        console.log("The counter is already 0!")
    }
}
function save() {

    saveEl.textContent += count + " - "
    //It works fine with innerHTML, but not with in innerText

    count = 0
}
// *? Implemet the hello user in the app
// *?let welcomeEL = document.getElementById("welcome-el")
// *?let username = "Andreea"
// *?let greeting = "Welcome back,"

//print text without a function, you can just use the innerHTML property
// *?welcomeEL.innerHTML = greeting + " " + username + "!"

// *?welcomeEL.innerHTML += "👋🏻"


