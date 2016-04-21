(function(){
  "use strict";

  var flickrAppServices = angular.module('flickrAppServices', []);

  flickrAppServices.factory('Feed', ['$http',
    function($http){

      var feedUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';

      return {
        get: function(){
          $http.jsonp(feedUrl)
            .success(function(response){
              return { data: response.data.items };
            })
            .error(function(response){
              return { error: "There was an error while fetching the feed" };
            });
        }
      };
    }
  ]);

}());
