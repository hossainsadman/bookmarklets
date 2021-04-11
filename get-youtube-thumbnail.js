// open thumbnail of current youtube video (at max resolution) in a new window

// one liner for bookmarklet
javascript:var url=window.location.href;var hostname=window.location.hostname;var website="www.youtube.com";var replaced="img.youtube.com";var split=url.split("=");if(hostname==website){if(split.length==1)alert("Not a video");if(split[1].includes("&")){var subSplit=split[1].split("&");if(subSplit[0].length==11){openThumb(subSplit[0])}}else if(split[1].length==11)openThumb(split[1]);else alert("Something is likely broken!")}else alert("Not "+website);function openThumb(videoID){var redir="http://img.youtube.com/vi/"+videoID+"/maxresdefault.jpg";window.open(redir,"Thumbnail for "+videoID,"width=1280, height=720")}

// formatted function
javascript: var url = window.location.href;
var hostname = window.location.hostname;
var website = "www.youtube.com";
var replaced = "img.youtube.com";
var split = url.split("=");
if (hostname == website) {
  if (split.length == 1) alert("Not a video");
  if (split[1].includes("&")) {
    var subSplit = split[1].split("&");
    if (subSplit[0].length == 11) {
      openThumb(subSplit[0]);
    }
  } else if (split[1].length == 11) openThumb(split[1]);
  else alert("Something is likely broken!");
} else alert("Not " + website);
function openThumb(videoID) {
  var redir = "http://img.youtube.com/vi/" + videoID + "/maxresdefault.jpg";
  window.open(redir, "Thumbnail for " + videoID, "width=1280, height=720");
}
