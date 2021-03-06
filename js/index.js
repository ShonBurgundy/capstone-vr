
document.querySelector('a-scene').addEventListener('loaded', () => {
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
        let wall = document.createElement('a-box');
        el.appendChild(wall);

        wall.setAttribute('width', WALL_SIZE);
        wall.setAttribute('height', WALL_HEIGHT);
        wall.setAttribute('depth', WALL_SIZE);
        wall.setAttribute('color', '#fff');
        wall.setAttribute('material', 'src: #wall; repeat: 1 1.5');
        wall.setAttribute('position', position);
        wall.setAttribute('static-body', '');
      }

      if (map.data[i] === 5) {
        let wall = document.createElement('a-box');
        el.appendChild(wall);

        wall.setAttribute('width', WALL_SIZE);
        wall.setAttribute('height', WALL_HEIGHT);
        wall.setAttribute('depth', WALL_SIZE);
        wall.setAttribute('color', '#fff');
        wall.setAttribute('material', 'src: #hedges; repeat: 1 3');
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