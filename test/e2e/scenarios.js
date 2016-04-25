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

      it("clicking on photo's image should take you to the content page of the photo", function(){
        element.all(by.css('.photo-image')).first().click();
        browser.getLocationAbsUrl().then(function(url){
          expect(url).toEqual('/feed/photo/0');
        });
      });

      it("clicking on photo's title should take you to the content page of the photo", function(){
        element.all(by.css('.photo-title')).first().click();
        browser.getLocationAbsUrl().then(function(url){
          expect(url).toEqual('/feed/photo/0');
        });
      });

      it("clicking on photo's author should take you to author's Flickr profile", function(){
        element.all(by.css('.photo-author')).first().click().then(function(){
          browser.ignoreSynchronization = true;
          browser.getCurrentUrl().then(function(url){
            browser.ignoreSynchronization = false;
            var authorID = url.slice(30);
            expect(url).toEqual('https://www.flickr.com/people/' + authorID);
          });
        });
      });

      it("clicking on photo's 'View on Flickr' link should take you to the photo on Flickr", function(){
        element.all(by.css('.photo-link')).first().click().then(function(){
          browser.ignoreSynchronization = true;
          browser.getCurrentUrl().then(function(url){
            browser.ignoreSynchronization = false;
            var photoID = url.slice(30);
            expect(url).toEqual('https://www.flickr.com/photos/' + photoID);
          });
        });
      });

      it("should filter the feed list as a user types into search by tag box", function(){
        var feedList = element.all(by.repeater('photo in feedList'));
        var query = element(by.model('tagSearch'));

        expect(feedList.count()).toBe(20);

        query.sendKeys('peneer');
        expect(feedList.count()).toBe(1);
        
        var matchedPhotoTitle = element(by.css('.photo-title')).getText();
        expect(matchedPhotoTitle).toEqual('Peneer Curry with Sweet Potato Fries');
      });

    });

  });

}());
