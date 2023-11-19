const w = 800;
const h = 400;
const rez = 40;
const trailLength = 15;

let trails = [];
const cells = [];
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789<>?&%$#!/';

for (let x = 0; x < rez; x++){
  cells.push([]);
  for (let y = 0; y < rez; y++){
    const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
    cells[x].push(randomChar);
  }
}


function createTrail(){
  return {
    column: Math.floor(Math.random() * rez),
    row: 0
  }
}

function setup() {
  createCanvas(w, h);
  frameRate(10);
  let trail_1 = createTrail();
  trails.push(trail_1)
}

function draw() {
  background(0);
  for(let t of trails){
    for(let i = 0; i < trailLength; i++){
      const opacity = 1.5 - (i*0.1);
      push();
      fill(`rgba(0,255,0, ${opacity})`); 
      text(cells[t.column][t.row - i], t.column * (w/rez), (t.row - i) * (h/rez)); 
      pop();
    }
    t.row += 1;
    if(t.row > (rez + trailLength)){
      trails.shift();
    }
  }
  trails.push(createTrail())
  trails.push(createTrail())
  trails.push(createTrail())
  trails.push(createTrail())
}





