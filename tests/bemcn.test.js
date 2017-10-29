var bemcn = require('../bemcn');
var expect = require('expect');

describe('bemcn specs:', function () {

    beforeEach(function() {
        this.bcn = bemcn('__', '--');
    });

    it('should return block class name', function () {
        expect(this.bcn('block')()()).toBe('block');
    });

    it('should return block class name with modifier', function () {
        expect(this.bcn('block')()('modifier')).toBe('block--modifier');
    });

    it('should return block class name and block class name with modifier', function () {
        expect(this.bcn('block')()('modifier', true)).toBe('block block--modifier');
    });

    it('should return element class name', function () {
        expect(this.bcn('block')('element')()).toBe('block__element');
    });

    it('should return element class name with modifier', function () {
        expect(this.bcn('block')('element')('modifier')).toBe('block__element--modifier');
    });

    it('should return element class name and element class name with modifier', function () {
        expect(this.bcn('block')('element')('modifier', true))
            .toBe('block__element block__element--modifier');
    });

    afterEach(function() {
        delete this.bcn;
    });

});

describe('bemcn with base class by default specs:', function () {

    beforeEach(function() {
        this.bcn = bemcn('__', '--', true);
    });

    it('should return block class name with modifier', function () {
        expect(this.bcn('block')()('modifier', false)).toBe('block--modifier');
    });

    it('should return block class name and block class name with modifier', function () {
        expect(this.bcn('block')()('modifier')).toBe('block block--modifier');
    });

    it('should return element class name with modifier', function () {
        expect(this.bcn('block')('element')('modifier', false)).toBe('block__element--modifier');
    });

    it('should return element class name and element class name with modifier', function () {
        expect(this.bcn('block')('element')('modifier'))
            .toBe('block__element block__element--modifier');
    });

    afterEach(function() {
        delete this.bcn;
    });

});
