(function(){
  "use strict";

  var flickrAppControllers = angular.module('flickrAppControllers', []);

  flickrAppControllers.controller('FeedListCtrl', ['$scope', 'Feed',
    function($scope, Feed){

      Feed.get()
        .success(function(response){
          $scope.feedList = response.items;
        })
        .error(function(response){
          console.log("There was an error while fetching the feed");
        });

    }
  ]);

  flickrAppControllers.controller('PhotoDetailCtrl', ['$scope', '$routeParams', 'Feed',
    function($scope, $routeParams, Feed){

      Feed.get()
        .success(function(response){
          $scope.photo = response.items[$routeParams.photo_id];
          $scope.photoTags = $scope.photo.tags.split(' ');
        })
        .error(function(response){
          console.log("There was an error while fetching the feed");
        });

    }
  ]);

}());
