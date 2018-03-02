(function() {
  function RoomCtrl(Room, Message) {
    this.rooms = Room.all;
    this.messages = Message.all;
    this.currentRoom = {};
    this.setCurrentRoom = (room) => {
      console.log("hi");
    }
  }

  angular
    .module("blocChat")
    .controller("RoomCtrl", ["Room", "Message", RoomCtrl]);
})();
