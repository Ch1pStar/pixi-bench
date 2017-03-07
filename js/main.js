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

  const wtf = new PIXI.Container();

  const bg = PIXI.Sprite.fromImage('img/bg.jpg');
  bg.width = w;
  bg.height = h;
  stage.addChild(bg);
  const blurFilter = new PIXI.filters.BlurFilter();
  let displacementSprite;
  let displacementFilter;

  let ring;
  const fish = PIXI.Sprite.fromImage('img/fish1.png');
  const fishCnt = new PIXI.Container();
  window.fishCnt = fishCnt;

  window.fish = fish;
  const loader = new PIXI.loaders.Loader();
  loader.add('fish', 'img/fish1.png');
  loader.add('ring', 'img/ring.png');
  loader.add('map2', 'img/displacement_map2.png')
  loader.add('map', 'img/displacement_map.jpg')
  loader.add('map3', 'img/DisplacementMap.png')
  loader.add('map4', 'img/DisplacementMap_4.png')
  loader.add('map5', 'img/map_5.png')
  loader.add('map6', 'img/map6.jpg')
  loader.add('map7', 'img/map7.jpg')
  loader.add('map8', 'img/map8.png')
  loader.add('map9', 'img/zoom_map.png')
    .load((loader, resources) => {
        const texture = resources.fish.texture;
        fish.texture = texture;

        // fish.anchor.x = .5;
        // fish.anchor.y = .5;
        fish.x = w/2;
        fish.y = h/2;

        // fish.width = 50;
        // fish.height = 30;


        const mapTxt = resources.map9.texture;
        // mapTxt.scale = 2;


        displacementSprite = new PIXI.Sprite(mapTxt);
        const mapSprite = new PIXI.Sprite(mapTxt);
        // displacementSprite.scale.set(0);
        // displacementSprite.rotation = Math.PI/2;
        // displacementSprite.x = 300;
        // mapSprite.rotation = Math.PI/2;
        // mapSprite.x = 300;
        // mapSprite.scale.set(2);



        displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
        // displacementFilter.scale.x = 1;
        // displacementFilter.scale.y = 1;
        fishCnt.filters = [
          // blurFilter,
          displacementFilter,
        ];
        stage.addChild(displacementSprite);
        wtf.addChild(mapSprite);

        displacementFilter.scale.x = 110;
        displacementFilter.scale.y = 110;

        ring = new PIXI.Sprite(resources.ring.texture);
        ring.anchor.set(.5);
        ring.scale.set(.9);
        stage.addChild(ring);

    });
  // stage.addChild(wtf);
  fishCnt.addChild(fish);
  stage.addChild(fishCnt);

  
  // fishCnt.width = 500;
  // fishCnt.height = 500;

  document.addEventListener('mousemove', (e) => {
    // fish.x = e.x;
    // fish.y = e.y;

    ring.y = e.y;
    ring.x = e.x;

    displacementSprite.x = e.x - displacementSprite.width/2 + 10;
    displacementSprite.y = e.y- displacementSprite.height/2 + 15;


    // displacementFilter.x = e.x;
    // displacementFilter.y = e.y;

    // wtf.x = e.x;
    // wtf.y = e.y;
  });


  let i = 0.5;
  const draw = t=>{
    requestAnimationFrame(draw);
    i += 0.05;
    const amount = Math.sin(i);
    blurFilter.blurX = amount*10;
    blurFilter.blurY = amount*10;

    renderer.render(stage);
  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});