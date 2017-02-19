'use strict'



class BaseBench{

  constructor(w, h, wTxt){
    const stage = this.stage = new PIXI.Container();
    window.stage = stage;

    this.gravity = 0.75;
    this.minX = 0;
    this.maxX = w;
    this.minY = 0;
    this.maxY = h - 20;
    this.sprites = [];
    this.maxSprites = 35000;
    this.batchSize = 1;
    this.i = 0;

    const batchText = this.batchText = new PIXI.Text(`${this.i}/${this.maxSprites/this.batchSize}`, {fill: 0xffffff});
    batchText.y = 22;
    stage.addChild(batchText);

    this.addBatch(wTxt);

  }

  update(t) {
    this.sprites.forEach((sp)=>sp.update());
    this.batchText.text = `${this.i}/${this.maxSprites/this.batchSize}`;
  }

  addBatch(wTxt) {
    const sprites = this.sprites;
    const maxSprites = this.maxSprites;
    const batchSize = this.batchSize;
    const stage = this.stage;
    const cnt = new PIXI.particles.ParticleContainer(batchSize, {
      scale: false,
      position: true,
      rotation: false,
      uvs: false,
      alpha: false
    });

    stage.addChild(cnt);
    for(let k=0;k<batchSize;k++){
      const itm = this.createSp(wTxt);
      sprites.push(itm);
      cnt.addChild(itm);
      // stage.addChild(itm);
    }
    console.log(`${this.i}/${maxSprites/batchSize}`);
    if((++this.i < maxSprites/batchSize) && this.stage){
      setTimeout(this.addBatch.bind(this), 200);
    } 
  }

  createSp(txt) {
    const minX = this.minX;
    const maxX = this.maxX;
    const minY = this.minY;
    const maxY = this.maxY;
    const gravity = this.gravity;
    const sp = new PIXI.Sprite(txt);
    sp.speedX = Math.random() * 10;
    sp.speedY = (Math.random() * 10) - 5;
    sp.x = Math.random() * maxX;
    sp.scale.set(0.5 + Math.random()*0.5);

    sp.update = () => {
      sp.position.x += sp.speedX;
      sp.position.y += sp.speedY;
      
      sp.speedY += gravity;
      if (sp.position.x <= minX || sp.position.x >= maxX) {
          sp.speedX *= -1
      }

      if (sp.position.y >= maxY) {
          sp.speedY *= -gravity;
          // random boosts
          if (Math.random() > 0.5){
              sp.speedY -= Math.random() * 15;
          }
      }else if (sp.position.y <= minY) {
          sp.position.y = 1;
          sp.speedY = 0;
      }
    }

    return sp;
  }

  get spritesCnt() {
    let len = 0;
    this.stage.children.forEach((cnt) => {
      len += cnt.children.length;
    });

    return len;
  }
}
