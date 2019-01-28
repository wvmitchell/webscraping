var Nightmare = require('nightmare')
var nightmare = Nightmare({ show: true })

nightmare
  .goto('https://alumni.turing.io')
  .type('input.form-control.filter-search', 'Denver') 
  .scrollTo(200, 0)
  .wait(6000)
  .evaluate(function() {
    const nameNodes = document.querySelectorAll('h3.field-content.thin')
    const list = [].slice.call(nameNodes)
    return list.map(node => {
      return node.innerText
    })
  })
  .end()
  .then(function(result) {
    console.log(`Result: ${JSON.stringify(result)}`)
  })
  .catch(function(error) {
    console.log(error)
  })
