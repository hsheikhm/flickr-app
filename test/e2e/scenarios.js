(function(){
  "use strict";

  describe('flickrApp', function(){

    it("should redirect index.html to index.html#/feed", function(){
      browser.get('app/index.html');
      browser.getLocationAbsUrl().then(function(url){
        expect(url).toEqual('/feed');
      });
    });

    describe('Feed list page', function(){

      beforeEach(function(){
        browser.get('app/index.html#/feed');
      });

      it("should display a list of 20 photos from Flickr feed API", function(){
        var photos = element.all(by.repeater('photo in feedList'));
        expect(photos.count()).toBe(20);
      });

    });

  });

}());
