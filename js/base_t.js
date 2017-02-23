'use strict'

class BaseBench{

  constructor(w, h, wTxt, container, maxSprites) {
    const stage = this.stage = new PIXI.Container();
    window.stage = stage;

    this.gravity = 0.75;
    this.minX = 0;
    this.maxX = w - 20;
    this.minY = 0;
    this.maxY = h - 20;
    this.sprites = [];
    this.maxSprites = maxSprites;
    this.batchSize = 500;
    this.i = 0;

    const batchText = this.batchText = new PIXI.Text(`${this.i}/${this.maxSprites/this.batchSize}`, {fill: 0xffffff});
    batchText.y = 22;
    stage.addChild(batchText);

    const cnt = this.cnt = container;

    stage.addChild(cnt);

    this.addBatch(wTxt);
  }

  update(t) {
    const sprites = this.sprites;

    for(let i=0;i<sprites.length;i++){
      sprites[i].update();      
    }
    this.batchText.text = `${this.i}/${this.maxSprites/this.batchSize}`;
  }

  addBatch(wTxt) {
    const sprites = this.sprites;
    const maxSprites = this.maxSprites;
    const batchSize = this.batchSize;
    const cnt = this.cnt

    for(let k=0;k<batchSize;k++) {
      const itm = this.createSp(wTxt);
      sprites.push(itm);
      cnt.addChild(itm);
    }
    this.i++;
    console.log(`${this.i}/${maxSprites/batchSize}`);
    if((this.i < maxSprites/batchSize) && this.stage){
      setTimeout(this.addBatch.bind(this, wTxt), 100);
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
    sp.y = Math.random() * maxY;
    sp.scale.set(0.5 + Math.random()*0.5);
    sp.rotation = (Math.random()-0.5)
    sp.anchor.y = 1;

    sp.update = () => {
      sp.position.x += sp.speedX;
      sp.position.y += sp.speedY;
      sp.speedY += gravity;

      if (sp.position.x > maxX) {
        sp.speedX *= -1;
        sp.position.x = maxX;
      }else if (sp.position.x < minX) {
        sp.speedX *= -1;
        sp.position.x = minX;
      }
      
      if (sp.position.y > maxY) {
        sp.speedY *= -0.85;
        sp.position.y = maxY;
        sp.spin = (Math.random()-0.5) * 0.2
        if (Math.random() > 0.5) {
          sp.speedY -= Math.random() * 6;
        }
      }else if (sp.position.y < minY) {
        sp.speedY = 0;
        sp.position.y = minY;
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
