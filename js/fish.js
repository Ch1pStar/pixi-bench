(function (PIXI, lib) {

    var MovieClip = PIXI.animate.MovieClip;
    var Container = PIXI.Container;
    var Sprite = PIXI.Sprite;
    var fromFrame = PIXI.Texture.fromFrame;
    var Graphics = PIXI.Graphics;
    var shapes = PIXI.animate.ShapesCache;

    var Graphic1 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 59, loop: false });
        var instance1 = new Graphics()
            .drawCommands(shapes.fishStage[0])
            .setTransform(-449.45, -289.95);
        this.addTimedChild(instance1);
    });

    lib.Graphic2 = Container.extend(function () {
        Container.call(this);
        var instance1 = new Graphics()
            .drawCommands(shapes.fishStage[0])
            .setTransform(-449.45, -290);
        this.addChild(instance1);
    });

    lib.mirror = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 60
        });
        var instance1 = new Graphic1(MovieClip.SYNCHED);
        var instance2 = new lib.Graphic2()
            .setTransform(364, 23.05);
        this.addTimedChild(instance1, 0, 59, {
                "0": {
                    x: 0,
                    y: 0
                },
                "1": {
                    x: 6.15,
                    y: 0.4
                },
                "2": {
                    x: 12.35,
                    y: 0.8
                },
                "3": {
                    x: 18.5,
                    y: 1.15
                },
                "4": {
                    x: 24.7,
                    y: 1.55
                },
                "5": {
                    x: 30.85,
                    y: 1.95
                },
                "6": {
                    x: 37,
                    y: 2.35
                },
                "7": {
                    x: 43.2,
                    y: 2.75
                },
                "8": {
                    x: 49.35,
                    y: 3.15
                },
                "9": {
                    x: 55.55,
                    y: 3.5
                },
                "10": {
                    x: 61.7,
                    y: 3.9
                },
                "11": {
                    x: 67.85,
                    y: 4.3
                },
                "12": {
                    x: 74.05,
                    y: 4.7
                },
                "13": {
                    x: 80.2,
                    y: 5.1
                },
                "14": {
                    x: 86.35,
                    y: 5.45
                },
                "15": {
                    x: 92.55,
                    y: 5.85
                },
                "16": {
                    x: 98.7,
                    y: 6.25
                },
                "17": {
                    x: 104.9,
                    y: 6.65
                },
                "18": {
                    x: 111.05,
                    y: 7.05
                },
                "19": {
                    x: 117.2,
                    y: 7.4
                },
                "20": {
                    x: 123.4,
                    y: 7.8
                },
                "21": {
                    x: 129.55,
                    y: 8.2
                },
                "22": {
                    x: 135.75,
                    y: 8.6
                },
                "23": {
                    x: 141.9,
                    y: 9
                },
                "24": {
                    x: 148.05,
                    y: 9.4
                },
                "25": {
                    x: 154.25,
                    y: 9.75
                },
                "26": {
                    x: 160.4,
                    y: 10.15
                },
                "27": {
                    x: 166.6,
                    y: 10.55
                },
                "28": {
                    x: 172.75,
                    y: 10.95
                },
                "29": {
                    x: 178.9,
                    y: 11.35
                },
                "30": {
                    x: 185.1,
                    y: 11.7
                },
                "31": {
                    x: 191.25,
                    y: 12.1
                },
                "32": {
                    x: 197.4,
                    y: 12.5
                },
                "33": {
                    x: 203.6,
                    y: 12.9
                },
                "34": {
                    x: 209.75,
                    y: 13.3
                },
                "35": {
                    x: 215.95,
                    y: 13.65
                },
                "36": {
                    x: 222.1,
                    y: 14.05
                },
                "37": {
                    x: 228.25,
                    y: 14.45
                },
                "38": {
                    x: 234.45,
                    y: 14.85
                },
                "39": {
                    x: 240.6,
                    y: 15.25
                },
                "40": {
                    x: 246.8,
                    y: 15.65
                },
                "41": {
                    x: 252.95,
                    y: 16
                },
                "42": {
                    x: 259.1,
                    y: 16.4
                },
                "43": {
                    x: 265.3,
                    y: 16.8
                },
                "44": {
                    x: 271.45,
                    y: 17.2
                },
                "45": {
                    x: 277.65,
                    y: 17.6
                },
                "46": {
                    x: 283.8,
                    y: 17.95
                },
                "47": {
                    x: 289.95,
                    y: 18.35
                },
                "48": {
                    x: 296.15,
                    y: 18.75
                },
                "49": {
                    x: 302.3,
                    y: 19.15
                },
                "50": {
                    x: 308.5,
                    y: 19.55
                },
                "51": {
                    x: 314.65,
                    y: 19.9
                },
                "52": {
                    x: 320.8,
                    y: 20.3
                },
                "53": {
                    x: 327,
                    y: 20.7
                },
                "54": {
                    x: 333.15,
                    y: 21.1
                },
                "55": {
                    x: 339.3,
                    y: 21.5
                },
                "56": {
                    x: 345.5,
                    y: 21.9
                },
                "57": {
                    x: 351.65,
                    y: 22.25
                },
                "58": {
                    x: 357.85,
                    y: 22.65
                }
            })
            .addTimedChild(instance2, 59, 1)
            .addAction(function () {
                this.stop();
            }, 59);
    });

    var Graphic3 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 29, loop: false });
        var instance1 = new Sprite(fromFrame("fish1"))
            .setTransform(-104.5, -38);
        this.addTimedChild(instance1);
    });

    var Graphic4 = MovieClip.extend(function (mode) {
        MovieClip.call(this, { mode: mode, duration: 31, loop: false });
        var instance1 = new Sprite(fromFrame("fish1"))
            .setTransform(-104.5, -38);
        this.addTimedChild(instance1);
    });

    lib.fish = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 60
        });
        var instance1 = new Graphic3(MovieClip.SYNCHED);
        var instance2 = new Graphic4(MovieClip.SYNCHED);
        this.addTimedChild(instance1, 0, 29, {
                "0": {
                    x: 0
                },
                "1": {
                    x: -1.2
                },
                "2": {
                    x: -2.4
                },
                "3": {
                    x: -3.6
                },
                "4": {
                    x: -4.85
                },
                "5": {
                    x: -6.05
                },
                "6": {
                    x: -7.25
                },
                "7": {
                    x: -8.45
                },
                "8": {
                    x: -9.65
                },
                "9": {
                    x: -10.85
                },
                "10": {
                    x: -12.05
                },
                "11": {
                    x: -13.3
                },
                "12": {
                    x: -14.5
                },
                "13": {
                    x: -15.7
                },
                "14": {
                    x: -16.9
                },
                "15": {
                    x: -18.1
                },
                "16": {
                    x: -19.3
                },
                "17": {
                    x: -20.5
                },
                "18": {
                    x: -21.7
                },
                "19": {
                    x: -22.95
                },
                "20": {
                    x: -24.15
                },
                "21": {
                    x: -25.35
                },
                "22": {
                    x: -26.55
                },
                "23": {
                    x: -27.75
                },
                "24": {
                    x: -28.95
                },
                "25": {
                    x: -30.15
                },
                "26": {
                    x: -31.4
                },
                "27": {
                    x: -32.6
                },
                "28": {
                    x: -33.8
                }
            })
            .addTimedChild(instance2, 29, 31, {
                "29": {
                    x: -35
                },
                "30": {
                    x: -32.15
                },
                "31": {
                    x: -29.35
                },
                "32": {
                    x: -26.5
                },
                "33": {
                    x: -23.65
                },
                "34": {
                    x: -20.85
                },
                "35": {
                    x: -18
                },
                "36": {
                    x: -15.15
                },
                "37": {
                    x: -12.35
                },
                "38": {
                    x: -9.5
                },
                "39": {
                    x: -6.65
                },
                "40": {
                    x: -3.85
                },
                "41": {
                    x: -1
                },
                "42": {
                    x: 1.85
                },
                "43": {
                    x: 4.65
                },
                "44": {
                    x: 7.5
                },
                "45": {
                    x: 10.35
                },
                "46": {
                    x: 13.15
                },
                "47": {
                    x: 16
                },
                "48": {
                    x: 18.85
                },
                "49": {
                    x: 21.65
                },
                "50": {
                    x: 24.5
                },
                "51": {
                    x: 27.35
                },
                "52": {
                    x: 30.15
                },
                "53": {
                    x: 33
                },
                "54": {
                    x: 35.85
                },
                "55": {
                    x: 38.65
                },
                "56": {
                    x: 41.5
                },
                "57": {
                    x: 44.35
                },
                "58": {
                    x: 47.15
                },
                "59": {
                    x: 50
                }
            });
    });

    lib.fishStage = MovieClip.extend(function () {
        MovieClip.call(this, {
            duration: 1,
            framerate: 60
        });
        var instance2 = new lib.fish()
            .setTransform(449.45, 297.45);
        this[instance2.name = "fish"] = instance2;
        var instance1 = new lib.mirror()
            .setTransform(445.45, 281.95);
        this[instance1.name = "mirror"] = instance1;
        this.addChild(instance2, instance1);
        this.addAction(function () {
            const rt = this.renderTexture;
            const mirror = this.mirror;
            mirror.alpha = 0;
            const mirrorX = mirror.x - mirror.width / 2;
            const mirrorY = mirror.y - mirror.height / 2;

            const txt = new PIXI.Texture(rt.baseTexture, new PIXI.Rectangle(mirrorX, mirrorY, mirror.width, mirror.height));

            console.log(txt);
            const mirrorSp = new PIXI.Sprite(txt);
            // mirrorSp.x = mirror.x - mirror.width / 2;
            // mirrorSp.y = mirror.y - mirror.height / 2;
            console.log(mirrorSp);
            this.stageSprite.addChild(mirrorSp);

            let i = 0;
            PIXI.ticker.shared.add(() => {
                // i += 0.1;
                // mirrorSp.x = Math.sin(i) * 100 + 300;
                // mirrorSp.y = Math.sin(i) * 100 + 300;
                // console.log(this.mirror.x);
                mirrorSp.x = this.mirror.children[0].x + this.mirror.x - this.mirror.width / 2;
                mirrorSp.y = this.mirror.children[0].y + this.mirror.y - this.mirror.height / 2;

            });
        }, 0);
    });

    lib.fishStage.assets = {
        "fishStage": "img/fishStage.shapes.txt",
        "fishStage_atlas_1": "img/fishStage_atlas_1.json"
    };
})(PIXI, lib = lib || {});
var lib;
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        stage: lib.fishStage,
        background: 0xcccccc,
        width: 1018,
        height: 728,
        framerate: 60,
        totalFrames: 1,
        library: lib
    };
}