var flickrAppControllers = angular.module('flickrAppControllers', []);

flickrAppControllers.controller('FeedCtrl', ['$http',
  function($http){

    var self = this;

    var url = 'https://api.flickr.com/services/feeds/photos_public.gne';

    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json', {
        params: {
            format: 'json',
            jsoncallback: 'JSON_CALLBACK'
        }
    }).then(function(response){
      console.log(response);
    });

  }
]);
