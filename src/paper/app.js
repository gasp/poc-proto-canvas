import paper, { Group, Layer, Point, PointText, Path, Raster, Rectangle, Size } from 'paper'

export default class PaperApp {
  constructor() {
    this.cursor = {
      drag: false,
      start: [0,0],
      curr: [100,100],
    }

    this.init()
    this.draw()
  }

  init() {
    this.canvas = document.createElement('canvas')
    this.canvas.id = 'paper-canvas'
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

    // home
    const ldot = new Path.Circle(new Point(80, 212), 11)
    ldot.fillColor = '#6328E9'
    ldot.selected = true

    const larc = new Path.Circle(new Point(100, 192), 23)
    larc.closed = false
    larc.strokeColor = '#6328E9'
    larc.strokeWidth = 17
    larc.selected = true
    // larc.rotate(90)

    const logoName = new PointText([140, 220])
    logoName.content = 'Bridger';
    logoName.style = {
      fontFamily: 'CircularStd',
      fontWeight: 800,
      fontSize: 48,
      fillColor: 'red',
      justification: 'left',
    }
    logoName.scale(.97, 1)
    logoName.selected = true

    const tagLine = new PointText([187.5, 260])
    tagLine.content = 'Get ready for your first trip';
    tagLine.style = {
      fontFamily: 'CircularStd',
      fontWeight: 400,
      fontSize: 20,
      fillColor: 'red',
      justification: 'center',
    }
    tagLine.selected = true

    const signupRect = new Rectangle(new Point(22, 512), new Point(22 + 331, 512 + 60));
    const signupButton = new Path.Rectangle(signupRect, radius);
    signupButton.fillColor = '#6328E9';
    signupButton.selected = true

    const signupText = new PointText([187.5, 549])
    signupText.content = 'Sign Up to Bridger';
    signupText.style = {
      fontFamily: 'CircularStd',
      fontWeight: 400,
      fontSize: 17,
      fillColor: 'red',
      justification: 'center',
    }
    signupText.selected = true

    const loginRect = new Rectangle(new Point(22, 588), new Point(22 + 331, 588 + 60))
    const loginButton = new Path.Rectangle(loginRect, radius)
    loginButton.fillColor = '#E0D4FB'
    loginButton.selected = true

    const loginText = new PointText([187.5, 625])
    loginText.content = 'Log In'
    loginText.style = {
      fontFamily: 'CircularStd',
      fontWeight: 400,
      fontSize: 17,
      fillColor: 'red',
      justification: 'center',
    }
    loginText.selected = true

    const copyText = new PointText([187.5, 700])
    copyText.content = 'This prototype belongs entirely to Maze.design'
    copyText.style = {
      fontFamily: 'CircularStd',
      fontWeight: 400,
      fontSize: 14,
      fillColor: 'red',
      justification: 'center',
    }
    copyText.selected = true


    const homeLayer = new Layer({
      children: [
        ldot,
        larc,
        logoName,
        tagLine,
        signupButton,
        signupText,
        loginButton,
        loginText,
        copyText,
      ]
    })

    // hiding it
    homeLayer.visible = false
    this.homeLayer = homeLayer


    const loginLayer = new Layer()

    // explore

    const burger = new Group([
      new Path({segments: [[24, 45], [42, 45]]}),
      new Path({segments: [[24, 52], [42, 52]]}),
      new Path({segments: [[24, 59], [33, 59]]}),
    ])
    burger.strokeColor = '#ff0000'
    burger.strokeWidth = 2
    burger.strokeCap = 'round'

    const search = new Group([
      (() => {
        const exploreText = new PointText(new Point(22, 122))
        exploreText.style = {
          fontFamily: 'CircularStd',
          fontWeight: 400,
          fontSize: 16,
          fillColor: 'red',
          justification: 'left',
        }
        exploreText.content = 'Explore appartments in'
        return exploreText
      })(),
      (() => {
        const placeHolderText = new PointText(new Point(22, 160))
        placeHolderText.style = {
          fontFamily: 'CircularStd',
          fontWeight: 400,
          fontSize: 32,
          fillColor: 'red',
          justification: 'left',
          opacity: .1
        }
        placeHolderText.content = 'Madrid, ES'
        return placeHolderText
      })(),
      // magnifying glass
      new Group(
        (() => {
          const r = new Path.Circle(new Point(340, 150), 10)
          r.strokeWidth = 2
          r.strokeColor = '#000'
          return r
        })(),
        (() => {
          const ln = new Path.Line(new Point(346, 157), new Point(350, 163))
          ln.strokeColor = '#000'
          ln.strokeWidth = 2
          // ln.opacity = .1
          return ln
        })(),
      ),
      // line above
      (() => {
        const lineAbove = new Path.Line(new Point(22, 184), new Point(354, 184))
        lineAbove.strokeColor = '#000'
        lineAbove.opacity = .1
        return lineAbove
      })(),
      // filters
      new Group(
        // date
        new Group(
          (() => {
            const rect = new Rectangle(
              new Point(22, 204),
              new Point(22 + 80, 204 + 30)
            )
            const fil = new Path.Rectangle(rect, radius)
            fil.fillColor = '#efeafd'
            return fil
          })(),
          (() => {
            const pad = 20
            const tex = new PointText(new Point(22 + 40, 204 + pad))
            tex.style = {
              fontFamily: 'Sailec, arial',
              fontWeight: 400,
              fontSize: 16,
              fillColor: '#6328E9',
              justification: 'center',
              opacity: .1
            }
            tex.content = 'Apr 22-24'
            return tex
          })(),
        ),
        // ppl
        new Group(
          (() => {
            const rect = new Rectangle(
              new Point(110, 204),
              new Point(110 + 80, 204 + 30)
            )
            const fil = new Path.Rectangle(rect, radius)
            fil.fillColor = '#efeafd'
            return fil
          })(),
          (() => {
            const pad = 20
            const tex = new PointText(new Point(110 + 40, 204 + pad))
            tex.style = {
              fontFamily: 'Sailec, arial',
              fontWeight: 400,
              fontSize: 16,
              fillColor: '#6328E9',
              justification: 'center',
              opacity: .1
            }
            tex.content = '2 People'
            return tex
          })(),
        ),
        // price
        new Group(
          (() => {
            const rect = new Rectangle(
              new Point(200, 204),
              new Point(200 + 80, 204 + 30)
            )
            const fil = new Path.Rectangle(rect, radius)
            fil.fillColor = '#efeafd'
            return fil
          })(),
          (() => {
            const pad = 20
            const tex = new PointText(new Point(200 + 40, 204 + pad))
            tex.style = {
              fontFamily: 'Sailec, arial',
              fontWeight: 400,
              fontSize: 16,
              fillColor: '#6328E9',
              justification: 'center',
              opacity: .1
            }
            tex.content = '< £100'
            return tex
          })(),
        ),
      ),
    ])
    search.selected = true


    const satisLine = (x, y, note = 5) => {
      const dots = []
      for (let i = 0; i < 5; i++) {
        const dot = new Path.Circle(new Point(x + i * 12, y), 4)
        dot.fillColor = i < note ? '#FFAD28' : '#D8D8D8'
        dots.push(dot)
      }
      return new Group(dots)
    }

    const madThumb = new Raster('/assets/madrid.png')
    madThumb.scale(.25)
    madThumb.position = new Point(95, 390)

    const lonThumb = new Raster('/assets/london.png')
    lonThumb.scale(.25)
    lonThumb.position = new Point(255, 408)


    const berThumb = new Raster('/assets/berlin.png')
    berThumb.scale(.20)
    berThumb.position = new Point(415, 370)

    const city = (p, title, appts, rank, price) => {
      return new Group([
        // title
        (() => {
          const tit = new PointText(p)
          tit.style = {
            fontFamily: 'CircularStd',
            fontWeight: 400,
            fontSize: 18,
            fillColor: 'red',
            justification: 'left',
          }
          tit.content = title
          return tit
        })(),
        // appts
        (() => {
          const app = new PointText([p.x, p.y + 20])
          app.style = {
            fontFamily: 'CircularStd',
            fontWeight: 400,
            fontSize: 12,
            fillColor: '#999',
            justification: 'left',
          }
          app.content = `${appts}+ Appartments`
          return app
        })(),
        // price
        (() => {
          const pri = new PointText([p.x + 65, p.y + 40])
          pri.style = {
            fontFamily: 'CircularStd',
            fontWeight: 400,
            fontSize: 12,
            fillColor: '#999',
            justification: 'left',
          }
          pri.content = price
          return pri
        })(),
        satisLine(p.x, p.y+38, rank),
      ])
    }

    const cities = new Group([
      // madrid
      new Group([
        madThumb,
        city(new Point(27, 500), 'Madrid, ES', '2,000', 4, '$ $'),
      ]),
      // london
      new Group([
        lonThumb,
        city(new Point(180, 530), 'London, UK', '3,000', 5, '$ $ $'),

      ]),
      // berlin
      new Group([
        berThumb,
        city(new Point(340, 450), 'Berlin DE', '1,500', 3, '$'),
      ])

    ])

    const popular = new Layer([
      (() => {
        const title = new PointText([22, 290])
        title.content = 'Popular places'
        title.style = {
          fontFamily: 'Sailec, arial',
          fontWeight: 400,
          fontSize: 16,
          fillColor: 'red',
          justification: 'left',
        }
        return title
      })(),
      (() => {
        const exp = new PointText([354, 290])
        exp.content = 'Explore'
        exp.style = {
          fontFamily: 'Sailec, arial',
          fontWeight: 400,
          fontSize: 16,
          fillColor: '#6328E9',
          justification: 'right',
        }
        return exp
      })(),
      // this slider might be independant... wait and see
      cities,
    ])

    popular.selected = true


    const exploreLayer = new Layer([
      burger,
      search,
      popular
    ])
    exploreLayer.visible = true
    this.exploreLayer = exploreLayer


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

    const debugText = new PointText(new Point(300, 10))
    debugText.justification = 'center';
    debugText.fillColor = 'black';
    debugText.content = 'mouse position'
    this.debugText = debugText

    const debugLine = new Path.Line(
      new Point(this.cursor.start),
      new Point(this.cursor.curr),
    )
    debugLine.strokeColor = '#00f'
    debugLine.strokeWidth = 0
    debugLine.selected = true
    this.debugLine = debugLine

    paper.view.draw()
  }

  enlapsed() {} // timeline

  down(ev) {
    this.cursor.drag = true
    this.cursor.start = [ev.x, ev.y]
    this.debugLine.segments[0].point = new Point(this.cursor.start)
    this.debugLine.strokeWidth = 3
  }

  up(ev) {
    this.cursor.drag = false
    this.debugLine.strokeWidth = 0
  }

  move2(ev) {
    if (this.cursor.drag) {
      this.cursor.curr = [ev.x, ev.y]
      this.debugLine.segments[1].point = new Point(this.cursor.curr)
    }
    // this.debugLine.segments[1].point = new Point(ev.x, ev.y)
  }

  move({ x, y }) { // rename cursor
    this.debugText.content = `x: ${x} y: ${y} | scroll: ${this.homeLayer.position} | cursor: ${this.cursor.drag? 'down' : 'up'}`

    // how to scroll ?
    // this.homeLayer.position = new Point(x, y)

    // this.tail.segments[0].point = new Point(x, y)
    //
    // for (let i = 0; i < this.conf.nbsegments - 1; i++) {
    //   const segment = this.tail.segments[i]
    //   const nextSegment = this.tail.segments[i + 1]
    //
    //   const vector = new paper.Point(
    //     segment.point.x - nextSegment.point.x,
    //     segment.point.y - nextSegment.point.y,
    //   )
    //
    //   vector.length = this.conf.distance // 50
    //
    //   nextSegment.point.x = segment.point.x - vector.x
    //   nextSegment.point.y = segment.point.y - vector.y
    // }
    //
    // const headVector = new paper.Point(
    //   this.tail.segments[0].point.x - this.tail.segments[1].point.x,
    //   this.tail.segments[0].point.y - this.tail.segments[1].point.y,
    // )
    //
    // this.head.segments[0].point = new Point(x + headVector.x, y + headVector.y)
    //
    // this.head.segments[1].point = new Point(
    //   x +
    //     (headVector > 0
    //       ? Math.sin(headVector.angleInRadians) * 30
    //       : Math.sin(headVector.angleInRadians) * -30),
    //   y +
    //     (headVector > 0
    //       ? Math.cos(headVector.angleInRadians) * -30
    //       : Math.cos(headVector.angleInRadians) * 30),
    // )
    //
    // this.head.segments[2].point = new Point(
    //   x +
    //     (headVector > 0
    //       ? Math.sin(headVector.angleInRadians) * -30
    //       : Math.sin(headVector.angleInRadians) * 30),
    //   y +
    //     (headVector > 0
    //       ? Math.cos(headVector.angleInRadians) * 30
    //       : Math.cos(headVector.angleInRadians) * -30),
    // )

    // this.tail.smooth('continuous')
  }
}
