(function(){
  "use strict";

  var flickrAppControllers = angular.module('flickrAppControllers', []);

  flickrAppControllers.controller('FeedListCtrl', ['$scope', '$routeParams', 'Feed',
    function($scope, $routeParams, Feed){

      Feed.get()
        .success(function(response){
          $scope.feedList = response.items;
        })
        .error(function(response){
          console.log("There was an error while fetching the feed");
        });

      if($routeParams.tag_id){
        $scope.tagSearch = $routeParams.tag_id;
      }

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
