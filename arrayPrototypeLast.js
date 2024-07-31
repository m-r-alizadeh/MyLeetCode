/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    // if (!this.lenght)
    //     return -1;
    // const last = this[this.length - 1] ;
    return this.length ? this[this.length - 1] : -1

    //for (let i = this.length - 1; i >= 0; i--)
    // if (!isNaN(this[i]))
    //  return this[i];

    // return -1;
};


const arr = [1, 2, 3];
arr.last(); // 3
