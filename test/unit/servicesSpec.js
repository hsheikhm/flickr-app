(function(){
  "use strict";

  describe('flickrAppServices', function(){

    beforeEach(module('flickrApp'));

    it("check the existence of the Feed factory", inject(function(Feed){
      expect(Feed).toBeDefined();
    }));

  });

}());
