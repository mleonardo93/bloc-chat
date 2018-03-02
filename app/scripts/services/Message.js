(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;
    Message.getMessages = function(roomId) {
      var roomMsg = ref.orderByChild("roomId").equalTo(roomId);
      return roomMsg;
    }



    return Message;

  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
