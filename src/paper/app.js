import paper, { Group, Layer, Point, PointText, Path, Raster, Rectangle, Size } from 'paper'
// import { TweenMax } from "gsap/TweenMax";


export default class PaperApp {
  constructor() {
    this.cursor = {
      drag: false,
      start: [0,0],
      curr: [100,100],
    }

    this.scene = 'home'

    // relative distance between start drag and element
    this.xrel = 0


    this.init()
    this.draw()
  }

  init() {
    this.canvas = document.createElement('canvas')
    this.canvas.id = 'paper-canvas'
    this.canvas.width = 375
    this.canvas.height = 812
    document.body.appendChild(this.canvas)

    paper.setup(this.canvas)
    // DEBUG: this can be useful
    // window.paper = paper;

    this.conf = {
      nbsegments: 15,
      distance: 50,
    }
  }
  draw() {
    const start = {
      x: 100,
      y: 300,
    }
    const radius = new Size(6, 6);




    const loginLayer = new Layer()


    // const head = new Path()
    // head.add(new Point(start)) // nose
    // head.add(new Point(start.x - 100, start.y - 100))
    // head.add(new Point(start.x - 100, start.y + 100))
    // head.closed = true
    // head.fillColor = '#000'
    // head.fullySelected = true
    // this.head = head
    //
    // const tail = new Path()
    // for (let i = 0; i < this.conf.nbsegments; i++) {
    //   tail.add(new Point(start.x + this.conf.distance * i, start.y))
    // }
    // tail.strokeWidth = 10
    // tail.fullySelected = true
    // tail.strokeColor = '#000'
    //
    // this.tail = tail
    //
    // const nose = new Path.Circle(new Point(100, 100), 10)
    // nose.fillColor = 'red'
    // this.nose = nose

    const debugText = new PointText(new Point(22, 10))
    debugText.justification = 'left'
    debugText.fillColor = 'black'
    debugText.content = 'mouse position'
    this.debugText = debugText

    const debugLine = new Path.Line(
      new Point(this.cursor.start),
      new Point(this.cursor.curr),
    )
    debugLine.strokeColor = '#00f'
    debugLine.strokeWidth = 0
    // debugLine.selected = true
    this.debugLine = debugLine

    paper.view.draw()
  }

  enlapsed() {} // timeline
}
