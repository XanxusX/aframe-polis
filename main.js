let scene = document.querySelector('a-scene');

const getRandomPosition = () => Math.floor( 50 - (Math.random() * 100))
const getRandomPositionY = () => Math.floor( (Math.random() * 10) + 10 )
const getRandomColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const getRandomScale = () => {
  let r = Math.floor( (Math.random() * 5))
  return {
    x: r,
    y: r,
    z: r,
  }
}

const createBall = async (num) => {
  let ball = document.createElement('a-sphere');
  ball.setAttribute('id', 'sphere' + num);
  ball.setAttribute('position', { x: getRandomPosition(), y: getRandomPositionY(), z: getRandomPosition() })
  ball.setAttribute('color', getRandomColor());
  ball.setAttribute('scale', '0.5 0.5 0.5');
  ball.setAttribute('animation', 'property: position; to: ' + getRandomPosition() + ' ' + getRandomPositionY() + ' ' + getRandomPosition() + '; dir: alternate;  ');
  scene.appendChild(ball);
}

const addAnimation = async (num) => {
  setInterval( () => {
    let sphere = scene.querySelector('#sphere' + num)
    let position = sphere.getAttribute('position')
    sphere.setAttribute('animation__2', 'property: position; from: ' + position.x + ' ' + position.y + ' ' +position.z + '; to: ' + getRandomPosition() + ' ' + getRandomPositionY() + ' ' + getRandomPosition() + ';  dir: alternate;'); 
  }, 3000);
}

const init = async () => {
  let num = 0
  while( num < 50 ) {
    await createBall(num)
    await addAnimation(num)
    num++
  }
}

init()

