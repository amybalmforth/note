(function(exports) {
  function Notecontroller(notelist) {
    this.notelist = notelist;


  };
  Notecontroller.prototype.addHTML = function() {
    var mynote = new Note('favourite drink: seltzer');
    var thisnote = new Note('second fave drink: coffee');
    notelist.createStore(mynote);
    notelist.createStore(thisnote);
    var view = new Noteview(notelist);
    myview = view.returnString();
    var element = document.getElementById("app");
    element.innerHTML = myview;
  }

  var noteview = new Noteview(notelist = new Notelist);
  var controller = new Notecontroller(notelist = new Notelist);
  //controller.addHTML();


  exports.Notecontroller = Notecontroller;
})(this);
