'use strict'

class PixiParticlesBench{

  constructor(w, h, txt, container, maxSprites){
    const stage = new PIXI.Container();
    this.stage = stage;
    window.stage = stage;

    this.maxSprites = maxSprites;

    const cnt = this.cnt = container;
    stage.addChild(cnt);

    cnt.x = w / 2;
    cnt.y = h / 2;

    const emitter = this.emitter = new PIXI.particles.Emitter(cnt, [txt], {
      // "alpha": {
      //   "start": 1,
      //   "end": 0.22
      // },
      // "scale": {
      //   "start": 0.25,
      //   "end": 0.75,
      //   "minimumScaleMultiplier":0.5
      // },
      // "color": {
      //   "start": "ffffff",
      //   "end": "ffffff"
      // },
      "speed": {
        "start": 200,
        "end": 50
      },
      "startRotation": {
        "min": 0,
        "max": 360
      },
      "noRotation": true,
      // "rotationSpeed": {
      //   "min": 0,
      //   "max": 10
      // },
      "lifetime": {
        "min": 25,
        "max": 25
      },
      "blendMode": "normal",
      "frequency": 0.0005,
      "emitterLifetime": 0,
      "maxParticles": maxSprites,
      "pos": {
        "x": 0,
        "y": 0
      },
      "addAtBack": false,
      "spawnType": "point"
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
    // this.emitter.update(t * 0.001);
    this.emitter.update(0.016);
  }
}