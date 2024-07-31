/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {

    if (typeof classFunction !== 'function') return false


    if (obj === null || obj === undefined) return false

    if ((typeof obj === 'number' || typeof obj === 'string' ||
        typeof obj === 'boolean' || typeof obj === 'bigint' ||
        typeof obj === 'symbol') && classFunction === Object) {
        return true
    }

    if (typeof obj === 'number' && classFunction === Number) return true
    if (typeof obj === 'string' && classFunction === String) return true
    if (typeof obj === 'boolean' && classFunction === Boolean) return true
    if (typeof obj === 'bigint' && classFunction === BigInt) return true
    if (typeof obj === 'symbol' && classFunction === Symbol) return true

    return obj instanceof classFunction
};


console.log(checkIfInstanceOf(new Date(), Date)); // true

class Animal { };
class Dog extends Animal { };
console.log(checkIfInstanceOf(new Dog(), Animal)); // true
