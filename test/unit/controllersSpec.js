(function(){
  "use strict";

  describe('flickrAppControllers', function(){

    beforeEach(function(){
      this.addMatchers({
        toEqualData: function(expected){
          return angular.equals(this.actual, expected);
        }
      });
    });

    beforeEach(module('flickrApp'));
    beforeEach(module('flickrAppServices'));
    beforeEach(module('flickrAppFilters'));
    beforeEach(module('flickrAppDirectives'));

    describe('FeedListCtrl', function(){

      var scope, ctrl, $httpBackend, feedUrl, feedData;

      feedUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK';

      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
        $httpBackend = _$httpBackend_;
        $httpBackend.expectJSONP(feedUrl).respond(feedData);
        scope = $rootScope.$new();
        ctrl = $controller('FeedListCtrl', {$scope: scope});
      }));

      feedData = {
    		"items": [
    	   {
    			"title": "Sugar Glazed Potatoes",
    			"link": "https://www.flickr.com/photos/83139978@N02/26545465022/",
    			"media": {"m":"https://farm2.staticflickr.com/1448/26545465022_01ed1d5c30_m.jpg"},
    			"date_taken": "2016-04-24T19:16:31-08:00",
    			"description": " <p><a href=\"https://www.flickr.com/people/83139978@N02/\">rose ǝsoɹ<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/83139978@N02/26545465022/\" title=\"Sugar Glazed Potatoes\"><img src=\"https://farm2.staticflickr.com/1448/26545465022_01ed1d5c30_m.jpg\" width=\"240\" height=\"160\" alt=\"Sugar Glazed Potatoes\" /><\/a><\/p> <p>Divine! Traditional Danish dish, especially for the big meal on christmas eve.<\/p>",
    			"published": "2016-04-25T14:57:03Z",
    			"author": "nobody@flickr.com (rose ǝsoɹ)",
    			"author_id": "83139978@N02",
    			"tags": "christmas food denmark dish sony vegetable sugar caramel potato danish glazed 1650mm a6000"
        }]
      };

      it("should create a 'feedList' model that contains an array of all photos", function(){
        $httpBackend.flush();
        expect(scope.feedList).toEqualData(feedData.items);
      });

      it("should create a default 'tagSearch' model that is undefined", function(){
        expect(ctrl.tagSearch).toBeUndefined();
      });

    });

  });

}());
