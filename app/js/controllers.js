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

      var feed = Feed.get();

      // if(feed.error){
      //   console.log(feed.error);
      // } else {
      //   $scope.photo = feed.data[$routeParams.photo_id];
      //   $scope.tags = $scope.photo.tags.split(' ');
      // }

    }
  ]);

}());
