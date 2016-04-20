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

flickrAppServices.factory('dateFormater', function(){

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

  return {
    set: function(dateString){
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var date = new Date(dateString);

      return date.getDate() + getSuffix(date.getDate()) + " " +
              months[date.getMonth()] + " " +
              date.getFullYear() + " " +
              "at " + date.getHours() + ":" + date.getMinutes();
    }
  };

});
