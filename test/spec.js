const jamellknows = require('..');
const assert = require('assert');

assert.strictEqual(jamellknows.squeezeArray([1,22,[3,4,[5]]]), '122345')
//assert.strictEqual(jamellknows.squeeze([1,2,3,4,5]), '132345') // this failed
assert.strictEqual(jamellknows.squeezeArray([1,2,3,4,5]), '12345')

console.log("passed")