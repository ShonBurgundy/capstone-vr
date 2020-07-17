const map = {
 "data":[
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1,
    1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1,
    1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ],
 "height":10,
 "width":10
}

document.querySelector('a-scene').addEventListener('render-target-loaded', () => {
  const WALL_SIZE = 3;
  const WALL_HEIGHT = 12;
  const el = document.querySelector('#walls');
  let playerPos;

  for (let x = 0; x <map.height; x++) {
    for (let y= 0; y < map.width; y++) {

      const i = (y * map.width) + x;
      const position = `${((x - (map.width / 2)) * WALL_SIZE)} 1.5 ${(y - (map.height / 2)) * WALL_SIZE}`;


//>>>>>>>>>>>>>> IF MAP.DATA[I] == 1, CREATE A WALL <<<<<<<<<<<<<<<<
      if (map.data[i] === 1) {
        wall = document.createElement('a-box');
        el.appendChild(wall);

        wall.setAttribute('width', WALL_SIZE);
        wall.setAttribute('height', WALL_HEIGHT);
        wall.setAttribute('depth', WALL_SIZE);
        wall.setAttribute('color', '#fff');
        wall.setAttribute('material', 'src: #walls; repeat: 2 2')
        wall.setAttribute('position', position);
      }
    }
  }
});