var flickrAppControllers = angular.module('flickrAppControllers', []);

flickrAppControllers.controller('FeedCtrl', ['Feed', 'DateFormater',
  function(Feed, DateFormater){

    var self = this;

    Feed.getAll().then(function(response){
      self.list = response.data.items;
    });

    self.formatDate = function(dateString){
      return DateFormater.set(dateString);
    };

  }
]);

flickrAppControllers.controller('PostCtrl', ['$routeParams', 'Feed', 'DateFormater',
  function($routeParams, Feed, DateFormater){

    var self = this;

    Feed.getAll().then(function(response){
      self.selected = response.data.items[$routeParams.post_id];
    });

  }
]);
