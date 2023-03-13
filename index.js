let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log("countEl")
console.log("saveEl")
let count = 0

function increment() {

    count = count + 1
    countEl.textContent = count
}

function save() {
   let countstr = count + " - "
   saveEl.textContent += countstr
   count = 0
   countEl.textContent = count
}



// document.getElementById("count-el").innerText = increment();