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
          templateUrl: '/dist/partials/feed-list.html'
        }).
        when('/feed/:tag_id', {
          controller: 'FeedListCtrl',
          templateUrl: '/dist/partials/feed-list.html'
        }).
        when('/feed/photo/:photo_id', {
          controller: 'PhotoDetailCtrl',
          templateUrl: '/dist/partials/photo-detail.html'
        }).
        otherwise({
          redirectTo: '/feed'
        });
    }
  ]);

}());
