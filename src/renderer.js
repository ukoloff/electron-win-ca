const ca = require('win-ca')
const withOut = require('without')

setTimeout(render)

function render() {
  document.body.innerHTML = withOut(t)(ca.all(ca.der2.txt))
}

function t(roots) {
  for (let pem of roots) {
    textarea(pem)
  }
}
