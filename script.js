let pattern = [];
const tiles = document.querySelectorAll('button.tile');
const generateBtn = document.getElementById('generate');
let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

function setTileState(elem) {
  pattern = [];
  elem.dataset.state = !JSON.parse(elem.dataset.state);
}

generateBtn.onclick = generate;

function generate() {
  tiles.forEach((tile) => {
    pattern.push(JSON.parse(tile.dataset.state)); //by default [false, false, false, false]
  });
  generateCanvas();
}

function generateCanvas() {
  canvas.style.display = 'block';
  ctx.lineWidth = 1;
  if (pattern[0] === true) {
    ctx.beginPath();
    ctx.fillStyle = 'lightgreen';
    ctx.rect(0, 0, 150, 150);
    ctx.rect(450, 0, 150, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(0, 0, 150, 150);
    ctx.rect(450, 0, 150, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  if (pattern[1] === true) {
    ctx.beginPath();
    ctx.fillStyle = 'rebeccapurple';
    ctx.rect(149, 0, 150, 150);
    ctx.rect(300, 0, 150, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(149, 0, 150, 150);
    ctx.rect(300, 0, 150, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  if (pattern[2] === true) {
    ctx.beginPath();
    ctx.fillStyle = 'cornflowerblue';
    ctx.rect(0, 150, 150, 150);
    ctx.rect(450, 150, 150, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(0, 150, 150, 150);
    ctx.rect(450, 150, 150, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
  if (pattern[3] === true) {
    ctx.beginPath();
    ctx.fillStyle = 'chocolate';
    ctx.rect(149, 150, 150, 150);
    ctx.rect(300, 150, 150, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  } else {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.rect(149, 150, 150, 150);
    ctx.rect(300, 150, 150, 150);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
