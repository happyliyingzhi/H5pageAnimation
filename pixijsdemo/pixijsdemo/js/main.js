let app = new PIXI.Application({
    width: 750,
    height: 1448
})

//loader
const img1 = ['./images/p1-p1.png'];
let imgArr = [];
for (let i = 1; i <= 52; i++) {
    let temp = i;
    if (i < 10) {
        temp = i;
    }
    imgArr.push('./images/x' + temp + '.png')
}
PIXI.loader.add(img1).add(imgArr).on('progress', function(loader, resource) {
        console.log(loader.progress)
    })
    .load(setup)

function setup() {
    const app = new PIXI.Application({
        width: 750,
        height: 1448
    })
    document.getElementById('stage').appendChild(app.view)
    let spr = new PIXI.Sprite.fromImage(img1[0])
    spr.position.set(375, 724)
    spr.anchor.set(0.5, 0.5)
    app.stage.addChild(spr)
        //帧动画
    let imgArrTemp = [];
    for (let i = 1; i <= 52; i++) {
        let temp = i;
        if (i < 10) {
            temp = i;
        }
        let tempSpr = new PIXI.Texture.fromImage('./images/x' + temp + '.png')
        let tempRect = new PIXI.Rectangle(0, 0, 1318, 1448)
        let imgSprArrItem = new PIXI.Texture(tempSpr, tempRect)
        imgArrTemp.push(imgSprArrItem)

    }
    let animatedSpr = new PIXI.extras.AnimatedSprite(imgArrTemp)
    animatedSpr.position.set(0, 0)
    animatedSpr.animationSpeed = 0.5
    animatedSpr.play()
    app.stage.addChild(animatedSpr)
}