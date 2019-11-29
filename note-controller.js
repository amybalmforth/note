(function(exports) {
  function Notecontroller(notelist, noteview) {
    this.notelist = notelist;
    this.noteview = noteview;

  };
  Notecontroller.prototype.addHTML = function() {
    var note1 = new Note('my favourite drink is seltzer');
    notelist.createStore(note1);
    myview = noteview.returnString();
    var element = document.getElementById('app');
    element.innerHTML = myview;
    return myview;
    console.log(myview);

  };


  exports.Notecontroller = Notecontroller;
})(this);
