var flickrAppControllers = angular.module('flickrAppControllers', []);

flickrAppControllers.controller('FeedCtrl', ['Feed',
  function(Feed){

    var self = this;

    Feed.getAll().then(function(response){
      self.list = response.data.items;
    });

    self.formatDate = function(dateString){
      var date = new Date(dateString);
      console.log(date.toDateString());
    };

  }
]);
