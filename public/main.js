//using https://zellwk.com/blog/crud-express-mongodb/ as a guide for this project

const update = document.querySelector('#update-button')
update.addEventListener('click', _ =>{
  fetch('/verses', {
    method : 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name : 'God',
      entry : 'No matter how you feel, I am with you and love you'
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
  fetch('/verse', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'me'
    })
    
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    window.location.reload()
  })

})


