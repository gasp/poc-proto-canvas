import paper, { Group, Layer, Point, PointText, Path, Raster, Rectangle, Size } from 'paper'

const home = that  => ({
  layer: () => {
    console.log(that)
    const radius = new Size(6, 6);

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

    return homeLayer
  },
  interactions: {
    down: (ev) => {console.log({interaction: 'down', ev})},
    move: (ev) => {console.log({interaction: 'move', ev})},
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
