const ca = require('win-ca')
const withOut = require('without')

fetch().then(render)

function fetch() {
  var list = []
  return new Promise(resolve => {
    ca({
      async: true,
      format: ca.der2.txt,
      ondata: list,
      onend: resolve
    })
  })
    .then(_ => list)
}

function render(list) {
  document.body.innerHTML = withOut(t)(list)
}

function t(roots) {
  for (let pem of roots) {
    textarea(pem)
  }
}
