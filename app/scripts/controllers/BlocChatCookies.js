(function() {
  function BlocChatCookies($cookies) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
    console.log("cookiectrl working")
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', BlocChatCookies]);
})();
