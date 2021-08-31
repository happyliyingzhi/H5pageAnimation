 const plArr = [
     '../images/bg.jpg', //0
     '../images/ewm.png',
     '../images/logo.png',
     '../images/musicoff.png',
     '../images/musicon.png',
     '../images/p1-bg.png', //5
     '../images/p1-cloud1.png',
     '../images/p1-cloud2.png',
     '../images/p1-grass1.png',
     '../images/p1-grass2.png',
     '../images/p1-house.png', //10
     '../images/p1-p1.png',
     '../images/p1-star.png',
     '../images/p1-tree.png',
 ]
 const p2Arr = [
     '../images/p2-1.png',
     '../images/p2-boy.png',
     '../images/p2-huati.png',
     '../images/p2-lotsofyinfu.png',
     '../images/p2-mother.png',
     '../images/p2-school.png',
     '../images/p2-shitou.png',
     '../images/p2-tree4.png',
     '../images/p2-wutai.png',
     '../images/p2-yinfu.png',
 ]
 let p2Arr2 = [];
 for (let i = 1; i <= 34; i++) {
     let temp = '../images/w' + i + '.png';
     p2Arr2.push(temp)
 }
 const p3Arr = [
     '../images/p3-1.png',
     '../images/p3-2.png',
     '../images/p3-3.png',
     '../images/p3-childbirth.png'
 ]
 const p4Arr = [
     '../images/p4-1.png',
     '../images/p4-bg.png',
     '../images/p4-house3.png',
     '../images/p4-start.png'
 ]
 let p5Arr = []
 for (let i = 1; i <= 52; i++) {
     let temp = '../images/x' + i + '.png';
     p5Arr.push(temp)
 }
 //添加精灵图;
 const spriteGroupObject = [{
     'img': plArr[0],
     'x': 0,
     'y': 0,
     'sprName': 'bgSpr',
     'sprGroup': 'spriteGroupBg'
 }]
 //添加场景1-5
 const sence1Object = [{
         'img': plArr[5],
         'x': 0,
         'y': 0,
         'sprName': 'p1Bg',
         'sprGroup': 'sence1'
     },
     {
         'img': plArr[6],
         'x': -20,
         'y': 177,
         'sprName': 'p1Cloud1',
         'sprGroup': 'sence1'
     },
     {
         'img': plArr[7],
         'x': 725,
         'y': 0,
         'sprName': 'p1Cloud2',
         'sprGroup': 'sence1'
     },
     {
         'img': plArr[8],
         'x': 0,
         'y': 1093,
         'sprName': 'p1Gress1',
         'sprGroup': 'sence1'
     },
     {
         'img': plArr[9],
         'x': 836,
         'y': 1161,
         'sprName': 'p1Grass2',
         'sprGroup': 'sence1'
     },
     {
         'img': plArr[10],
         'x': 732,
         'y': 0,
         'sprName': 'p1House',
         'sprGroup': 'sence1'
     },
     {
         'img': plArr[11],
         'x': 996,
         'y': 600,
         'sprName': 'p1P1',
         'sprGroup': 'sence1'
     },
     {
         'img': plArr[12],
         'x': 424,
         'y': 419,
         'sprName': 'p1Star',
         'sprGroup': 'sence1'
     },
     {
         'img': plArr[13],
         'x': -20,
         'y': 604,
         'sprName': 'p1Tree',
         'sprGroup': 'sence1'
     },
 ]
 const sence2Object = [

    {
        'img': plArr[5],
        'x': 613,
        'y': 31,
        'sprName': 'p2School',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[2],
        'x': 1298,
        'y': 414,
        'sprName': 'p2Huati',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[1],
        'x': 1298,
        'y': 414,
        'sprName': 'p2Boy',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[3],
        'x': 1932,
        'y': 307,
        'sprName': 'p2Lotsofyinfu',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[0],
        'x': 0,
        'y': 816,
        'sprName': 'p21',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[4],
        'x': 144,
        'y': 768,
        'sprName': 'p2Mother',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[6],
        'x': 1200,
        'y': 1149,
        'sprName': 'p2Shitou',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[7],
        'x': 1932,
        'y': 49,
        'sprName': 'p2Tree4',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[8],
        'x': 2243,
        'y': 349,
        'sprName': 'p2Wutai',
        'sprGroup': 'sence2'
    },
    {
        'img': plArr[9],
        'x': 3009,
        'y': 273,
        'sprName': 'p2Yinfu',
        'sprGroup': 'sence2'
    },
    {
        'img': p2Arr2[0],
        'x': 0,
        'y': 0,
        'sprName': 'p2Child',
        'sprGroup': 'sence2'
    },
 ]
 export {
     plArr,
     p2Arr,
     p2Arr2,
     p3Arr,
     p4Arr,
     p5Arr,
     spriteGroupObject,
     sence1Object,
     sence2Object
 }