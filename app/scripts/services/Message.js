(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var thisRoomId = "";

    Message.all = messages;
    Message.getMessages = function(roomId) {
      var roomMsg = ref.orderByChild("roomId").equalTo(roomId);
      roomMsg = $firebaseArray(roomMsg)
      thisRoomId = roomId;
      return roomMsg;
    }

    Message.send = function(inputTxt) {
      var send = messages.$add({ content: inputTxt, roomId: thisRoomId, sentAt: Date(), username: $cookies.get("username") })
    }





    return Message;

  }

  angular
    .module("blocChat")
    .factory("Message", ["$firebaseArray", "$cookies", Message]);
})();
