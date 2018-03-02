(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
      rooms.$add(room).then(function(ref) {
        var id = ref.key;
        console.log("added record with id" + id);
        rooms.$indexFor(id);
      });
    }

    Room.setCurrentRoom = function(roomId) {
      Room.messages = Message.getMessages(roomId)
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
