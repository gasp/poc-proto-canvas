import paper, { Group, Path } from 'paper'


const Burger = () => {

  const ln1 = new Path({segments: [[24, 45], [24, 45]]})
  ln1.tween({
    'segments[1].point.x': 24,
    'segments[1].point.x': 42,
  }, {
    easing: 'easeInOutCubic',
    duration: 300,
  })

  const burger = new Group([
    ln1,
    new Path({segments: [[24, 52], [42, 52]]}),
    new Path({segments: [[24, 59], [33, 59]]}),
  ])
  burger.strokeColor = '#555'
  burger.strokeWidth = 2
  burger.strokeCap = 'round'


  return burger
}

export default Burger
