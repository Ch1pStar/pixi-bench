'use strict'

let renderer;
let test;
let txt;

const w = 800;
const h = 600;

// const w = window.innerWidth;
// const h = window.innerHeight

window.BaseBench = BaseBench;
window.ProtonBench = ProtonBench;

const init = ()=>{

  renderer = PIXI.autoDetectRenderer(w, h);
  // renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.view);

  txt = new PIXI.Texture(PIXI.Texture.fromImage('img/bunnys.png'), new PIXI.Rectangle(2, 86, 26, 37));

  // test = window.test = new BaseBench(w, h, txt);
  test = window.test = new ProtonBench(w, h, txt);


  const spCounter = new PIXI.Text('lel', {fill: 0xFFFFFF});
  test.stage.addChild(spCounter);


  let tick = 0;
  let currTime = performance.now();
  const draw = t=>{
    // console.log(t - currTime);
    currTime = t;
    requestAnimationFrame(draw);
    renderer.render(test.stage);
    test.update();

    spCounter.text = test.spritesCnt;

  }

  draw();


  document.querySelectorAll('.bench-t').forEach((link) => {
    link.addEventListener('click', (e) => {
      // test.stage.destroy();
      delete test.stage;
      test = new window[link.dataset.benchT](w, h, txt);
      test.stage.addChild(spCounter);
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  init();
});