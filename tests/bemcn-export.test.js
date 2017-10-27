var fs = require('fs');
var path = require('path');
var expect = require('expect');

describe('bemcn export specs:', function () {

    it('should export as amd module', function (done) {
        fs.readFile(path.join(__dirname, '../', 'bemcn.js'), 'utf8', function(err, data) {
            var fn = new Function('define', data);
            var define = function(deps, cb) {
                var bemcn = cb();
                expect(typeof bemcn).toBe('function');
                done();
            };
            define.amd = true;
            fn(define);
        });
    });

    it('should export to the window', function (done) {
        fs.readFile(path.join(__dirname, '../', 'bemcn.js'), 'utf8', function(err, data) {
            var fn = new Function('window', data);
            var window = {};
            fn(window);
            expect(typeof window.bemcn).toBe('function');
            done();
        });
    });

});
