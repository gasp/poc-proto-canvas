import PaperApp from './paper/app.js'
import config from './config.js'
// import tpl from './assets/00.svg'
// import 'circular-std' // buggy !

const app = new PaperApp()

window.addEventListener('load', () => {
  setTimeout(() => {
    document.addEventListener('mousemove', (ev) => {
      // console.log(ev)
      app.move({x: ev.clientX, y: ev.clientY})
    })
  }, 100)
})
