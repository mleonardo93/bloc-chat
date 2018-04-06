(function() {
  function UserModalInstance($uibModalInstance, $cookies) {
    this.set = function (username) {
      if (username.trim().length == 0) {
        alert("real name ples");
      } else {
        $cookies.put("username", username.trim());
        $uibModalInstance.dismiss();
      }
    }
  }
  angular
    .module("blocChat")
    .controller("UserModalInstance", ["$uibModalInstance", "$cookies", UserModalInstance])
})()
