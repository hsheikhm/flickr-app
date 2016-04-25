(function(){
  "use strict";

  var flickrAppDirectives = angular.module('flickrAppDirectives', []);

  flickrAppDirectives.directive("photoDescription", function(){
    return {
      restrict: 'E',
      templateUrl: 'partials/photo-description.html'
    };
  });

}());
