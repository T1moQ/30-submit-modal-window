const modalContainer = document.getElementById('prompt-form-container')
const modalForm = document.getElementById('prompt-form')
const modalMess = document.getElementById('prompt-message')

modalContainer.style.display = 'none'

const title = document.createElement('h1')
title.innerHTML = 'Кликните на кнопку ниже'
document.body.append(title)

const btn = document.createElement('button')
btn.innerHTML = 'Кликните, чтобы увидеть форму'
document.body.append(btn)

const clickHandler = () => {
   modalContainer.style.display = 'block'
   modalForm.text.focus()
   document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
}

btn.addEventListener('click', clickHandler)

modalForm.onsubmit = function () {
   if (modalForm.text.value === '') {
      return false
   } else {
      alert('Вы ввели:  ' + modalForm.text.value)
   }
}

modalForm.cancel.onclick = function () {
   alert('Вы ввели: ' + null)
   modalContainer.style.display = 'none'
   document.body.style.backgroundColor = 'rgba(0, 0, 0, 0)'
   }







