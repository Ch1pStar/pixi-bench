'use strict'

let renderer;

const w = window.innerWidth;
const h = window.innerHeight;

const init = ()=>{
  renderer = PIXI.autoDetectRenderer(w, h);
  // renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.view);
  const stage = new PIXI.Container();
  window.stage = stage;

  // const wtf = new PIXI.Container();

  const bg = new PIXI.Sprite();
  stage.addChild(bg);

  let renderTexture = PIXI.RenderTexture.create(w, h);
  window.renderTexture = renderTexture;
  const stageSprite = new PIXI.Sprite(renderTexture);
  window.stageSprite = stageSprite;


  const loader = new PIXI.loaders.Loader();
  loader.add('bg', 'img/bg.jpg')
    .load((loader, resources) => {
        bg.texture =  resources.bg.texture;
        bg.width = w;
        bg.height = h;

    });

  PIXI.animate.load(lib.fishStage, (instance) => {
    instance.renderTexture = renderTexture;
    instance.stageSprite = stageSprite;
    stage.addChild(instance);
  });
  

  let i = 0.5;
  const draw = t=>{
    requestAnimationFrame(draw);
    renderer.render(stage, renderTexture);
    renderer.render(stageSprite);

    // renderer.render(stage);
  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});