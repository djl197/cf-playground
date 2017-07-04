const allVars = process.env;
var url = process.env.CF_URL_NGINX
//#const allUrls = Object.keys(allVars)
//    .filter(envVarKey => envVarKey.startsWith('CF_URL_'))
//    .reduce((obj, envVarKey) => {
//        obj[envVarKey] = allVars[envVarKey];
//        return obj;
//    }, {});
//
console.log(url)
var urlExists = require('url-exists')
var assert = require("assert");

describe('Dummy Test', function(){
    it('should pass', function(){
      urlExists(url, function(err, exists) {
        console.log(exists); // true 
        assert.ok(exists, "URL does exist")
      });
    });
    it('should fail', function(){
      urlExists('bob', function(err, exists) {
        console.log(exists); // false 
        assert.ok(exists, "URL does NOT exist")
      });
    });
});
