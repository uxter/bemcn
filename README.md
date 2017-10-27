[![view on npm](http://img.shields.io/npm/v/bemcn.svg)](https://www.npmjs.org/package/bemcn)
[![npm module downloads](http://img.shields.io/npm/dt/bemcn.svg)](https://www.npmjs.org/package/bemcn)
[![Build Status](https://travis-ci.org/uxter/bemcn.svg?branch=master)](https://travis-ci.org/uxter/bemcn)
[![Coverage Status](https://codecov.io/gh/uxter/bemcn/branch/master/graph/badge.svg)](https://codecov.io/gh/uxter/bemcn)
[![Dependency Status](https://david-dm.org/uxter/bemcn.svg)](https://david-dm.org/uxter/bemcn)
[![Join the chat at https://gitter.im/bemcn](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bemcn?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# bemcn

bemcn is an utility for creating BEM class names.

## Explanation

```js
var b = bemcn(/* element prefix */, /* modifier prefix */);
// b - {Function} block creator

var e = b(/* block name */);
// e - {Function} element creator

var m = e(/* element name */);
// m - {Function} modifier creator

m(/* modifier name */, /* with base class name */)
// returns {string} result


// Example
var bcn = bemcn('__', '--');

bcn('block')()()
// block

bcn('block')()('modifier')
// block--modifier

bcn('block')()('modifier', true)
// block block--modifier

bcn('block')('element')()
// block__element

bcn('block')('element')('modifier')
// block__element--modifier

bcn('block')('element')('modifier', true)
// block__element block__element--modifier
```

## Install

```
$ npm install --save bemcn
```

## Usage

#### Browser

```html
<script src="path/to/bemcn.js"></script>
<script>
    var bcn = bemcn('__', '--');
    bcn('block')('element')('modifier');
</script>
```

#### AMD

```js
requirejs(['path/to/bemcn'], function(bemcn) {
    var bcn = bemcn('__', '--');
    bcn('block')('element')('modifier');
});
```

#### Node.js

```js
var bemcn = require('bemcn');
var bcn = bemcn('__', '--');
bcn('block')('element')('modifier');
```

## Example

```js
var bcn = bemcn('__', '--');
var formBl = bcn('form');
var fieldEl = formBl('field');
var labelEl = formBl('label');

formBl()('inline', true)
// form form--inline

fieldEl()
// form__field

fieldEl('error', true)
// form__field form__field--error

labelEl()
// form__label

labelEl('hidden', true)
// form__label form__label--hidden
```

## Note on Patches/Pull Requests

1. Fork the project.
2. Make your feature addition or bug fix.
3. Send me a pull request.

* * *

&copy; 2017 Vasily Shilov
