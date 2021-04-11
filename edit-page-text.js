// easily click and edit all text elements on current page

// one liner for bookmarklet
javascript:if (document.designMode=='off') { document.body.contentEditable='true'; document.designMode='on';} else { document.body.contentEditable='false'; document.designMode='off';} void 0

// formatted function
javascript: if (document.designMode == "off") {
  document.body.contentEditable = "true";
  document.designMode = "on";
} else {
  document.body.contentEditable = "false";
  document.designMode = "off";
}
void 0;
