'use strict'

let renderer;
const Anim = PIXI.animate;

const init = ()=>{
  renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
  // renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
  renderer.backgroundColor = 0xcccccc;

  document.body.appendChild(renderer.view);

  const stage = new PIXI.Container();

  const currMc = lib.ColorTween;

  Anim.load(currMc, (instance) => {
    window.instance = instance;
    console.log(instance);

    const sq = instance.innerFrames;

    stage.addChild(sq);
    sq.stop();
    console.log('waiting 1 second, before starting from frame 30');
    setTimeout(()=>{
      sq.gotoAndPlay(30);
    }, 1000);


    setTimeout(()=>{
      
      stage.addChild(instance);
    }, 3000);

  });

  const draw = t=>{
    requestAnimationFrame(draw);
    renderer.render(stage);
  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});