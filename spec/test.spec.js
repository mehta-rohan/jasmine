var helpers = require('../helpers/funcHelper.js');
var helperFS = require('../helpers/fileHelper.js'); 


describe('test' , function(){

    it("should run", function(){

        helpers.helper_func(); // use helper
        helperFS.writeHelper();
        expect(1).toBe(1);


    })

})