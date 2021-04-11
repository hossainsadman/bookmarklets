// removes sidebar elements on specific PDF viewer pages in Chrome

// one liner for bookmarklet
javascript:(function(){ var men = document.getElementById("menu"); men.style.width = "0px"; var art = document.getElementById("article"); art.style.marginLeft="0px"; var pic = document.getElementById("minime"); pic.style.visibility = "hidden";})();

// formatted function
javascript: (function () {
  var men = document.getElementById("menu");
  men.style.width = "0px";
  var art = document.getElementById("article");
  art.style.marginLeft = "0px";
  var pic = document.getElementById("minime");
  pic.style.visibility = "hidden";
})();
