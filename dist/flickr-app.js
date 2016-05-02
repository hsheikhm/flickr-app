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
        when('/feed/:tag_id', {
          controller: 'FeedListCtrl',
          templateUrl: 'partials/feed-list.html'
        }).
        when('/feed/photo/:photo_id', {
          controller: 'PhotoDetailCtrl',
          templateUrl: 'partials/photo-detail.html'
        }).
        otherwise({
          redirectTo: '/feed'
        });
    }
  ]);

}());
;(function(){
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
;(function(){
  "use strict";

  var flickrAppDirectives = angular.module('flickrAppDirectives', []);

  flickrAppDirectives.directive("photoDescription", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/photo-description.html'
    };
  });

}());
;(function(){
  "use strict";

  var flickrAppFilters = angular.module('flickrAppFilters', []);

  flickrAppFilters.filter("customDateFormat", function(){

    function getSuffix(date){
      if(date > 3 && date < 21){
        return 'th';
      }
      switch(date % 10){
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }

    function addZero(i) {
      if (i < 10) {
          i = "0" + i;
      }
      return i;
    }

    return function(dateString){
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var date = new Date(dateString);

      return date.getDate() + getSuffix(date.getDate()) + " " +
              months[date.getMonth()] + " " +
              date.getFullYear() + " " +
              "at " + date.getHours() + ":" + addZero(date.getMinutes());
    };

  });

  flickrAppFilters.filter("authorName", function(){

    return function(name){
      return name.slice(19, -1);
    };

  });

}());
;(function(){
  "use strict";

  var flickrAppServices = angular.module('flickrAppServices', []);

  flickrAppServices.factory('Feed', ['$http',
    function($http){

      var feedUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';

      return {
        get: function(){
          return $http.jsonp(feedUrl);
        }
      };

    }
  ]);

}());
