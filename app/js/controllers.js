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

flickrAppControllers.controller('PostCtrl', ['$routeParams', 'Feed', 'DateFormater', '$sce',
  function($routeParams, Feed, DateFormater, $sce){

    var self = this;

    Feed.getAll().then(function(response){
      self.selected = response.data.items[$routeParams.post_id];
      self.description = $sce.trustAsHtml(self.selected.description);
      self.tags = self.selected.tags.split(' ');
    });

    self.formatDate = function(dateString){
      return DateFormater.set(dateString);
    };

  }
]);
