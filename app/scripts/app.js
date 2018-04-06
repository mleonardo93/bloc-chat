(function() {
  function config($locationProvider, $stateProvider) {
    $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
         });

    $stateProvider
        .state("home", {
            url: "/",
            controller: "RoomCtrl as room",
            templateUrl: "/templates/home.html"
        })
  }
  function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get("username");
      if (!currentUser || currentUser === "") {
        console.log("cookiectrl working")
        var userInstance = $uibModal.open({
          templateUrl: "/templates/usermodal.html",
          controller: "UserModalInstance as userModalInstance"
        })
      }
    }


  angular
        .module("blocChat", ["ui.router", "firebase", "ui.bootstrap", "ngCookies"])
        .config(config)
        .run(["$cookies", "$uibModal", BlocChatCookies]);
})();
