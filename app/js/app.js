(function(){
  "use strict";

  var flickrApp = angular.module('flickrApp', [
    'ngRoute',
    'ngResource',
    'ngAnimate',
    'flickrAppControllers',
    'flickrAppServices',
    'flickrAppFilters',
    'flickrAppDirectives'
  ]);

  flickrApp.config(['$routeProvider',
    function($routeProvider){
      $routeProvider.
        when('/feed', {
          controller: 'FeedListCtrl',
          templateUrl: 'partials/feed-list.html'
        }).
        when('/feed/photo/:photo_id', {
          controller: 'PhotoCtrl',
          templateUrl: 'partials/photo-detail.html'
        }).
        otherwise({
          redirectTo: '/feed'
        });
    }
  ]);

}());
