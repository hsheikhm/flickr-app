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

      it("each photo should display its title, author, published date and link to Flickr", function(){
        var photoTitles = element.all(by.css('.photo-title')).getText();
        var photoAuthors = element.all(by.css('.photo-author')).getText();
        var photoDates = element.all(by.css('.photo-date')).getText();
        var photoLinks = element.all(by.css('.photo-link')).getText();
        expect(photoTitles.count()).toBe(20);
        expect(photoAuthors.count()).toBe(20);
        expect(photoDates.count()).toBe(20);
        expect(photoLinks.count()).toBe(20);
      });

    });

  });

}());
