(function(exports) {
  function testNoteController() {

      var controller = new Notecontroller(notelist = new Notelist, noteview = new Noteview);
      // var note1 = new Note('omg');
      // notelist.createStore(note1);

      compare.equal(controller.addHTML(), '<ul><li><div>my favourite drink is seltzer</div></li></ul>')


  };

  testNoteController();

})(this);
