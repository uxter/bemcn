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
var bc = bemcn('__', '--');

bc('b')()()             // b
bc('b')()('m')          // b--m
bc('b')()('m', true)    // b b--m
bc('b')('e')()          // b__e
bc('b')('e')('m')       // b__e--m
bc('b')('e')('m', true) // b__e b__e--m
```

```js
var bc = bemcn('__', '--', true);

bc('b')()()              // b
bc('b')()('m', false)    // b--m
bc('b')()('m')           // b b--m
bc('b')('e')()           // b__e
bc('b')('e')('m', false) // b__e--m
bc('b')('e')('m')        // b__e b__e--m
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

## Functions

<dl>
<dt><a href="#bemcn">bemcn(ep, mp, [wbd])</a> ⇒ <code><a href="#b">b</a></code></dt>
<dd><p>BEM class names</p>
</dd>
<dt><a href="#b">b(v)</a> ⇒ <code><a href="#e">e</a></code></dt>
<dd><p>block creator</p>
</dd>
<dt><a href="#e">e([v])</a> ⇒ <code><a href="#m">m</a></code></dt>
<dd><p>element creator</p>
</dd>
<dt><a href="#m">m([v], [wb])</a> ⇒ <code>string</code></dt>
<dd><p>modifier and result creator</p>
</dd>
</dl>

<a name="bemcn"></a>

## bemcn(ep, mp, [wbd]) ⇒ [<code>b</code>](#b)
BEM class names

**Kind**: global function  
**Returns**: [<code>b</code>](#b) - - block creator  

| Param | Type | Description |
| --- | --- | --- |
| ep | <code>string</code> | element prefix |
| mp | <code>string</code> | modifier prefix |
| [wbd] | <code>boolean</code> | with base class name (default value) |

<a name="b"></a>

## b(v) ⇒ [<code>e</code>](#e)
block creator

**Kind**: global function  
**Returns**: [<code>e</code>](#e) - - element creator  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>string</code> | block name |

<a name="e"></a>

## e([v]) ⇒ [<code>m</code>](#m)
element creator

**Kind**: global function  
**Returns**: [<code>m</code>](#m) - - modifier and result creator  

| Param | Type | Description |
| --- | --- | --- |
| [v] | <code>string</code> | element name |

<a name="m"></a>

## m([v], [wb]) ⇒ <code>string</code>
modifier and result creator

**Kind**: global function  
**Returns**: <code>string</code> - - result  

| Param | Type | Description |
| --- | --- | --- |
| [v] | <code>string</code> | modifier name |
| [wb] | <code>boolean</code> | with base class name (default wbd) |


## Example

```js
var bcn = bemcn('__', '--', true);
var form = bcn('form');
var field = form('field');
var label = form('label');

form()('inline') // form form--inline
field()          // form__field
field('error')   // form__field form__field--error
label()          // form__label
label('hidden')  // form__label form__label--hidden
```

## Note on Patches/Pull Requests

1. Fork the project.
2. Make your feature addition or bug fix.
3. Send me a pull request.

* * *

&copy; 2017 Vasily Shilov
