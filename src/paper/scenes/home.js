import paper, { Group, Layer, Point, PointText, Path, Raster, Rectangle, Size } from 'paper'

const home = that  => ({
  layer: () => {
    console.log(that)
    const radius = new Size(6, 6);

    const ldot = new Path.Circle(new Point(80, 212), 11)
    ldot.fillColor = '#6328E9'
    ldot.selected = false

    const larc = new Path.Circle(new Point(100, 192), 23)
    larc.closed = false
    larc.strokeColor = '#6328E9'
    larc.strokeWidth = 17
    larc.selected = false
    // larc.rotate(90)

    const logoName = new PointText([140, 220])
    logoName.content = 'Bridger';
    logoName.style = {
      fontFamily: 'CircularStd',
      fontWeight: 800,
      fontSize: 48,
      fillColor: '#000',
      justification: 'left',
    }
    logoName.scale(.97, 1)
    logoName.selected = false

    const tagLine = new PointText([187.5, 260])
    tagLine.content = 'Get ready for your first trip';
    tagLine.style = {
      fontFamily: 'CircularStd',
      fontWeight: 400,
      fontSize: 20,
      fillColor: '#000',
      justification: 'center',
    }
    tagLine.selected = false

    const signupRect = new Rectangle(new Point(22, 512), new Point(22 + 331, 512 + 60));
    const signupButton = new Path.Rectangle(signupRect, radius);
    signupButton.fillColor = '#6328E9';
    signupButton.selected = false

    const signupText = new PointText([187.5, 549])
    signupText.content = 'Sign Up to Bridger';
    signupText.style = {
      fontFamily: 'CircularStd',
      fontWeight: 400,
      fontSize: 17,
      fillColor: '#E0D4FB',
      justification: 'center',
    }
    signupText.selected = false

    const loginRect = new Rectangle(new Point(22, 588), new Point(22 + 331, 588 + 60))
    const loginButton = new Path.Rectangle(loginRect, radius)
    loginButton.fillColor = '#E0D4FB'
    loginButton.selected = false

    const loginText = new PointText([187.5, 625])
    loginText.content = 'Log In'
    loginText.style = {
      fontFamily: 'CircularStd',
      fontWeight: 400,
      fontSize: 17,
      fillColor: '#6328E9',
      justification: 'center',
    }
    loginText.selected = false

    const copyText = new PointText([187.5, 700])
    copyText.content = 'This prototype belongs entirely to Maze.design'
    copyText.style = {
      fontFamily: 'CircularStd',
      fontWeight: 400,
      fontSize: 14,
      fillColor: '#7f7f7f',
      justification: 'center',
    }
    copyText.selected = false


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

    return homeLayer
  },
  interactions: {
    down: (ev) => {console.log({interaction: 'down', ev})},
    move: (ev) => {/*console.log({interaction: 'move', ev})*/},
    up: (ev) => {
      console.log({interaction: 'up', ev})
      if (ev.y > 500 && ev.y < 650 ) {
        console.log('clicked', ev.x, ev.y)
        that.setScene('explore')
        that.drawScene()
      }
    },
  },
})

export default home
