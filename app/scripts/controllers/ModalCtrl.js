(function() {
  function ModalCtrl($uibModal, Room) {
    this.open = function(){
      var modalInstance = $uibModal.open({
        templateUrl: "/templates/modal.html",
        controller: "ModalInstanceCtrl as modalInstance"
      })
      modalInstance.result.then(function(data) {
        Room.add(data)
      })
      console.log("Modal opened")
    }
  }
  angular
    .module("blocChat")
    .controller("ModalCtrl", ["$uibModal", "Room", ModalCtrl])
})()
