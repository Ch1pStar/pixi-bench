'use strict'

let renderer;
const Anim = PIXI.animate;

const w = window.innerWidth;
const h = window.innerHeight;

const init = ()=>{
  renderer = PIXI.autoDetectRenderer(w, h);
  // renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
  renderer.backgroundColor = 0xcccccc;

  document.body.appendChild(renderer.view);

  const stage = new PIXI.Container();

  const txt = PIXI.Texture.fromImage('img/freeSpinsParticles4.png');
  window.txt = txt;
  let cnt = new PIXI.particles.ParticleContainer(15000, {
    scale: false,
    position: true,
    rotation: false,
    uvs: false,
    alpha: false
  });

  stage.addChild(cnt);
  window.cnt = cnt;

  const currMc = lib.ColorTween;

  // const emitter = new Proton.Emitter();
  const initEmitter = () => {

    emitter.integrator = new Proton.NumericalIntegration(Proton.EULER);
    emitter.pool = new Proton.Pool(100);
    emitter.rate = new Proton.Rate(10, 0.005);

    emitter.addInitialize(new Proton.Radius(5));
    emitter.addInitialize(new Proton.Life(1.2));
    emitter.addInitialize(new Proton.Velocity(2, Proton.getSpan(0, 360), 'polar'));

    emitter.p.x = w / 2;
    emitter.p.y = h / 2;
    // start emitting
    emitter.emit();

    emitter.addEventListener(Proton.PARTICLE_CREATED, (particle)=>{
      const sp = new PIXI.Sprite(txt);

      sp.width = 15;
      sp.height = 15;

      particle.sprite = sp;
      cnt.addChild(sp);
      // stage.addChild(sp);
    });

    emitter.addEventListener(Proton.PARTICLE_UPDATE, (particle)=>{
      const sp = particle.sprite;
      sp.position.x = particle.p.x;
      sp.position.y = particle.p.y;

    });

    emitter.addEventListener(Proton.PARTICLE_DEAD, (particle) =>{
      cnt.removeChild(particle.sprite);
      // stage.removeChild(particle.sprite);
    });

    window.emitter = emitter;
  }

  // initEmitter();

  let sq;

  Anim.load(currMc, (instance) => {
    console.log(instance);
    window.instance = instance;
    sq = instance.innerFrames;
    window.sq = sq;

    stage.addChild(sq);
    // sq.visible = false;
    // sq.stop();

  });

  let currTime = performance.now();

  const draw = t=>{
    requestAnimationFrame(draw);
    renderer.render(stage);
    let elapsed = t - currTime;
  
    // console.log(elapsed * 0.001);
    // emitter.update(0.015353999925814606);
    // emitter.update(elapsed * 0.001); 
    currTime = performance.now();

    // if(sq !== undefined){
    //   const ayy = sq.children[0];
    //   emitter.p.x = ayy.x+sq.x;
    //   emitter.p.y = ayy.y+sq.y;
    // }
  }

  draw();
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});