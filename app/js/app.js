var flickrApp = angular.module('flickrApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'flickrAppControllers',
  'flickrAppServices',
  'flickrAppDirectives'
]);

flickrApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
      when('/home', {
        controller: 'FeedCtrl',
        controllerAs: 'feed',
        templateUrl: 'partials/home-page.html'
      }).
      when('/home/:post_id', {
        controller: 'PostCtrl',
        controllerAs: 'post',
        templateUrl: 'partials/post-page.html'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);
