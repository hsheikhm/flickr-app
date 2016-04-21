var flickrAppServices = angular.module('flickrAppServices', []);

flickrAppServices.factory('Feed', ['$http',
  function($http){

    var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';

    return {
      getAll: function(){
        return $http.jsonp(url);
      }
    };

  }
]);

flickrAppServices.factory('DateFormater', function(){

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

  return {
    set: function(dateString){
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var date = new Date(dateString);

      return date.getDate() + getSuffix(date.getDate()) + " " +
              months[date.getMonth()] + " " +
              date.getFullYear() + " " +
              "at " + date.getHours() + ":" + addZero(date.getMinutes());
    }
  };

});
