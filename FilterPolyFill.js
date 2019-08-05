
//Filter PolyFill

Array.prototype.ownFilter = function() {
    var thatArray = this;
    var callback = arguments[0];
    var arr = [];
    for (let i = 0; i < thatArray.length; i++) {
        if (callback(thatArray[i])) // calling callback function with each argument
            arr.push(thatArray[i]);
    }
    return arr;
};
