require('aframe-extras');

$ = (queryString) => document.querySelector(queryString);

const shiftHue = (hue) => (hue + 1) % 360;

let hue = 0;

const animate = () => {
  hue = shiftHue(hue);
  const color = `hsl(${hue}, 100%, 50%)`;
  $('a-sphere').setAttribute('color', color);

  const position = `0 ${1.5 + Math.sin(Date.now() / 1000)} -2`;
  $('a-sphere').setAttribute('position', position);
  requestAnimationFrame(animate);

};

requestAnimationFrame(animate);