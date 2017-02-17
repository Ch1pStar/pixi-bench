'use strict'

let renderer;

const gravity = 0.75;
const minX = 0;
const maxX = window.innerWidth;
const minY = 0;
const maxY = window.innerHeight-80;
const sprites = [];
const containers = [];
const maxSprites = 15000;
const batchSize = 1500;


const createSp = (txt) => {
  const sp = new PIXI.Sprite(txt);
  sp.speedX = Math.random() * 10;
  sp.speedY = (Math.random() * 10) - 5;
  sp.x = Math.random() * maxX;

  sp.update = () => {
    sp.position.x += sp.speedX;
    sp.position.y += sp.speedY;
    
    sp.speedY += gravity;
    if (sp.position.x <= minX || sp.position.x >= maxX) {
        sp.speedX *= -1
    }

    if (sp.position.y >= maxY) {
        sp.speedY *= -gravity;
        // random boosts
        if (Math.random() > 0.5){
            sp.speedY -= Math.random() * 15;
        }
    }else if (sp.position.y <= minY) {
        sp.position.y = 1;
        sp.speedY = 0;
    }
  }

  return sp;
}

const init = ()=>{
  renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
  // renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.view);

  const stage = new PIXI.Container();
  // const stage = new PIXI.particles.ParticleContainer();
  const txt = PIXI.Texture.fromImage('img/p4.png');


  let i = 0;
  const arg = ()=>{


    const cnt = new PIXI.particles.ParticleContainer();
    stage.addChild(cnt);
    // containers.push(cnt);
    for(let k=0;k<batchSize;k++){
      const itm = createSp(txt);
      sprites.push(itm);
      cnt.addChild(itm);
    }
    if(i++ < maxSprites/batchSize){
      setTimeout(arg, 500);
    }
  };

  arg();


  const draw = t=>{
    requestAnimationFrame(draw);

    sprites.forEach((sp)=>sp.update());

    // containers.forEach((cnt)=>renderer.render(cnt));
    renderer.render(stage);

  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});