'use strict'

let renderer;

const init = ()=>{
  renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
  // renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.view);

  const stage = new PIXI.Container();

  const draw = t=>{
    requestAnimationFrame(draw);
    renderer.render(stage);
  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});