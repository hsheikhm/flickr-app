(function(){
  "use strict";

  describe('flickrAppFilters', function(){

    beforeEach(module('flickrAppFilters'));

    describe('customDateFormat', function(){

      it("should convert a date and time string to a custom format",
        inject(function(customDateFormatFilter){
          expect(customDateFormatFilter("2016-04-25T14:57:03Z")).toBe("25th Apr 2016 at 15:57");
        }));

    });

    describe('authorName', function(){

      it("should extract the author's actual name from the name string",
        inject(function(authorNameFilter){
          expect(authorNameFilter("nobody@flickr.com (rose ǝsoɹ)")).toBe("rose ǝsoɹ");
        }));

    });

  });

}());
