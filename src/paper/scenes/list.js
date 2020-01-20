import paper, { Group, Layer, Point, PointText, Path, Raster, Rectangle, Size } from 'paper'

import Burger from '../components/burger.js'

const list = that  => ({
  layer: () => {
    // this is a component
    const radius = new Size(6, 6)

    const burger = Burger()
    // // this is a component
    // const burger = new Group([
    //   new Path({segments: [[24, 45], [42, 45]]}),
    //   new Path({segments: [[24, 52], [42, 52]]}),
    //   new Path({segments: [[24, 59], [33, 59]]}),
    // ])
    // burger.strokeColor = '#ff0000'
    // burger.strokeWidth = 2
    // burger.strokeCap = 'round'

    const search = new Group([
      (() => {
        const exploreText = new PointText(new Point(22, 122))
        exploreText.style = {
          fontFamily: 'CircularStd',
          fontWeight: 400,
          fontSize: 16,
          fillColor: '#7f7f7f',
          justification: 'left',
        }
        exploreText.content = 'Best appartments in'
        return exploreText
      })(),
      (() => {
        const placeHolderText = new PointText(new Point(22, 160))
        placeHolderText.style = {
          fontFamily: 'CircularStd',
          fontWeight: 600,
          fontSize: 32,
          fillColor: 'red',
          justification: 'left',
          opacity: 1
        }
        placeHolderText.content = 'London, UK'
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
        // city center
        new Group(
          (() => {
            const rect = new Rectangle(
              new Point(290, 204),
              new Point(290 + 90, 204 + 30)
            )
            const fil = new Path.Rectangle(rect, radius)
            fil.fillColor = '#efeafd'
            return fil
          })(),
          (() => {
            const pad = 20
            const tex = new PointText(new Point(300 + 40, 204 + pad))
            tex.style = {
              fontFamily: 'Sailec, arial',
              fontWeight: 400,
              fontSize: 16,
              fillColor: '#6328E9',
              justification: 'center',
              opacity: .1
            }
            tex.content = 'City Center'
            return tex
          })(),
        ),
      ),
    ])
    search.selected = false
    that.search = search

    const satisLine = (x, y, note = 5) => {
      const dots = []
      for (let i = 0; i < 5; i++) {
        const dot = new Path.Circle(new Point(x + i * 12, y), 4)
        dot.fillColor = i < note ? '#FFAD28' : '#D8D8D8'
        dots.push(dot)
      }
      return new Group(dots)
    }

    const annaThumb = new Raster('/assets/list_anna.png')
    annaThumb.scale(.25)
    annaThumb.position = new Point(190, 390)

    const condoThumb = new Raster('/assets/list_condo.png')
    condoThumb.scale(.25)
    condoThumb.position = new Point(190, 720)

    const appartment = (p, title, addr, rank, price) => {
      return new Group([
        // title
        (() => {
          const tit = new PointText(p)
          tit.style = {
            fontFamily: 'CircularStd',
            fontWeight: 600,
            fontSize: 20,
            fillColor: 'red',
            justification: 'left',
          }
          tit.content = title
          return tit
        })(),
        // address
        (() => {
          const app = new PointText([p.x, p.y + 50])
          app.style = {
            fontFamily: 'CircularStd',
            fontWeight: 400,
            fontSize: 12,
            fillColor: '#999',
            justification: 'left',
          }
          app.content = addr
          return app
        })(),
        // price
        (() => {
          const pri = new PointText([p.x, p.y + 90])
          pri.style = {
            fontFamily: 'CircularStd',
            fontWeight: 400,
            fontSize: 20,
            fillColor: '#000',
            justification: 'left',
          }
          pri.content = `£ ${price}.00 / day`
          return pri
        })(),
        satisLine(p.x + 270, p.y + 85, rank),
      ])
    }

    const appartments = new Group([
      // anna
      new Group([
        annaThumb,
        appartment(new Point(27, 510), 'Anna\'s cozy appartment in \nLondon City Center', '107 Guild Street', 4, '84'),
        condoThumb,
        appartment(new Point(27, 840), 'Superb condo on Crown Street\nwith garden', '129 Crown Street', 3, '96'),
      ]),
    ])

    const vScroll = new Layer([
      appartments,
    ])

    that.vScroll = vScroll
    vScroll.selected = false


    const listLayer = new Layer([
      burger,
      search,
      vScroll
    ])

    that.listLayer = listLayer
    return listLayer
},
  interactions: {
    down: (ev, that) => {
      console.log({interaction: 'down', ev})
      that.debugLine.segments[0].point = new Point(that.cursor.start)
      that.debugLine.strokeWidth = 3
      // console.log('cp', that.cities.position.x, ev.x, that.cities.position.x - ev.x)
      that.yrel = that.vScroll.position.y - ev.y
    },
    move: (ev, that) => {
      if (that.cursor.drag) {
        const ypos = Math.max(
          Math.min(
            650,
            ev.y + that.yrel,
          ),
          450,
        )
        that.vScrollRatio = 1 - (ypos - 450) / (650 - 450)
        console.log({ypos, vScrollRatio: that.vScrollRatio})
        //
        that.debugLine.segments[1].point = new Point(that.cursor.curr)
        // fix boundaries
        that.vScroll.position = [
          that.vScroll.position.x,
          ypos,
        ]

        // interact with search
        that.search.children[0].position.y = 122 - 50 * that.vScrollRatio
        that.search.children[0].opacity = 1 - that.vScrollRatio

        that.search.children[1].position.y = 160 - 50 * that.vScrollRatio
        that.search.children[1].opacity = 1 - that.vScrollRatio

        that.search.children[2].opacity = 1 - Math.min(1, Math.max(0, 2 * that.vScrollRatio))
        that.search.children[3].opacity = 1 - Math.min(1, Math.max(0, 2 * that.vScrollRatio))
        that.search.children[4].opacity = 1 - Math.min(1, Math.max(0, 2 * that.vScrollRatio))


      }

    },
    up: (ev, that) => {
      console.log({interaction: 'up', ev})

      that.debugLine.strokeWidth = 0

      // if there is very little drag, then it is a click
      const xdistance = Math.abs(that.cursor.start[0] - that.cursor.curr[0])
      const ydistance = Math.abs(that.cursor.start[1] - that.cursor.curr[1])
      if (xdistance < 20 && ydistance < 20) {
        that.callback()
      }

    },
  },
})

export default list
