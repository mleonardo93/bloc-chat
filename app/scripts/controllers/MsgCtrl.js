(function() {
  function MsgCtrl(Message) {
    this.send = function(inputTxt) {
      Message.send(inputTxt);
    }
    
  }


  angular
      .module("blocChat")
      .controller("MsgCtrl", ["Message", MsgCtrl]);
})();
