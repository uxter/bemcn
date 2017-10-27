(function() {
    /**
     * @function bemcn
     * @description BEM class names
     * @param {string} ep - element prefix
     * @param {string} mp - modifier prefix
     * @return {b} - block creator
     */
    function bemcn(ep, mp) {
        /**
         * @function b
         * @description block creator
         * @param {string} v - block name
         * @return {e} - element creator
         */
        return function b(v) {
            var bv = v;
            /**
             * @function e
             * @description element creator
             * @param {string=} v - element name
             * @return {e} - element creator
             */
            return function e(v) {
                var ev = v ? bv + ep + v : bv;
                /**
                 * @function m
                 * @description modifier and result creator
                 * @param {string=} v - modifier name
                 * @param {boolean=} wb - with base class name
                 * @return {string} - result
                 */
                return function m(v, wb) {
                    var mv = v ? ev + mp + v : ev;
                    return v && wb ? ev + ' ' + mv : mv;
                };
            };
        };
    }

    /* Node.js module */
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = bemcn;
        return;
    }

    /* Asynchronous Module Definition */
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return bemcn;
        });
        return;
    }

    /* Export to the window */
    window.bemcn = bemcn;
})();
