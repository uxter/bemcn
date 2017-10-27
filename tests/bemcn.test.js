var bemcn = require('../bemcn');
var expect = require('expect');

var bcn = bemcn('__', '--');

describe('bemcn specs:', function () {

    it('should return block class name', function () {
        expect(bcn('block')()()).toBe('block');
    });

    it('should return block class name with modifier', function () {
        expect(bcn('block')()('modifier')).toBe('block--modifier');
    });

    it('should return block class name and block class name with modifier', function () {
        expect(bcn('block')()('modifier', true)).toBe('block block--modifier');
    });

    it('should return element class name', function () {
        expect(bcn('block')('element')()).toBe('block__element');
    });

    it('should return element class name with modifier', function () {
        expect(bcn('block')('element')('modifier')).toBe('block__element--modifier');
    });

    it('should return element class name and element class name with modifier', function () {
        expect(bcn('block')('element')('modifier', true))
            .toBe('block__element block__element--modifier');
    });

});
