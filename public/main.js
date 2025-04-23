//using https://zellwk.com/blog/crud-express-mongodb/ as a guide for this project

//const { response } = require("express")

//note to self: using the authors github post as a guide to help debug the event listener part  

//lets try how the author did it in github 
var update = document.getElementById('update')
var deleteButton = document.getElementById('delete')

//const update = document.querySelector('#update-button')
update.addEventListener('click', _ =>{
  fetch('verses', {
    method : 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name' : 'Aaliyah',
      'entry' : 'Are you that somebody?'
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      //window.location.reload(true)//let see if this works 
    })

  })
})

//const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', function () {
  fetch('verses', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'name': 'Aaliyah'
    })
    
  }).then(function (response){
    window.location.reload()
  })

})

const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
  fetch('verses')
  .then(res => {
    if (res.ok) return res.json()
  })
    .then(response => {
      if (response === 'No quote to delete') {
        messageDiv.textContent = 'No More Aaliyah Lyrics'
      } else {
        window.location.reload(true)
      }
    })
    .catch(error => console.error(error))
})

