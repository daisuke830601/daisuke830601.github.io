var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var resize = function(defaultWidth=960, defaultHeight=640) {
  var widthRate = screenWidth / defaultWidth;
  var heightRate = screenHeight / defaultHeight;
  var resizeRate = widthRate;
  var outer = document.getElementById("fa_outer");
  if ( screenHeight < screenWidth ){
    resizeRate = heightRate;
  }
  var outerLeft = (((outer.clientWidth * resizeRate) - outer.clientWidth) / 2) + ((screenWidth - (outer.clientWidth * resizeRate)) / 2);
  var outerTop = (((outer.clientHeight * resizeRate) - outer.clientHeight) / 2) + ((screenHeight - (outer.clientHeight * resizeRate)) / 2);
  outer.setAttribute("style", "transform:scale(" + resizeRate + "); left: " + outerLeft + "px; top: " + outerTop + "px");
}
function init() {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
  resize();
}

window.addEventListener("load", init);
