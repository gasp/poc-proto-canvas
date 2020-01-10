import PaperApp from './paper/app.js'
import config from './config.js'

const app = new PaperApp()

window.addEventListener('load', () => {
  setTimeout(() => {
    const $canvas = document.querySelector('canvas')
    console.log($canvas)
    $canvas.addEventListener('mousemove', (ev) => {
      app.move2(ev)
      app.move({x: ev.clientX, y: ev.clientY})
    })
    $canvas.addEventListener('mousedown', (ev) => {
      app.down(ev)
    })
    $canvas.addEventListener('mouseup', (ev) => {
      console.log('up', ev)
      app.up(ev)
    })

    // redirect touch events
    $canvas.addEventListener('touchstart', (ev) => {
      const touch = ev.touches[0]
      const mouseEvent = new MouseEvent('mousedown', {
        x: touch.clientX,
        y: touch.clientY,
        clientX: touch.clientX,
        clientY: touch.clientY,
      })
      ev.preventDefault()
      $canvas.dispatchEvent(mouseEvent)
    }, false)

    $canvas.addEventListener('touchend', (ev) => {
      const mouseEvent = new MouseEvent('mouseup', ev)
      $canvas.dispatchEvent(mouseEvent)
      ev.preventDefault()
    }, false)
    $canvas.addEventListener('touchcancel', (ev) => {
      const mouseEvent = new MouseEvent('mouseup', ev)
      ev.preventDefault()
      $canvas.dispatchEvent(mouseEvent)
    }, false)

    $canvas.addEventListener('touchmove', (ev) => {
      const touch = ev.touches[0]
      const mouseEvent = new MouseEvent('mousemove', {
        x: touch.clientX,
        y: touch.clientY,
        clientX: touch.clientX,
        clientY: touch.clientY,
      })
      ev.preventDefault()
      $canvas.dispatchEvent(mouseEvent)
    }, false)


    // prevent scrolling when touching the canvas
    document.body.addEventListener('touchstart', function (e) {
      if (e.target == $canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener('touchend', function (e) {
      if (e.target == $canvas) {
        e.preventDefault();
      }
    }, false);
    document.body.addEventListener('touchmove', function (e) {
      if (e.target == $canvas) {
        e.preventDefault();
      }
    }, false);

  // wait a little before enabling
  }, 100)
})
