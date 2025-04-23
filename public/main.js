//using https://zellwk.com/blog/crud-express-mongodb/ as a guide for this project
//the click events were not working and use the authors updated post, to see how to fix error https://github.com/zellwk/crud-express-mongo/blob/master/public/main.js

var update = document.getElementById('update')
update.addEventListener('click',function(){
  fetch('/verses', {
    method : 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name' : 'Aaliyah',
      'entry' : 'Are you that somebody?'
    })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)
    })

  })
})

deleteButton.addEventListener('click', _ => {
  fetch('/verses', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      'name': 'Aaliyah'
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

