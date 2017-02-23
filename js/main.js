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
    // const c1 = instance.children[0];
    // stage.addChild(c1);

    instance.framerate = 5;

    stage.addChild(instance);
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