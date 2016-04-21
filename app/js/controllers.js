(function(){
  "use strict";

  var flickrAppControllers = angular.module('flickrAppControllers', []);

  flickrAppControllers.controller('FeedListCtrl', ['$scope', 'Feed', 'DateFormater',
    function($scope, Feed, DateFormater){

      var feed = Feed.get();

      if(feed.error){
        console.log(feed.error);
      } else {
        $scope.feedList = feed.data;
      }

      $scope.formatDate = function(dateString){
        return DateFormater.set(dateString);
      };

    }
  ]);

  flickrAppControllers.controller('PhotoDetailCtrl', ['$scope', '$routeParams', 'Feed', 'DateFormater',
    function($scope, $routeParams, Feed, DateFormater){

      var feed = Feed.get();

      if(feed.error){
        console.log(feed.error);
      } else {
        $scope.photo = feed.data[$routeParams.photo_id];
        $scope.tags = $scope.photo.tags.split(' ');
      }

      $scope.formatDate = function(dateString){
        return DateFormater.set(dateString);
      };

    }
  ]);

}());
