(function() {
  function RoomCtrl(Room, Message) {
    this.rooms = Room.all;
    this.messages = Message.all;
    this.currentRoom = {};
    this.currentMessages = [];
    this.setCurrentRoom = (room) => {
      console.log(Message.getMessages(room));
      this.currentMessages = Message.getMessages(room);
    }
  }

  angular
    .module("blocChat")
    .controller("RoomCtrl", ["Room", "Message", RoomCtrl]);
})();
