'use strict'

class ProtonBench{

  constructor(w, h, txt, container, maxSprites){
    const stage = new PIXI.Container();
    this.stage = stage;
    window.stage = stage;

    this.maxSprites = maxSprites;

    const cnt = this.cnt = container;

    stage.addChild(cnt);


    const proton = this.proton = new Proton();
    const emitter = this.emitter = new Proton.Emitter();
    //set Rate
    emitter.rate = new Proton.Rate(35, .001);
    //add Initialize
    emitter.addInitialize(new Proton.Radius(15));
    emitter.addInitialize(new Proton.Life(20));
    emitter.addInitialize(new Proton.Velocity(2, Proton.getSpan(0, 360), 'polar'));
    //add Behaviour
    // emitter.addBehaviour(new Proton.Color('ff0000', 'random'));
    // emitter.addBehaviour(new Proton.Alpha(1, 0));
    //set emitter position
    emitter.p.x = w / 2;
    emitter.p.y = h / 2;
    emitter.emit();
    //add emitter to the proton
    proton.addEmitter(emitter);

    emitter.addEventListener(Proton.PARTICLE_CREATED, (particle)=>{
      const sp = new PIXI.Sprite(txt);
      // sp.width = 20;
      // sp.height = 20;


      particle.sprite = sp;
      cnt.addChild(sp);
    });

    emitter.addEventListener(Proton.PARTICLE_UPDATE, (particle)=>{
      const sp = particle.sprite;
      sp.position.x = particle.p.x;
      sp.position.y = particle.p.y;
      // sp.scale.x = particle.scale/2;
      // sp.scale.y = particle.scale/2;
      // sp.anchor.x = 0.5;
      // sp.anchor.y = 0.5;
      // sp.alpha = particle.alpha;
      // sp.rotation = particle.rotation*Math.PI/180;

    });

    emitter.addEventListener(Proton.PARTICLE_DEAD, (particle) =>{
      cnt.removeChild(particle.sprite);
    });

  }


  get spritesCnt() {
    // let len = 0;
    // this.stage.children.forEach((cnt) => {
    //   len += cnt.children.length;
    // });

    // return len;

    return this.emitter.particles.length;
  }

  update() {
    this.proton.update();
  }
}