import PaperApp from './paper/app.js'
import config from './config.js'
// import tpl from './assets/00.svg'
// import 'circular-std' // buggy !

const app = new PaperApp()

window.addEventListener('load', () => {
  setTimeout(() => {
    const $canvas = document.querySelector('canvas')
    console.log($canvas)
    $canvas.addEventListener('mousemove', (ev) => {
      // console.log(ev)
      app.move2(ev)
      app.move({x: ev.clientX, y: ev.clientY})
    })
    $canvas.addEventListener('mousedown', (ev) => {
      // console.log(ev)
      app.down(ev)
    })
    $canvas.addEventListener('mouseup', (ev) => {
      // console.log(ev)
      app.up(ev)
    })

    // redirect touch events
    $canvas.addEventListener('touchstart', function (e) {
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousedown', {
        x: touch.clientX,
        y: touch.clientY,
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      $canvas.dispatchEvent(mouseEvent)
    }, false)

    $canvas.addEventListener('touchend', function (e) {
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mouseup', {
        x: touch.clientX,
        y: touch.clientY,
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      $canvas.dispatchEvent(mouseEvent)
    }, false)
    $canvas.addEventListener('touchcancel', function (e) {
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mouseup', {
        x: touch.clientX,
        y: touch.clientY,
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      $canvas.dispatchEvent(mouseEvent)
    }, false)

    $canvas.addEventListener('touchmove', function (e) {
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousemove', {
        x: touch.clientX,
        y: touch.clientY,
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
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
