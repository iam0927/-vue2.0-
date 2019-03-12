export default {
  gai (color) {
    let str = '.ivu-btn{ background: ' + color + '; color: #fff}'
    if (document.querySelector('#theme')) {
      if (document.querySelector('#theme').styleSheet) {
        document.querySelector('#theme').styleSheet.cssText = str
      } else {
        document.querySelector('#theme').innerHTML = str
      }
    } else {
      let nod = document.createElement('style')
      nod.setAttribute('id', 'theme')
      nod.type = 'text/css'
      if (nod.styleSheet) {
        nod.styleSheet.cssText = str
      } else {
        nod.innerHTML = str
      }
      document.getElementsByTagName('head')[0].appendChild(nod)
    }
  }

}
