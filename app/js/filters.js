(function(){
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
