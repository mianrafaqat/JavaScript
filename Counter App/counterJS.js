'use strict'


let counter = document.getElementById('counter')
let count = 0
function increment() {
    count = count +1
    counter.innerText = count
}
let entries = document.getElementById('el-entries')
function save_fun() {
    let countStr = count + "  -  "
    entries.textContent += countStr
    counter.innerText = 0
    count = 0
}