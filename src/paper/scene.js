import paper, { Group, Layer, Point, PointText, Path, Raster, Rectangle, Size } from 'paper'
import PaperApp from './app.js'
import Scenes from './scenes/index.js'


class PaperScene extends PaperApp {
  constructor() {
    super()
    this.scenes =  [
      'home',
      'explore',
    ]
    this.idx = 0
    this.drawScene()
  }

  setScene(name) {
    const idx = this.scenes.indexOf(name)
    if(idx < 0) throw new Error(`there is no such scene as ${name}`)
    this.idx = idx
  }

  getScene() {
    return this.scenes[this.idx]
  }

  drawScene() { // rename to draw :-)
    const scene = this.scenes[this.idx]
    console.log(`drawing ${scene}`)
    Scenes[scene](this)
  }


  down(ev) {
    if (false && this.getScene() === 'explore' && ev.y > 300 && ev.y < 570) {
      this.cursor.drag = true
      this.cursor.start = [ev.x, ev.y]
      this.cursor.curr = [ev.x, ev.y]
      this.debugLine.segments[0].point = new Point(this.cursor.start)
      this.debugLine.strokeWidth = 3
      // console.log('cp', this.cities.position.x, ev.x, this.cities.position.x - ev.x)
      this.xrel = this.cities.position.x - ev.x
    }

  }

  up(ev) {
    this.cursor.drag = false
    this.debugLine.strokeWidth = 0


    // handle click in first scene
    if (this.getScene() === 'home') {
      // if (ev.y > 1 && ev.y < 650 ) {
        console.log('clicked', ev.x, ev.y)
        this.setScene('explore')
        this.drawScene()
      // }
    }

    if (this.getScene() === 'explore') {
      // if there is very little drag, then it is a click
      const xdistance = Math.abs(this.cursor.start[0] - this.cursor.curr[0])
      const ydistance = Math.abs(this.cursor.start[1] - this.cursor.curr[1])
      if (xdistance < 20 && ydistance < 20) {
        console.log('go to appartments list')
      }

    }

    this.debugText.content = `
      x: ${this.cursor.curr[0]} y: ${this.cursor.curr[1]} |
      scroll: ${/*this.cities.position*/ true} |
      cursor: ${this.cursor.drag? 'down' : 'up'}
    `
  }

  // TODO: rename zat
  move() {}
  move2(ev) {
    if (this.cursor.drag) {
      this.cursor.curr = [ev.x, ev.y]
      this.debugLine.segments[1].point = new Point(this.cursor.curr)
    }
    // this.debugLine.segments[1].point = new Point(ev.x, ev.y)
    this.debugText.content = `
      x: ${ev.x} y: ${ev.y} |
      scroll: ${/*this.cities.position*/true} |
      cursor: ${this.cursor.drag? 'down' : 'up'}
    `

    if (this.getScene() === 'explore') {
      if (this.cursor.drag) {
        // fix boundaries
        this.cities.position = [
          Math.max(
            Math.min(
              ev.x + this.xrel,
              255,
            ),
            -155,
          ),
          this.cities.position.y
        ]
      }
    }

  }

}

export default PaperScene
