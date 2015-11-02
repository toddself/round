[![Build Status](https://travis-ci.org/toddself/round.svg?branch=master)](https://travis-ci.org/toddself/round)

# round

Round numbers to a specified number of signficant digits or return a 0

## ES6 Module!
This is authored as an ES6 module and relies on ES6 features. The `main` key in `package.json` points to the transpiled ES5 source, but the `jsnext:main` key points to the ES6 original source. If your environement supports: 

* block scoping (`let` & `const`)
* ES6 `import` and `export`

Then feel free to use the ES6 source directly.

## Usage
```js
import round from 'round'

console.log(round(12.5, 0)) // 13
console.log(round(14.5, 1)) // 14.5
console.log(round('robin')) // 0
```

## License
Copyright 2015 Todd Kennedy, [Apache 2.0](LICENSE)  
