// javascript

const addBtn = document.getElementById('add-btn')
const deleteBtn = document.getElementById('delete-btn')
const choresListDisplay = document.getElementById('chores-list-display')
const inputEl = document.getElementById('input-el')

let myChores = []
let chorseFromLocalStorage = JSON.parse(localStorage.getItem('myChores'))

function renderChores() {
    let listItems = ''
    for (let i = 0; i < myChores.length; i++) {
        listItems += `<li>${myChores[i]}</li>`
    }
    choresListDisplay.innerHTML = listItems
}
renderChores()

function addChoreToList() {
    myChores.push(inputEl.value)
    inputEl.value = ''

    localStorage.setItem('myChores', JSON.stringify(myChores))
}

function clearChoreList() {
    localStorage.clear('choresList')
    myChores = []
    choresListDisplay.innerHTML = ``
}



addBtn.addEventListener('click', function() {
    addChoreToList()
    renderChores()
})
deleteBtn.addEventListener('click', clearChoreList)

if (chorseFromLocalStorage) {
    myChores = chorseFromLocalStorage
    renderChores()
}