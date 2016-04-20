var flickrAppServices = angular.module('flickrAppServices', []);

flickrAppServices.factory('Feed', ['$http',
  function($http){

    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json';

    return {
      getAll: function(){
        return $http.jsonp(url, {
          params: {
            format: 'json',
            jsoncallback: 'JSON_CALLBACK'
          }
        });
      }
    };

  }
]);
