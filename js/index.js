// require('aframe-extras');

document.querySelector('a-scene').addEventListener('render-target-loaded', () => {
  const WALL_SIZE = 3;
  const WALL_HEIGHT = 7;
  const el = document.querySelector('#walls');
  let playerPos;

  for (let x = 0; x < map.height; x++) {
    for (let y = 0; y < map.width; y++) {

      const i = (y * map.width) + x;
      const position = 
        `${((x - (map.width / 2)) * WALL_SIZE)} 1 ${(y - (map.height / 2)) * WALL_SIZE}`;




//>>>>>>>>>>>>>> IF MAP.DATA[I] == 1, CREATE A WALL <<<<<<<<<<<<<<<<
      if (map.data[i] === 1) {
        console.log(position);
        let wall = document.createElement('a-box');
        el.appendChild(wall);

        wall.setAttribute('width', WALL_SIZE);
        wall.setAttribute('height', WALL_HEIGHT);
        wall.setAttribute('depth', WALL_SIZE);
        wall.setAttribute('color', '#fff');
        wall.setAttribute('material', 'src: #wall');
        wall.setAttribute('position', position);
        wall.setAttribute('static-body', '');
      }

      // >>>>>>>>>>>>>> PLAYER POSITION <<<<<<<<<<<<<<<<
      if (map.data[i] === 2) {
        playerPos = position;
      } 
      if (map.data[i] === 3) {
        console.log(position);
      }
    }
  }
  document.querySelector('#player').setAttribute('position', playerPos);
});

// $ = (queryString) => document.querySelector(queryString);

// const shiftHue = (hue) => (hue + 1) % 360;

// let hue = 0;

// const animate = () => {
//   hue = shiftHue(hue);
//   const color = `hsl(${hue}, 100%, 50%)`;
//   $('a-sphere').setAttribute('color', color);

//   const position = `0 ${1.5 + Math.sin(Date.now() / 1000)} -2`;
//   $('a-sphere').setAttribute('position', position);
//   requestAnimationFrame(animate);

// };

// requestAnimationFrame(animate);