'use strict'

class PixiParticlesBench{

  constructor(w, h, txt, container, maxSprites){
    const stage = new PIXI.Container();
    this.stage = stage;
    window.stage = stage;

    this.maxSprites = maxSprites;

    const cnt = this.cnt = container;
    stage.addChild(cnt);

    const emitter = this.emitter = new PIXI.particles.Emitter(cnt, txt, {
      alpha: {
          start: 0.8,
          end: 0.1
      },
      scale: {
          start: 1,
          end: 0.3
      },
      color: {
          start: "fb1010",
          end: "f5b830"
      },
      speed: {
          start: 200,
          end: 100
      },
      startRotation: {
          min: 0,
          max: 360
      },
      rotationSpeed: {
          min: 0,
          max: 0
      },
      lifetime: {
          min: 0.5,
          max: 0.5
      },
      frequency: 0.008,
      emitterLifetime: 0.31,
      maxParticles: maxSprites,
      pos: {
          x: 0,
          y: 0
      },
      addAtBack: false,
      spawnType: "circle",
      spawnCircle: {
          x: 0,
          y: 0,
          r: 10
      }
    });
  }

  get spritesCnt() {
    let len = 0;
    this.stage.children.forEach((cnt) => {
      len += cnt.children.length;
    });

    return len;
  }

  update(t) {
    this.emitter.update(t * 0.001);
  }
}