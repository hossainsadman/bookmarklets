// inverts all images on current page

// bookmarklet one liner
javascript:var imgs=document.getElementsByTagName("img");for(i=0;i<imgs.length;i++){imgs[i].setAttribute("style","-webkit-filter:invert(100%)");};

// function
javascript: var imgs = document.getElementsByTagName("img");
for (i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("style", "-webkit-filter:invert(100%)");
};