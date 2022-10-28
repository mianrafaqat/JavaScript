let myLeads = []
let oldLeads = []
let inputEl = document.getElementById('input-el')
const ulEl = document.getElementById('ul-el')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
let listItem = ""

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    for (let i = 0; i < leads.length; i++) {
        listItem += `<li>
        <a target = '_blank' href='${leads[i]}'> 
            ${leads[i]} 
        </a>
        </li>`
    }
    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener('dblclick', function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

let inputBtn = document.getElementById('input-btn')
inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value) 
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
// let listItem = ""
