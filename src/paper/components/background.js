import paper, { Group, Layer, Path, Point } from 'paper'


const Background = () => {

  const whiteRectangle = new Path.Rectangle({
    point: [0, 0],
    size: [375, 812],
    strokeColor: '#ccc',
    fillColor: '#fff',
    selected: true
  })
  whiteRectangle.sendToBack();


  // this should be animated
  const left = -100
  const right = 250 // go to 350
  const bottom = 350 // go to 250 but with a sinusoidal way
  const topPolygon = new Path()
  topPolygon.strokeColor = 'black';
  topPolygon.add(new Point(left, -6));
  topPolygon.add(new Point(left, bottom));
  topPolygon.add(new Point(right, 300));
  topPolygon.add(new Point(right, -6));
  topPolygon.strokeColor = '#fff'
  topPolygon.fillColor = {
    gradient: {
      stops: [
        'rgba(99, 41, 232, 1.0)', // '#328E9',
        'rgba(233, 40, 40, 0.37)',
      ],
    },
    origin: new Point(0, 0),
    destination: new Point(300, 300),
  }
  topPolygon.opacity = .1
  topPolygon.closed = true;

  const tw = topPolygon.tween({
    'segments[0].point.x': left,
    'segments[0].point.x': left + 200,

    'segments[1].point.x': left,
    'segments[1].point.x': left + 200,

    'segments[1].point.y': bottom,
    'segments[1].point.y': bottom - 75,


    'segments[2].point.x': right,
    'segments[2].point.x': right + 200,

    'segments[3].point.x': right,
    'segments[3].point.x': right + 200,
  }, {
    // easing: 'easeInOutCubic',
    duration: 30000,
  });

  tw.then(() => {
    topPolygon.tween({
      'segments[0].point.x': left + 200,
      'segments[0].point.x': left,


      'segments[1].point.x': left + 200,
      'segments[1].point.x': left,

      'segments[1].point.y': bottom - 75,
      'segments[1].point.y': bottom,


      'segments[2].point.x': right + 200,
      'segments[2].point.x': right,

      'segments[3].point.x': right + 200,
      'segments[3].point.x': right,

    }, {
      // easing: 'easeInOutCubic',
      duration: 30000,
    })
  })




  const background = new Layer([
    whiteRectangle,
    topPolygon,
  ])
  background.selected = false
  background.visible = true
  return background
}

export default Background
