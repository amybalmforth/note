(function(exports) {
  function testNoteController() {

      var controller = new Notecontroller(notelist = new Notelist, noteview = new Noteview);

      compare.equal(controller.addHTML(), '<ul><li><div>my favourite drink i</div></li></ul>')


  };

  testNoteController();

})(this);
