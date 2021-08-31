import {
    plArr,
    p2Arr,
    p2Arr2,
    p3Arr,
    p4Arr,
    p5Arr,
    spriteGroupObject,
    sence1Object,
    sence2Object 
} from './data.js'
var app = null
//页面预加载
PIXI.loader
    .add(plArr)
    .add(p2Arr)
    .add(p2Arr2)
    .add(p3Arr)
    .add(p4Arr)
    .add(p5Arr)
    .on('progress', function (loader, resource) {
        console.log(loader.progress)
    })
    .load(load)

function load() {
     app = new PIXI.Application({
        width: 750,
        height: 1448
    })
    document.getElementById('stage').appendChild(app.view);
    //创建精灵组
    //背景
    let spriteGroupBg = new PIXI.Container();
    spriteGroupBg.position.set(0, 0);
    spriteGroupBg.name = "spriteGroupBg";
    app.stage.addChild(spriteGroupBg)
    //场景组
    let spriteGroupSences = new PIXI.Container();
    spriteGroupSences.position.set(0, 0);
    spriteGroupSences.name = "spriteGroupSences";
    app.stage.addChild(spriteGroupSences);
    //场景一
    let sence1 = new PIXI.Container();
    sence1.position.set(0, 0);
    sence1.name = "sence1";
    spriteGroupSences.addChild(sence1);
    //场景二
    let sence2 = new PIXI.Container();
    sence2.position.set(1773, 0);
    sence2.name = "sence2";
    spriteGroupSences.addChild(sence2);
    //场景三
    let sence3 = new PIXI.Container();
    sence3.position.set(4960, 0);
    sence1.name = "sence3";
    spriteGroupSences.addChild(sence3);
    //场景四
    let sence4 = new PIXI.Container();
    sence4.position.set(7902, 0);
    sence4.name = "sence4";
    spriteGroupSences.addChild(sence4);
    //结束页面
    let spriteGroupLast = new PIXI.Container();
    spriteGroupLast.position.set(-203, 0);
    spriteGroupLast.name = "spriteGroupLast";
    app.stage.addChild(spriteGroupLast);
    //添加精灵图;
    // let spriteGroupObject= [{
    //     'img': plArr[0],
    //     'x':0,
    //     'y':0,
    //     'sprName':'bgSpr',
    //     'sprGroup':spriteGroupBg
    // }]
    //添加场景1-5
    // let sence1Object= [{
    //     'img': plArr[5],
    //     'x':0,
    //     'y':0,
    //     'sprName':'p1Bg',
    //     'sprGroup':sence1
    // }]
    //创建精灵图，加载精灵
    let scenceObject = {
        spriteGroupBg: spriteGroupBg,
        sence1: sence1,
        sence2: sence2,
        sence3: sence3,
        sence4: sence4
    }
    let spritesObject = [...spriteGroupObject,...sence1Object, ...sence2Object];
    for(let key of Object.keys(spritesObject)) {
        let temp = spritesObject[key];
        addSprToGroup(temp.img,temp.x,temp.y,temp.sprName, temp.sprGroup)
    }


//封装函数，创建精灵图
function addSprToGroup(img,x,y,sprName, sprGroup) {
    let spr = new PIXI.Sprite.fromImage(img);
    spr.position.set(x,y);
    spr.name= sprName;
    let sprGroupDate= scenceObject[sprGroup]
    // let sprArr = sprGroup.split('/');
    // let sprites = app.stage.getChildByName(sprArr[0]);
    // let test  = spriteGroupSences.getChildByName(sence1);
    // console.log('test--',  spriteGroupSences.getChildByName())
    // let sprArrNum = sprArr.length;
    // if(sprArrNum > 1) {
    //    for(let i=0; i<sprArrNum; i++) {
    //        let midName = sprArr[i];
    //        console.log('midName', midName)
    //        console.log('sprites', sprites)
    //        sprites= sprites.getChildByName(midName)
    //     //    console.log('spritesTemp',spritesTemp)
    //    }
    // }
    sprGroupDate.addChild(spr)
   }
}
















//模拟的demo
/** 
function setup() {
    const app = new PIXI.Application({
        width: 750,
        height: 1448
    })
    document.getElementById('stage').appendChild(app.view)
    let spr2 = new PIXI.Sprite.fromImage(img1[0])
    spr2.position.set(375, 724)
    spr2.anchor.set(0.5, 0.5)
    spr2.alpha = 0;
    app.stage.addChild(spr2)
    let spr = new PIXI.Sprite.fromImage(imgArr[0])
    spr.position.set(375, 724)
    spr.anchor.set(0.5, 0.5)
    spr.alpha = 0;
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
    let animatedSpr = new PIXI.extras.AnimatedSprite(imgArr)
    animatedSpr.position.set(0, 0)
    animatedSpr.animationSpeed = 0.5
    // animatedSpr.play()
    // app.stage.addChild(animatedSpr)
    //移动端事件
    var min = -2000
    var phyTouch = new AlloyTouch({
        touch: "body", //反馈触摸的dom
        bindSelf: false,
        maxSpeed: 0.1,
        initialValue: 0,
        min: min, //不必需,运动属性的最小值
        max: 0, //不必需,滚动属性的最大值
        // vertical: true,//不必需，默认是tru
        change: changeFn
    })
    //动画事件
    let allTimeLine = new TimelineMax({
        paused: true
    }) //如果设置为true，时间轴将在创建时立即暂停。默认false
    //change事件
    function changeFn(value) {
        let progressShow = value / min;
        allTimeLine.seek(progressShow) // 不改变状态（播放、暂停、方向）的情况下直接跳转到某个时间点
        animationPlay(progressShow)
    }

    function animationPlay(progressShow) {
        if (progressShow >= 0.6) {
            let imgArrNum = imgArr.length;
            let index = Math.ceil((progressShow - 0.6) / 0.3 * imgArrNum) //占总比30%的时候进行
            console.log(index)
            if (index < imgArrNum) {
                spr.texture = new PIXI.Texture.fromImage('./images/x' + index + '.png')
            }
        }
    }


    // let timeline1= new TimelineMax({delay:0.3}) //时间轴动画开始之前的延迟秒数（或帧数）。restart()无视delay。
    // let tweenMax1= new TweenMax(spr, 0.1, {alpha: 1})
    // timeline1.add(tweenMax1,0)
    // allTimeLine.add(timeline1,0)
    let timeline1 = new TimelineMax({
        delay: 0.3
    }) //时间轴动画开始之前的延迟秒数（或帧数）。restart()无视delay。
    let tweenMax1 = new TweenMax(spr, 0.1, {
        alpha: 1
    })
    timeline1.add(tweenMax1, 0)
    allTimeLine.add(timeline1, 0)
}
*/