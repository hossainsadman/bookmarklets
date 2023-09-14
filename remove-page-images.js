// remove all images on current page

// bookmarklet one liner
javascript:(function(){var imgs=document.getElementsByTagName("img");for(var i=0;i<imgs.length;i++)imgs[i].style.visibility="hidden"}());

// function
javascript: (function() {
    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) imgs[i].style.visibility = "hidden"
}());