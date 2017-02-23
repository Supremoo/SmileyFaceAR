/*---------------------------------*/
/*------------- Blipp -------------*/
/*---------------------------------*/

blipp = require('blippar').blipp;

blipp.getPeel()
     .setOrientation("portrait")
     .setType("fit");


/*-------------------------------------*/
/*----------- Scene Create ------------*/
/*-------------------------------------*/

var scene = blipp.addScene("default");

var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();

var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.003;

scene.onCreate = function() {
    var smileyMask = scene.addSprite()
                          .setTexture("smiley-face.png")
                          .setName("smiley-face")
                          .setTranslation(0, 0, 1)
                          .setScale(mW, mH, 1);
}

/*-----------------------------------*/
/*----------- Scene Show ------------*/
/*-----------------------------------*/

scene.onShow = function() {
    console.log("Hello! World!");
}