import randomKebab from './lib/randomkebab.js'
import Recorder from './lib/recorder.js'


class Ui {
  constructor() {
    const kebab = randomKebab()
    const $ = document.querySelector
    document.querySelector('.session_name').innerHTML = kebab
    document.querySelector('.start').removeAttribute('disabled')
    document.querySelector('.start').addEventListener('click', () => {
      const $canvas = document.querySelector('canvas')
      this.recorder = new Recorder($canvas)

      document.querySelector('.welcome').style.visibility = 'hidden'
      this.recorder.startRecording()
    })

    document.querySelector('.download').addEventListener('click', () => {
      this.recorder.download(kebab)
    })

  }
  displayThankYou() {
    document.querySelector('.thankyou').style.visibility = 'visible'
    this.recorder.stopRecording()
  }
}

export default Ui
