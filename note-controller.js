(function(exports) {
  function Notecontroller(notelist) {
    this.notelist = notelist;
    var mynote = new Note('favourite drink: seltzer');
    notelist.createStore(mynote);

  };
  Notecontroller.prototype.addHTML = function() {
    var view = new Noteview(notelist);
    return view.returnString();
  }




  exports.Notecontroller = Notecontroller;
})(this);

var controller = new Notecontroller(notelist = new Notelist);


//var element = document.getElementById("app");
//console.log(element);
//element.innerHTML = "howdy!";

// Code uses the constructor and prototype pattern to define a note controller that can be instantiated.

// The note controller constructor does the following:
// Takes a note list model as a parameter.
// Adds a note that says Favourite drink: seltzer.
// Creates a note list view, passing in the note list model.
// The note controller has a method that gets HTML from the note list view and inserts it into the app element.
