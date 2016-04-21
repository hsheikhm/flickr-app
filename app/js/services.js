(function(){
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
