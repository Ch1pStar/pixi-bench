'use strict'

let renderer;
let test;
const bunnyTxt = new PIXI.Texture(PIXI.Texture.fromImage('img/bunnys.png'), new PIXI.Rectangle(2, 86, 26, 37));
const lightTxt = new PIXI.Texture(PIXI.Texture.fromImage('img/p4.png'));
const cardTxt = new PIXI.Texture(PIXI.Texture.fromImage('img/spade_A.png'));

const w = 800;
const h = 600;

// const w = window.innerWidth;
// const h = window.innerHeight

window.BaseBench = BaseBench;
window.ProtonBench = ProtonBench;
window.PixiBench = PixiParticlesBench;

let maxParticles = 15000;

const textures = {
  bunny: bunnyTxt,
  light: lightTxt,
  card: cardTxt,
};

const containers = {
  'Container': {
    obj: PIXI.Container,
    config: {}
  },
  'ParticleContainer': {
    obj: PIXI.particles.ParticleContainer,
    config: {
      scale: false,
      position: true,
      rotation: false,
      uvs: false,
      alpha: false
    },
  },
};

const init = () => {
  // renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
  renderer = PIXI.autoDetectRenderer(w, h, {
    backgroundColor: 0xcccccc
  });
  document.body.appendChild(renderer.view);

  const spCounter = new PIXI.Text('lel', {fill: 0xffffff});
  spCounter.y = h - spCounter.height;

  const create_test_case = (type, containerType, txt) => {
    if(test && test.stage) delete test.stage;

    const container = new containers[containerType].obj(maxParticles, containers[containerType].config);

    test = new window[type](w, h, txt, container, maxParticles);
    test.stage.addChild(spCounter);
  }

  const create_ui = () => {
    const obj = {
        maxParticles : maxParticles,
        testCases: [
          'BaseBench',
          'ProtonBench',
          'PixiBench',
        ],
        currCase: 'PixiBench',
        containerType: Object.keys(containers),
        currContainer: 'ParticleContainer',
        texture: Object.keys(textures),
        currTxt: 'bunny'
    };
    const controlKit = new ControlKit();
    const panel = controlKit.addPanel({
      align: 'left',
      width: 200
    })
    .addGroup()
    .addSubGroup()
    .addStringInput(obj, 'maxParticles')
    .addSelect(obj, 'testCases', { target: 'currCase', label: 'Test case' })
    .addSelect(obj, 'containerType', { target: 'currContainer', label: 'Container type' })
    .addSelect(obj, 'texture', { target: 'currTxt', label: 'Texture' })
    .addButton('Run', () => {
      maxParticles = parseInt(obj.maxParticles, 10);
      create_test_case(obj.currCase, obj.currContainer, textures[obj.currTxt]);
    });
  }

  let currTime = performance.now();
  const draw = t => {
    const elapsed = t - currTime; 
    // console.log(t - currTime);
    currTime = t;
    requestAnimationFrame(draw);
    renderer.render(test.stage);
    test.update(elapsed);
    spCounter.text = test.spritesCnt;
  }

  // create_test_case('PixiBench', 'ParticleContainer', textures.bunny);
  create_test_case('ProtonBench', 'ParticleContainer', textures.bunny);

  create_ui();

  draw();
}


document.addEventListener('DOMContentLoaded', () => {
  init();
});