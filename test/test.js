const assert = require('assert');
const {isEqual}  = require('@ngard/tiny-isequal');
const {getfirst} = require('../index.js');

const objectToTest = {
    car: {
        doors: 3,
        wheels: 4,
        seats: 5
    },
    bike: {
        seats: 1,
        wheels: 2
    },
    bus: {
        seats: 30,
        wheels: 10,
        doors: 6
    }
}

const arrayToTest = ["Hello", "Good Morning", "Goodbye"];

describe('Getfirst tests', () => {
    it('Get first from object', () => {
        assert.ok(isEqual({car: {doors: 3, wheels: 4, seats: 5 }},getfirst(objectToTest)))
    });
    it('Get first from array', () =>{
        assert.equal("Hello", getfirst(arrayToTest));
    });
});