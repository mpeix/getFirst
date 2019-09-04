## Use this package to get the first element of an array or object


### Installation

To install the package run: `npm install jsgetfirst --save`

### How to use it?

To get it in you project, call it in you file and use it directly.

```js
//Calling jsgetfirst package
const {getfirst} = require('jsgetfirst');

```

#### Get first item of an array

```js
//Calling jsgetfirst package
const {getfirst} = require('jsgetfirst');

//Array to get first item
const arrayList = ["50", "25", "100"];

//Use getfirst in your code
const getFirstExample  = () => {
    return getfirst(arrayList);
}
```

In the previous example you will get "50" as a result of getFirstExample call.

#### Get first item of an object

Proceed as the above example:
```js
//Calling jsgetfirst package
const {getfirst} = require('jsgetfirst');

//Object to get first item
const testObject = {
    car : {
        wheels : 4,
        doors : 3,
        power: 25
    },
    truk : {
        wheels : 12,
        doors : 2,
        power: 125 
    },
    bus : {
        wheels : 12,
        doors : 5,
        power: 100
    }
}

//Use getfirst in your code
const getFirstExample  = () => {
    return getfirst(testObject);
}
```

Here the result obtined will be:
```js
{ 
    car: { 
        wheels: 4, 
        doors: 3, 
        power: 25 
    } 
}
```



