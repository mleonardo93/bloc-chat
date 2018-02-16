(function() {
  function ModalInstanceCtrl($uibModalInstance, Room) {
    this.cancel = function() {
      $uibModalInstance.dismiss("dismiss")
    };
    this.add = function(roomName) {
      $uibModalInstance.close(roomName)
    }
  }
  angular
    .module("blocChat")
    .controller("ModalInstanceCtrl", ["$uibModalInstance", "Room", ModalInstanceCtrl])
})()
