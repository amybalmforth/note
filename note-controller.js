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




  exports.Notecontroller = Notecontroller;
})(this);

// var noteview = new Noteview(notelist = new Notelist);
//var controller = new Notecontroller(notelist = new Notelist);


//var element = document.getElementById("app");
//console.log(element);
//element.innerHTML = "howdy!";

// Code uses the constructor and prototype pattern to define a note controller that can be instantiated.

// The note controller constructor does the following:
// Takes a note list model as a parameter.
// Adds a note that says Favourite drink: seltzer.
// Creates a note list view, passing in the note list model.
// The note controller has a method that gets HTML from the note list view and inserts it into the app element.
