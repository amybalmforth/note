(function(exports) {
  function Noteview(notelist) {
    this.notelist = notelist;

  };

  Noteview.prototype.returnString = function() {
    var start = '<ul>';
    var middle = '';
    var end = '</ul>';

    for (var i = 0, l = notelist.noteArray.length; i < l; i++) {
      if (notelist.noteArray[i].length > 19) {
        middle += '<li><div>' + notelist.noteArray[i].substring(0, 20) + '</div></li>';
      } else {
        middle += '<li><div>' + notelist.noteArray[i] + '</div></li>';
      };

    };
    return start + middle + end;
  };


  exports.Noteview = Noteview;
})(this);
