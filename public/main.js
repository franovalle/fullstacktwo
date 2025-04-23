//using https://zellwk.com/blog/crud-express-mongodb/ as a guide for this project

const update = document.querySelector('#update-button')
update.addEventListener('click', _ =>{
  fetch('/verses', {
    method : 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name : 'Aaliyah',
      entry : 'Are you that somebody?'
    })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })

  })
})

const deleteButton = document.querySelector('#delete-button')

deleteButton.addEventListener('click', _ => {
  fetch('/verses', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Aaliyah'
    })
    
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    window.location.reload()
  })

})

const messageDiv = document.querySelector('#message')

deleteButton.addEventListener('click', _ => {
  fetch('/verses')
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

