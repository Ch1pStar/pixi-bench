'use strict'

class QuarkBench{

  constructor(w, h, txt, container, maxSprites){
    const stage = new PIXI.Container();
    this.stage = stage;
    window.stage = stage;

    this.maxSprites = maxSprites;

    const cnt = this.cnt = container;

    stage.addChild(cnt);


    const emitter = this.emitter = new Quark.Emitter(txt, cnt);
    window.emitter = emitter;
    //set Rate
    emitter.rate = new Quark.Rate(Quark.getSpan(25,30), .1);
    //add Initialize
    emitter.addInitialize(new Quark.Radius(15));
    emitter.addInitialize(new Quark.Life(31));
    emitter.addInitialize(new Quark.Velocity(2, Quark.getSpan(0, 360), 'polar'));
    //add Behaviour
    // emitter.addBehaviour(new Proton.Color('ff0000', 'random'));
    // emitter.addBehaviour(new Proton.Alpha(1, 0));
    //set emitter position
    emitter.p.x = w / 2;
    emitter.p.y = h / 2;
    emitter.emit();

    emitter.particleCreated.add((particle)=>{
      // let sp;
      if(particle.sprite){
        // console.log('reuse');
        // sp = particle.sprite;
        // sp.visible = true;
        // sp.alpha = 1;
      }else{
        const sp = new PIXI.Sprite(txt);
        particle.sprite = sp;
        cnt.addChild(sp);
      }


      // sp.width = 20;
      // sp.height = 20;
    });

    emitter.particleUpdate.add((particle)=>{
      const sp = particle.sprite;
      sp.position.set(particle.p.x, particle.p.y);
      // sp.position.x = particle.p.x;
      // sp.position.y = particle.p.y;
    //   // sp.scale.x = particle.scale/2;
    //   // sp.scale.y = particle.scale/2;
    //   // sp.anchor.x = 0.5;
    //   // sp.anchor.y = 0.5;
    //   // sp.alpha = particle.alpha;
    //   // sp.rotation = particle.rotation*Math.PI/180;

    });


    emitter.particleDead.add((particle) =>{
        // particle.sprite.visible = false;
        // particle.sprite.alpha = 0;
      // cnt.removeChild(particle.sprite);
    });

  }


  get spritesCnt() {
    // let len = 0;
    // this.stage.children.forEach((cnt) => {
    //   len += cnt.children.length;
    // });

    // return len;
    // 
    // return this.emitter.particleCount;
    return this.emitter.activeCount+'\n'+this.cnt.children.length;
  }

  update() {
    this.emitter.update(0.0167);
  }
}