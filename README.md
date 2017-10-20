> Roman numeral converter

This is a simple module that takes a single string input that represents a Roman numeral and returns the decimal equivalent number.

## Install

```console
$ npm install romannumeralconvert
```

## Usage

Simply pass in a String of Roman numerals and see the decimal number returned! If invalid input is passed into the first argument the function will return -1. Subsequent arguments passed into the function will be ignored/unused.

```javascript
const romanNumeralConvert = require('romannumeralconvert');

romanNumeralConvert('MCMLXXXVII') // returns the number 1987
```

## Test

In order to run the unit tests testing the module simply enter the command below when in the root of the repository:

```console
$ npm test
```



