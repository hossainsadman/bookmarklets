// enables scrolling webpage with arrow keys (up, down); useful if mouse scroll wheel is disabled

// bookmarklet one liner
javascript:void function(){document.onkeydown=function(a){var b=window.event%3Fevent:a;38==b.keyCode%26%26window.scrollBy(0,-100),40==b.keyCode%26%26window.scrollBy(0,100),220==b.keyCode%26%26window.scrollBy(-100,0),103==b.keyCode%26%26window.scrollBy(100,0)}}();

// function
javascript: void
function() {
    document.onkeydown = function(a) {
        var b = window.event % 3 Fevent: a;
        38 == b.keyCode % 26 % 26 window.scrollBy(0, -100), 40 == b.keyCode % 26 % 26 window.scrollBy(0, 100), 220 == b.keyCode % 26 % 26 window.scrollBy(-100, 0), 103 == b.keyCode % 26 % 26 window.scrollBy(100, 0)
    }
}();