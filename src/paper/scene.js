import paper, { Group, Layer, Point, PointText, Path, Raster, Rectangle, Size } from 'paper'
import PaperApp from './app.js'
import Scenes from './scenes/index.js'

import Background from './components/background.js'

class PaperScene extends PaperApp {
  constructor() {
    super()
    this.scenes =  Object.keys(Scenes) // TODO: remove this useless array
    this.scenesLayers = {}
    this.scenesInteractions = {}
    this.idx = 0 // force scene 2 (list)

    this.populate()
    this.drawScene()

  }

  setCallback(cb) {
    this.callback = cb
  }

  setScene(name) {
    const idx = this.scenes.indexOf(name)
    if(idx < 0) throw new Error(`there is no such scene as ${name}`)
    this.idx = idx
  }

  getScene() {
    return this.scenes[this.idx]
  }

  populate() {
    Background()
    this.scenes.forEach(sc => {
      const scene = Scenes[sc](this)
      this.scenesLayers[sc] = scene.layer()
      this.scenesInteractions[sc] = scene.interactions
    })
  }

  drawScene() { // rename to draw :-)

    this.scenes.forEach((sc, i) => {
      console.log(sc, this.scenesLayers[sc])
      this.scenesLayers[sc].visible = i === this.idx
    })
  }

  pipeInteraction(type, ev, that) {
    // patch this interaction to the scene interactions
    return this.scenesInteractions[this.getScene()][type](ev, that)
  }

  down(ev) {
    this.cursor.drag = true // this may problematic on drag start outside a draggable zone
    this.cursor.start = [ev.x, ev.y]
    this.cursor.curr = [ev.x, ev.y]
    this.pipeInteraction('down', ev, this)
  }

  up(ev) {
    this.cursor.drag = false
    this.debugText.content = `
      x: ${this.cursor.curr[0]} y: ${this.cursor.curr[1]} |
      scroll: ${/*this.cities.position*/ true} |
      cursor: ${this.cursor.drag? 'down' : 'up'}
    `
    this.pipeInteraction('up', ev, this)
  }

  move(ev) {
    this.cursor.curr = [ev.x, ev.y]

    // this.debugLine.segments[1].point = new Point(ev.x, ev.y)
    this.debugText.content = `
      x: ${ev.x} y: ${ev.y} |
      scroll: ${/*this.cities.position*/true} |
      cursor: ${this.cursor.drag? 'down' : 'up'}
    `
    this.pipeInteraction('move', ev, this)
  }

}

export default PaperScene
